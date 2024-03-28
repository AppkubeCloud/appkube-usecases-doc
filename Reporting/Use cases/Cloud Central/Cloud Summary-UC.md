
**Use Case Of Cloud Summary.**

**Title:** Use Case of Cloud Summary.

**Actors:**  CEO, CTO, CFO, Cloud Administrator, Cloud Operations Team leads.

**Description:** This use case describes the functionality of the Cloud Summary section within the cloud central Dashboard. The Cloud Summary provides users with a high-level overview of the cloud infrastructure, including the total number of Accounts, products, and services. 

**Actors:**

- CEO, CTO, CFO, Cloud Administrator, Cloud Operations Team leads.

**Trigger Point:**

1. The user want to know about the cloud summary functionality.

**Preconditions:**

1. User must have access permissions to the Cloud Central Dashboard.
1. User must be logged into the AppKube platform.

**Main Flow:**

1. User logs into the AppKube platform using their credentials.
1. After successful login, the user navigates to the reporting module within the AppKube platform.
1. Within the reporting module, the user selects the Cloud Central Dashboard.
1. Below the Cloud provider there’s a Cloud Summary widget, which displays numerical information about the total number of accounts, products, and services.
1. In a cloud summery Widget the user click on Accounts.
1. The user is directed to an Accounts page.
1. In the top of the page there’s a breadcrumb to go back to the previous pages.
1. There’s a search bar to search for an account with the account name or account id.
1. The Account details shows in the tabular format with the following details such as
- Account Name
- Account ID
- Department Name
- Regions
- VPC’s
- Products
- Services.
1. User clicks on a Products or services to go the particular page.
1. Suppose user clicks on the products, then the user Redirects to the particular account Products page.
1. All products are displayed in tabular Format, and in the top right corner user can switch to the particular category by default all is selected.
1. Table includes the columns such as,
   1. product name
   1. VPC ID
   1. Region
   1. Total number of services
   1. product category.
1. User Clicks on Product Name of the 3-tier.
1. User redirect to the particular product page. 
1. On the 3-tier product page, on the top of the page there’s a breadcrumb to go back to the previous pages.
1. ` `the user see all layers of the product (web layer, app layer, data layer, auxiliary layer) on the left side and overall services of the production stage on the right side. User clicks on ec2 service, which redirects to the particular service list which shows in a tabular format on the bottom of the page. Which includes the following details,
- Instance ID
- Instance type
- Availability zone
- Pricing model
- Adds-on
- Usage hours
- Created on
- Instance State

1. User Clicks on the Instance ID which redirects to the instance page.
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data on his/her way.


   ` `<b>User Click on web layer in 17<sup>th</sup> point.</b>

1. User Select the Web layer on the Left side of the page, on the right side according to the layer the services are shown.
1. User selects the EC2 service from the services, and a table of EC2 services is shown at the bottom of the page, displaying
- Instance ID
- Instance type
- Availability zone
- Pricing model
- Adds-on
- Usage hours
- Created on
- Instance State
1. Clicks on the Instance ID which redirects to the instance page.
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data on his/her way.

**The user Click on the SOA Product.**

**Normal Flow:**

1. User clicks on the SOA Product, the user is redirected to the SOA product page.
1. On the top of the page there’s a breadcrumb to back to the previous pages..
1. the user see the Business and common services of the product page on the left side and overall services of the production stage on the right side. 
1. On the right side Corner shows the software environment( Production, Staging, Testing, and Development ). By default, the Production stage is selected.
1. The user can select a business or common service, the user selects the business service then the list of modules is displayed, By default first module of the business is selected According to the selection of Service, the right side shows the App service, Data Service and  other Services.
1. The user selects the App Service, then the AWS Services of the App service is displayed in the same widget. Same to all other services.
1. The user selects the EC2 service from the services, a table of EC2 services is shown at the bottom of the page, displaying the Items such as 
   1. Instance ID
   1. Instance type
   1. Availability zone
   1. Pricing model
   1. Usage hours
   1. Adds-on
   1. Created on
   1. Instance State
1. the user clicks on the instance ID, then the user is redirected to the particular instance page.
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data on his/her way.

<b>On 3<sup>rd</sup> point User Clicks on the EC2 from the Services of the Production stage.</b>

1. On the right side, overall services of the production stage which shows the services. User clicks on ec2 service from the services, which redirects to the particular service list which shows in a tabular format on the bottom of the page. Which includes the following details,
- Instance ID
- Instance type
- Availability zone
- Pricing model
- Adds-on
- Usage hours
- Created on
- Instance State

