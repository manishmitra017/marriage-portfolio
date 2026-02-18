#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WeddingPortfolioStack } from '../lib/wedding-portfolio-stack';

const app = new cdk.App();

const account = process.env.CDK_DEFAULT_ACCOUNT || '147845228831';
const domainName = process.env.DOMAIN_NAME || '';
const certificateArn = process.env.CERTIFICATE_ARN || '';

new WeddingPortfolioStack(app, 'WeddingPortfolioStack', {
  env: {
    account,
    region: 'ap-southeast-2',
  },
  crossRegionReferences: true,
  domainName: domainName || undefined,
  certificateArn: certificateArn || undefined,
  description: 'Wedding Photo Portfolio — S3 + CloudFront Static Website',
  tags: {
    Project: 'WeddingPortfolio',
    Owner: 'Manish Mitra',
    Environment: 'Production',
  },
});

app.synth();
