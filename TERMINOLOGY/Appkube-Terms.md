## Organization
We refer the main enterprise that takes Appkube product. Organization name is assigned to the product when its first time deployed.

## Department or LOB or Business Unit

Every enterprises have different department that owns different products specific to their business.

## Cloud --
There are cloud providers like AWS / AZURE / GCP who provides IT infrastructure as service(IAAS). Enterprises are moving their IT infrastructure mostly to the cloud providers(AWS,Azure,GCP).

## Landing Zone --

Whenever you want to go to a cloud provider, you should create a separate account(Root Account) and create a new account for separate business units(deparments) and deploy the products and services for that business unit in that child account. every child account is called the landing zone for the organization.The correct analogy could be , you are creating a airport for your flight services.The child account is created with some security and compliance as like airport standards. For different clouds the landing zone technically looks different , like for AWS is account, Azure is tenant and GCP is project etc. To treat all clouds in same way we call it landing zone.

## Product Enclave --

Inside the landing zone, we create several isolated network zones for different products -
That is called product enclave. Generally you deploy a pariticular product inside the product enclave.The correct analogy could be , you are creating the terminals inside the Airport(Landing Zone)

## Product

Every business units runs different kinds of software products like HR department runs 
HRMS, TOUR product. Generally for every product , a separate product enclave is created where the product related all workloads get deployed and managed.

## Environment

For every enterprise product, generally we keep multiple environments.Software products changes are done through multiple stages of the process to avoid regression. Developers write and build the product in Dev environment, Testers test the product in Test environment,and after testing the product, the feature is deployed to stage environment for final review and finally pushed to production. So every environment will hold the services for the product.The infrastructure that is used for production environment is actually contributing to the business , but we need to keep the overhead of the other environment. The idea is to reduce that overhead.


## Services/ Modules

Every product is made of multiple services that are responsible for implementing the specific functionality of the product. Every service is responsible for implementing a set of APIs that are responsible for delivering the functionality.APIs generally store and retrieve data about the service. Generally a service is implemented as a program written in JavaScript / java / NodeJs / Golang / Python / PHP / .NET / .. that access some databases to store /retrieve/process data.Each service implements a set of APIs that you can test with postman etc. 

## API Specification

Any service implements a set of APIs that can be described in the documentation in standard format. That is often referred to as API specification

## App Service

Inside the service , the program that implements the API's functionality is often referred to as App Service.

## Data Service

Inside the service , the database that stores the data is often referred to as Data Service.

## Common Service

Most products have some common functionality like Search /  RBAC / Policy Engine ... etc are often referred to as common Services

## Business Service

Domain specific functionality like Admission / Exams are often referred to as Business Services

![Alt text](image.png)

## Relationships between Cloud / Landing Zone / PE / Services 

![Alt text](image-1.png)


## Service Deployment  
App services are deployed either in cluster or serverless manner or some legacy service are deployed in pure node.
Data services are deplyed eiether in cluster or data services are sometime cloudmanaged services.

## Container Cluster

Inside a product enclaves you can create multiple clusters and deploy services in them or also you can use cloud managed services. Containers clusters are set of machines clubbed together as unit and you can deploy service in them without being aware of which node they finally get deployed. AWS support ECS and EKS cluster.

## Serverless Platform

Some services API's are implemented as lambda functions which is cloud managed service. 

## Cloud Managed

Some App or Data services are managed by cloud providers like AWS RDS service where we get databases from RDS as a service. Those services are referred to as "Cloud Managed Services." 

## Cluster Managed

Some App or Data services are deployed to container cluster inside the product enclave. These services are referred to as "Cluster Managed Services"

## Service Lifecycle

![Alt text](image-2.png)

For every service, we need to manage the above lifecycle, get the stats / metrics have different tests readiness. 

## Observability

This is service monitoring , often referred to as SRE(system reliability engineering)

## SLE
service level expectations -- this is the different performance / availability / reliability / endusage expectations define as KPA.

## Developer
Responsibile for code development and testing.

## Operations
Responsibile for infrastructure management and taking care of Application Management and different operations.

## Security

Responsibile for security management and taking care of Infrastructure and Application security management.

## DevOps
A methodology where developers not only create applications but also take responsibility of maintaining the application and solving operations issues.

## DevSecOps

A methodology where developers does take care of operations and security issues.

## DevOps Tooling
The SRE framework that does monitor Performance / Availability/ Reliability / Security / End Usage / Data Protection 

# SecOps Tooling
Continuous security and operation management tooling

## Cloud Element
We refer to the Cloud Element as the all available infrastructure elements like Node / Clusters / Databases / Cloud Managed Services / Serverless Framework  etc

## Business Element
We refer to the Business Element as the all available logical elements like organizations/ departments / products / environments / services ..

## Business to INFRA Mapping

FinOps
AIOps
GITOps
ChargeBack
Budget
Business ROI
Topology
Api Gateway
Load Balancer

Deployment Architecture

Service Code Repository
Container Repository
Specific Element Manager
Cloud Element Manager
Service Manager
SLE Explorer
Process Explorer





