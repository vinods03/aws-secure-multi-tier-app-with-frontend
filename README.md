The Presentation Tier is built with Angular and hosted on S3, with CloudFront distribution on top of S3
The Application Tier consists of API Gateway that accepts the input from Frontend, passes it on to SQS queue, lambda and invokes machine learning models hosted on Kubernetes cluster.
The Data Tier is MySQL DB that stores the predictions by the ML models for the given user input