1. User Clicks on the Instance ID which redirects to the instance page.
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data on his/her way.


**User Clicks on the Products in the Cloud summary widget.**

1. If the user clicks on the Products on the Cloud summary.
1. The user is redirected to the products page, on the top of the page there’s a breadcrumb to go back to the previous pages.
1. All products are displayed in cards, and in the top right corner user can switch to the particular category by default ALL is selected.
1. Each product card contains details such as, 
   1. product name
   1. product category (3-tier)
   1. department name
   1. Account name
   1. Account ID
   1. VPC ID
   1. Region.
   1. Total number of services.
1. The user can click on the "View Details" button on a product card to redirect to the particular product page.
1. User click on the button 3-tier Product card, then the user is redirected to the 3-tier product page.
1. On the 3-tier product page, on the top of the page there’s a breadcrumb to go back to the previous pages.
1. the user sees all layers of the product (web layer, app layer, data layer, auxiliary layer) on the left side and overall services of the production stage on the right side. User clicks on ec2 service, which redirects to the particular service list which shows in a tabular format on the bottom of the page. Which includes the following details,
- Instance ID
- Instance type
- Availability zone
- Pricing model
- Adds-on
- Usage hours
- Created on
- Instance State
1. User Clicks on the Instance ID which redirects to the instance page.
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data on his/her way.


   ` `<b>User Click on web layer in 8<sup>th</sup> point.</b>

1. User Select the Web layer on the Left side of the page, on the right side according to the layer the services are shown.
1. User selects the EC2 service from the services, and a table of EC2 services is shown at the bottom of the page, displaying
- Instance ID
- Instance type
- Availability zone
- Pricing model
- Adds-on
- Usage hours
- Created on
- Instance State
1. Clicks on the Instance ID which redirects to the instance page.
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data on his/her way.

**The user Click on the SOA Product.**

**Normal Flow:**

1. User clicks on the SOA Product, the user is redirected to the SOA product page.
1. On the top of the page there’s a breadcrumb to back to the previous pages..
1. the user see the Business and common services of the product page on the left side and overall services of the production stage on the right side. 
1. On the right side Corner shows the software environment( Production, Staging, Testing, and Development ). By default, the Production stage is selected.
1. The user can select a business or common service, the user selects the business service then the list of modules is displayed, By default first module of the business is selected According to the selection of Service, the right side shows the App service, Data Service and  other Services.
1. The user selects the App Service, then the AWS Services of the App service is displayed in the same widget. Same to all other services.
1. The user selects the EC2 service from the services, a table of EC2 services is shown at the bottom of the page, displaying the Items such as 
   1. Instance ID
   1. Instance type
   1. Availability zone
   1. Pricing model
   1. Usage hours
   1. Adds-on
   1. Created on
   1. Instance State
1. the user clicks on the instance ID, then the user is redirected to the particular instance page.
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data on his/her way.

<b>On 3<sup>rd</sup> point User Clicks on the EC2 from the Services of the Production stage.</b>

1. On the right side, overall services of the production stage which shows the services. User clicks on ec2 service from the services, which redirects to the particular service list which shows in a tabular format on the bottom of the page. Which includes the following details,
- Instance ID
- Instance type
- Availability zone
- Pricing model
- Adds-on
- Usage hours
- Created on
- Instance State

1. User Clicks on the Instance ID which redirects to the instance page.
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data.



**User Clicks on the Services in the Cloud summary widget.**

1. user clicks on the services of cloud summary widget, which redirects the user to service page.
1. On the top of the page there’s a breadcrumbs to go back to the pervious pages.
1. Services pages shows the overall services of all accounts of an organization.
1. From the services, user clicks on the EC2 service which redirect to ec2 list page, which shows the list of all instances in a tabular format. which includes the following details.
   1. Instance ID
   1. Instance Type
   1. Availability Zone
   1. Account Name
   1. Product Name
   1. Adds-on
   1. Created on 
   1. Usage hours
   1. Instance State.
1. User can click on Instance ID to view details of a particular instance, which redirects them to the single instance page.
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data on his/her way.

**Post Conditions:**

1. User gains insights into the overall cloud infrastructure through the Cloud Summary section.
1. User can explore individual accounts and their specific cloud usage metrics.
1. User can make informed decisions regarding resource optimization and cost savings based on the detailed information provided within the cloud central Dashboard.

**Alternate Flow:**

1. If the user selects an account from the list and the account does not have detailed information available or cannot be accessed. the user can’t see the details of the particular account.
