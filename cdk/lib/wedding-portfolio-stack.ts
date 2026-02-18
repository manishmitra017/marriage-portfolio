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
  certificateArn?: string;
}

export class WeddingPortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: WeddingPortfolioStackProps) {
    super(scope, id, props);

    const domainName = props?.domainName;
    const wwwDomainName = domainName ? `www.${domainName}` : undefined;

    // Import ACM Certificate from us-east-1 (must exist before deploy)
    const certificate =
      props?.certificateArn && props.certificateArn.length > 0
        ? acm.Certificate.fromCertificateArn(this, 'ImportedCertificate', props.certificateArn)
        : undefined;

    // S3 bucket — private, accessed only via CloudFront OAC
    const websiteBucket = new s3.Bucket(this, 'WeddingPortfolioBucket', {
      bucketName: `wedding-portfolio-static-${this.account}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      versioned: false,
    });

    // CloudFront Function — rewrites /path/ → /path/index.html
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
      comment: 'URL rewrite for Next.js static export — appends index.html',
    });

    // CloudFront distribution
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
      domainNames:
        certificate && domainName && wwwDomainName ? [domainName, wwwDomainName] : undefined,
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

    // Route53 records — only when a custom domain + cert is configured
    if (certificate && domainName && wwwDomainName) {
      const hostedZone = new route53.PublicHostedZone(this, 'WeddingHostedZone', {
        zoneName: domainName,
        comment: 'Hosted zone for wedding portfolio',
      });

      new route53.ARecord(this, 'WeddingAliasRecord', {
        zone: hostedZone,
        recordName: domainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });

      new route53.ARecord(this, 'WeddingWwwAliasRecord', {
        zone: hostedZone,
        recordName: wwwDomainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });

      new cdk.CfnOutput(this, 'HostedZoneId', {
        value: hostedZone.hostedZoneId,
        description: 'Route53 Hosted Zone ID',
      });

      new cdk.CfnOutput(this, 'NameServers', {
        value: cdk.Fn.join(', ', hostedZone.hostedZoneNameServers || []),
        description: 'Update these at your domain registrar',
      });

      new cdk.CfnOutput(this, 'WebsiteURL', {
        value: `https://${domainName}`,
        description: 'Wedding Portfolio Website URL',
      });
    }

    // Outputs used by GitHub Actions
    new cdk.CfnOutput(this, 'BucketName', {
      value: websiteBucket.bucketName,
      description: 'S3 Bucket Name for GitHub Actions S3 sync',
      exportName: 'WeddingPortfolioBucketName',
    });

    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront Distribution ID for cache invalidation',
      exportName: 'WeddingPortfolioDistributionId',
    });

    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: `https://${distribution.distributionDomainName}`,
      description: 'CloudFront Distribution URL (always available)',
    });
  }
}
