# Cloud Resume IaC
My professional resume/portfolio hosted in the AWS cloud using various AWS technologies and written with HTML and CSS. This repository includes all cloud configurations saved as Infrastructure as Code using AWS CloudFormation and AWS SAM.

**Link to project:** https://kimaniwalker.com/

![](https://i.imgur.com/btiIZYC.png)
![](https://i.imgur.com/jPu2jqP.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript (Front-End), Python (Back-End), AWS SAM (IaC), S3, Route 53, CloudFront, ACM, Lambda, AWS API Gateway, DynamoDB

![](https://media.licdn.com/dms/image/D5612AQHYK6G1sZURBw/article-cover_image-shrink_600_2000/0/1655920671605?e=2147483647&v=beta&t=ddbl-FivaWe07Oh00fYtgt1Uln0wAYmYVPvHXBBgaG0)

I started this project by building out my portfolio and resume with HTML, CSS and Bootstrap. From there, I deployed the site to S3, and purchased a domain name through Route 53, then set up SSL certificates with ACM and CloudFront as to have a secure connection (HTTPS). I then wrote some Javascript to link to the API that I would later create as to update the number of visitors that visited and viewed my resume. That was essentially it for the front end.

For the back-end API, Python was my language of choice. I created a DynamoDB database to store the visitor counter data. I then defined the API functions using Lambda and used API Gateway to bridge the front-end with the back API defined in the Lambda functions with Python.

Once the site was deployed and the front end and back end were fully operational, I then used AWS Cloudformation and SAM to save configurations as Insfrastructure as Code. This will make rapid deployment possible in the future.

## Future Optimizations
This project still has room for improvement. One such improvement is imeplenting CI/CD with automated testing by setting up GitHub Actions.

Another room for improvement is by using Terraform instead of SAM for IaC.


## Lessons Learned:

I learnt how to deploy a website and setting up certifications and domain names manually. I also learnt how to deploy an API using a serverless cloud service such as Lambda.
