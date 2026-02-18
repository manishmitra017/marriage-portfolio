import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import { Construct } from 'constructs';

export interface WeddingPortfolioStackProps extends cdk.StackProps {
  domainName?: string;
  hostedZoneId?: string;
  certificateArn?: string;
}

export class WeddingPortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: WeddingPortfolioStackProps) {
    super(scope, id, props);

    const domainName = props?.domainName;
    const wwwDomainName = domainName ? `www.${domainName}` : undefined;

    // ── S3 bucket — private, served only via CloudFront OAC ─────────────────
    const websiteBucket = new s3.Bucket(this, 'WeddingPortfolioBucket', {
      bucketName: `wedding-portfolio-static-${this.account}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      versioned: false,
    });

    // ── CloudFront Function — rewrites clean URLs to index.html ─────────────
    const urlRewriteFunction = new cloudfront.Function(this, 'UrlRewriteFunction', {
      code: cloudfront.FunctionCode.fromInline(`
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  } else if (!uri.includes('.')) {
    request.uri += '/index.html';
  }
  return request;
}
      `),
      functionName: 'WeddingPortfolioUrlRewrite',
      comment: 'URL rewrite for Next.js static export',
    });

    // ── Route53 hosted zone — imported (already created via CLI) ────────────
    let hostedZone: route53.IHostedZone | undefined;
    if (domainName && props?.hostedZoneId) {
      hostedZone = route53.HostedZone.fromHostedZoneAttributes(this, 'WeddingHostedZone', {
        hostedZoneId: props.hostedZoneId,
        zoneName: domainName,
      });
    }

    // ── ACM certificate — imported once CERTIFICATE_ARN secret is set ───────
    const certificate =
      props?.certificateArn && props.certificateArn.length > 0
        ? acm.Certificate.fromCertificateArn(this, 'Certificate', props.certificateArn)
        : undefined;

    // ── CloudFront distribution ──────────────────────────────────────────────
    const distribution = new cloudfront.Distribution(this, 'WeddingPortfolioDistribution', {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        compress: true,
        functionAssociations: [
          {
            function: urlRewriteFunction,
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
          },
        ],
      },
      domainNames: certificate && domainName && wwwDomainName
        ? [domainName, wwwDomainName]
        : undefined,
      certificate,
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
        {
          httpStatus: 403,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
    });

    // ── Route53 A records — added once cert + hosted zone are both present ───
    if (certificate && hostedZone && domainName && wwwDomainName) {
      new route53.ARecord(this, 'RootAliasRecord', {
        zone: hostedZone,
        recordName: domainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });

      new route53.ARecord(this, 'WwwAliasRecord', {
        zone: hostedZone,
        recordName: wwwDomainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });

      new cdk.CfnOutput(this, 'WebsiteURL', {
        value: `https://${domainName}`,
        description: 'Live website URL',
      });
    }

    // ── Outputs used by GitHub Actions pipeline ──────────────────────────────
    new cdk.CfnOutput(this, 'BucketName', {
      value: websiteBucket.bucketName,
      description: 'S3 bucket name for S3 sync',
      exportName: 'WeddingPortfolioBucketName',
    });

    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront distribution ID for cache invalidation',
      exportName: 'WeddingPortfolioDistributionId',
    });

    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: `https://${distribution.distributionDomainName}`,
      description: 'CloudFront URL (always available)',
    });
  }
}
