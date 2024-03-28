
**Use Case Of Product Category.**

**Title:** Use case of Product Category. 

**Description:** This use case describes the process for users to interact with product category information within the Cloud Central Dashboard of the AppKube platform. Users can explore a list of products, By clicking the view details of individual products, and navigate to specific pages for 3-tier, SOA, all products list, instance details, and utilization graphs.

**Actors:**  CEO, CTO, CFO, Cloud Administrator, Cloud Operations Team leads.

**Trigger Points:**

1. the user wants to know about the Product Category Details.

**Preconditions:**

1. User initiates access to the Cloud Central Dashboard within the AppKube platform.

**Main Flow:**

1. User logs into the AppKube platform using their credentials.
1. After successful login, the user navigates to the reporting module within the AppKube platform.
1. Within the reporting module, the user selects the option to access the Cloud Central Dashboard.
1. In a dashboard, there’s a Product category widget, which shows the total products of all accounts in two categories one is SOA Products and 3-tier products.
1. If the user clicks on the view details button of the product category.
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
  1. Instance ID,  Instance Type, Availability Zone, Product Name, Adds-on, Created on, Usage hours and Instance State.
1. User Clicks on the Instance ID which redirects to the instance page.
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data on his/her way.


   ` `<b>User Click on web layer in 12<sup>th</sup> point.</b>

1. User Select the Web layer on the Left side of the page, on the right side according to the layer the services are shown.
1. User selects the EC2 service from the services, and a table of EC2 services is shown at the bottom of the page, displaying
 1. Instance ID,  Instance Type, Availability Zone, Product Name, Adds-on, Created on, Usage hours and Instance State.
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
  1. Instance ID,  Instance Type, Availability Zone, Product Name, Adds-on, Created on, Usage hours and Instance State.
1. the user clicks on the instance ID, then the user is redirected to the particular instance page.
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data on his/her way.

<b>On 3<sup>rd</sup> point User Clicks on the EC2 from the Services of the Production stage.</b>

1. On the right side, overall services of the production stage which shows the services. User clicks on ec2 service from the services, which redirects to the particular service list which shows in a tabular format on the bottom of the page. Which includes the following details,
   1. Instance ID,  Instance Type, Availability Zone, Product Name, Adds-on, Created on, Usage hours and Instance State.

1. User Clicks on the Instance ID which redirects to the instance page.
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data on his/her way.

   
**Alternative Flow:**

1. If the user selects some other widget on the cloud central dashboard, the corresponding data is displayed.
1. If the user encounters an error while accessing product category widget or detailed reports, an error message is displayed, suggesting troubleshooting steps or recommending contacting support for assistance.

**Post conditions:**

- The user gains insights into the product category and patterns across various categories within the AWS environment.
- The user can analyze the product category effectively, identify areas for cost optimization, and make informed decisions to manage cloud expenses efficiently.

**Success Scenario:**

- The user successfully accesses the product category widget, navigates to the detailed top used services reports, customizes the view using filter and duration options, and analyzes spending data to optimize costs effectively.

**Failure Scenario:**

- The user encounters an error while accessing the product category widget or detailed reports, hindering their ability to analyze spending data and make informed decisions. The user may need to retry accessing the widget or seek assistance from the support team to resolve the issue.

   
