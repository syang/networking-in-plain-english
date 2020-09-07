# AWS Networking in Plain English -- (1)

We use parking lot as an analogy to introduce the concept of VPC, Subnets, Internet Gateway, and Route table

## How to run the project

- First, please install cdk globally
    - `# npm install -g aws-cdk`

- Next download the code and sythesize the stack

    * `# git clone https://github.com/syang/networking-in-plain-english & cd npm install -g aws-cdk`
    * `# cd parkinglot-n-vpc & npm install`
    * `# cdk synth`


## Other Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
