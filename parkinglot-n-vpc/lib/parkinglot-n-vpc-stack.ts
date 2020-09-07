import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2'

export class ParkinglotNVpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const vpc = new ec2.Vpc(this, 'ParkingLotVPC', {
      cidr: '10.1.0.0/16',
      subnetConfiguration: [{
          cidrMask: 24,
          name: 'public subnet',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'private subnet',
          subnetType: ec2.SubnetType.ISOLATED,
        },
      ],
    });
  }
}
