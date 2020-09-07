#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ParkinglotNVpcStack } from '../lib/parkinglot-n-vpc-stack';

const app = new cdk.App();
new ParkinglotNVpcStack(app, 'ParkinglotNVpcStack');
