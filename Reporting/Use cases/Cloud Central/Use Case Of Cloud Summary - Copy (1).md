<a name="_hlk161929327"></a>**Use Case Cloud Summary.**

![A screenshot of a dashboard

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.001.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.002.jpeg)


![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.003.jpeg)


**Title:** Use Case of cloud summary.

**Actors:**  CEO, CTO, CFO, Cloud Administrator, Cloud Operations Team leads.

**Description:** This use case describes the functionality of the Cloud Summary section within the single account  Dashboard. The Cloud Summary provides users with a high-level overview of the cloud infrastructure, including the total number of AWS Regions, products, and AWS services. 

**Actors:**

- CEO, CTO, CFO, Cloud Administrator, Cloud Operations Team leads.

**Trigger Point:**

1. The user accesses the Cloud Central Dashboard within the AppKube platform.

**Preconditions:**

1. User must have access permissions to the Cloud Central Dashboard.
1. User must be logged into the AppKube platform.

**Main Flow:**

1. User logs into the AppKube platform using their credentials.
1. After successful login, the user navigates to the reporting module within the AppKube platform.
1. Within the reporting module, the user selects the Cloud Central Dashboard.
1. Below the Cloud provider there’s a Cloud Summary widget, which displays numerical information about the total number of accounts, products, and services across the selected cloud provider.
1. In a cloud summery Widget when the user click on Accounts.
1. User is directed to a Account list page.
1. In the top of the page there’s a breadcrumb to go back to the previous pages.
1. There’s a search bar to search for an account with the account name or account id.
1. Displaying a tabular list of accounts which includes details such as 
- Account Name
- Account ID
- Department Name
- Total number of Regions
- Total number of VPC’s
- Total number of Products
- Total number of Services.
1. User clicks on an Account ID ( Hyper link )from the list.
1. User is redirected to the Single Account Dashboard, showing a detailed summary of the selected account's cloud usage.
1. On the top of the page there’s a breadcrumb to back to the previous pages.
1. The Single Account Dashboard includes information such as cloud summary which shows the total number of regions, total number of products, and total number of services in numerical form.
1. User views the total number of 3-tier products and SOA products in a Product Category widget.
1. User explores the "Potential Savings" section, which indicates that 25% of services can save costs through rightsizing and terminating idle resources.
1. User examines the "Status of Analysed Services" section, which categorizes services into four stages: Optimal, Savings, Risk, and Not Analysed.
1. User reviews the "Top Used Services" section, displaying the count of top services utilized across all products.

**Regions:**

![](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.004.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.005.jpeg)

` `![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.006.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.007.jpeg)

![A screen shot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

**Normal flow:**

1. If the user clicks the region on the cloud summary in the single account dashboard then the user is redirected to the regions page.
1. The page displays the region's name and overall services of all regions by default.
1. if the user selects any region then the services should display only the selected region's services.
1. If the user selects the EC2 service from the list of available services within the region.
1. then the user redirect to the list of instance pages which shows in a tabular format.
1. There’s a breadcrumb on the top of the page to go back to the previous pages.
1. A search bar to search for a particular instance with the instance id.
1. The table includes columns such as 
   1. Instance ID
   1. Instance Type
   1. Availability Zone
   1. Product Name
   1. Instance State
   1. Usage hours
   1. Add-on
   1. Overall Status of the instance.
1. User can click on an Instance ID to view details of a specific EC2 instance, which redirects them to the Single Instance page.
1. On the Single Instance page, the user views information about the current instance on the left side and recommendations of the instance on the right side.
1. User can click on CPU, memory, storage, or network utilization at the bottom left side of the page to view utilization graphs on the right side. By default, CPU utilization is selected.
1. In CPU Utilization there are two graphs are shown one is Current instance CPU utilization and recommended instance CPU utilization.  In all  graphs show the last 6 hours of data. And there’s a filter to change the data according to the time. 
1. ` `memory utilization is also the same as the CPU utilization graphs.
1. storage utilization shows two graphs one is Disk read/ Write operations per second and Disk Read/Write Bandwidth( MiB/second ).
1. Network Utilization shows two graphs one is Network packets IN/OUT (Per Second) and Network IN/OUT Traffic( Per/Second ).



**Products:**

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.011.jpeg)

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screen shot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

**Normal flow:**

1. If the user clicks one the products in a cloud summary widget.
1. The user is redirected to the product list page, on the top of the page there’s a breadcrumb to go back to the previous pages.
1. All products are displayed in cards, and in the top right corner user can switch to the particular category by default all is selected.
1. Each product card contains details such as, 
   1. product name
   1. product category (3-tier)
   1. department name
   1. Account name
   1. Account ID
   1. VPC ID
   1. Region of VPC
   1. Total number of services.
1. The user can click on the "View Details" button on a product card to redirect to the particular product page.
1. If the product is a 3-tier product, then the user is redirected to the 3-tier product page.
1. On the 3-tier product page, on the top of the page there’s a breadcrumb to go back to the previous pages.
1. ` `the user can see all layers of the product (web layer, app layer, data layer, auxiliary layer) on the left side and overall services of the production stage on the right side.
1. The user can select different stages of the software environment (production, staging, testing, development) from the top right corner.
1. When the user clicks on any layer, the services of that particular layer are displayed in the right size. 
1. If the user selects the EC2 service from the services, a table of EC2 services is shown at the bottom of the page, displaying 
- Instance ID
- Instance type
- Availability zone
- Pricing model
- Usage hours
- Overall status.
1. If the user clicks on the instance ID, then the user is redirected to the particular instance page.
1. On the instance page, the user can view information about the current instance on the left side and recommendations options on the right side.
1. User can click on CPU, memory, storage, or network utilization at the bottom left side of the page to view utilization graphs on the right side. By default, CPU utilization is selected.
1. In CPU Utilization there are two graphs are shown one is Current instance CPU utilization and recommended instance CPU utilization.  In all  graphs show the last 6 hours of data. And there’s a filter to change the data according to the time. 
1. ` `memory utilization is also the same as the CPU utilization graphs.
1. storage utilization shows two graphs one is Disk read/ Write operations per second and Disk Read/Write Bandwidth( MiB/second ).
1. Network Utilization shows two graphs one is Network packets IN/OUT (Per Second) and Network IN/OUT Traffic( Per/Second ).

**IF the user Click on the SOA Product.**

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screen shot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

**Normal Flow:**

1. If the product is a SOA product, the user is redirected to the SOA product page.
1. A breadcrumb trail at the top of the screen provides navigation options.
1. the user see the Business and common services of the product page on the left side and overall services of the production stage on the right side. 
1. On the right side Corner shows the software environment( Production, Staging, Testing, and Development ). By default, the Production stage is selected.
1. The user can select business or common service, if the user selects the business service then the list of modules is displayed, By default first module of the business is selected According to the selection of Service, the right side shows the App service, Data Service or other Services.
1. If the user selects the App Service, then the AWS Services of the App service is displayed in the same widget. Same to all other services.
1. If the user selects the EC2 service from the services, a table of EC2 services is shown at the bottom of the page, displaying the Items such as 
   1. Instance ID
   1. Instance type
   1. Availability zone
   1. Pricing model
   1. Usage hours
   1. Overall state.
1. If the user clicks on the instance ID, then the user is redirected to the particular instance page.
1. On the instance page, the user can view information about the current instance on the left side and recommendations options on the right side.
1. User can click on CPU, memory, storage, or network utilization at the bottom left side of the page to view utilization graphs on the right side. By default, CPU utilization is selected.
1. In CPU Utilization there are two graphs are shown one is Current instance CPU utilization and recommended instance CPU utilization.  In all  graphs show the last 6 hours of data. And there’s a filter to change the data according to the time. 
1. ` `memory utilization is also the same as the CPU utilization graphs.
1. storage utilization shows two graphs one is Disk read/ Write operations per second and Disk Read/Write Bandwidth( MiB/second ).
1. Network Utilization shows two graphs one is Network packets IN/OUT (Per Second) and Network IN/OUT Traffic( Per/Second ).

**Overall Services:**

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.025.jpeg)

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.027.jpeg)

![A screenshot of a computer

Description automatically generated]

![A screen shot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

**Normal flow:**

1. User clicks on the total number of AWS services displayed in the Cloud Summary widget.
1. User is redirected to the Overall services page where all the services are shown in count.
1. There is search bar to search a service by its name. And on the top of the page there’s a breadcrumbs to go back to the pervious pages.
1. User selects the EC2 service from the list of services, which redirects them to the list of EC2 services page.
1. On the list of EC2 services page, user can view details of each instance in a tabular method and there’s a search bar to search the instance with the instance Id, the table includes the following column, 
   1. Instance ID
   1. Instance Type
   1. Availability Zone
   1. Product Name
   1. Instance State
   1. Usage hours
   1. Add-on
   1. Overall Status of the instance.
1. User can click on Instance ID to view details of a particular instance, which redirects them to the single instance page.
1. On the single instance page, user can view information about the current instance on the left side and recommendations on the right side.
1. User can click on CPU, memory, storage, or network utilization at the bottom left side of the page to view utilization graphs on the right side. By default, CPU utilization is selected.
1. In CPU Utilization there are two graphs are shown one is Current instance CPU utilization and recommended instance CPU utilization.  In all  graphs show the last 6 hours of data. And there’s a filter to change the data according to the time. 
1. ` `memory utilization is also the same as the CPU utilization graphs.
1. storage utilization shows two graphs one is Disk read/ Write operations per second and Disk Read/Write Bandwidth( MiB/second ).
1. Network Utilization shows two graphs one is Network packets IN/OUT (Per Second) and Network IN/OUT Traffic( Per/Second ).

**About the Product Category Widget:**

`	`**![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.029.jpeg)**

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screen shot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

**Normal flow:**

1. If the user clicks one the view details (CTA) on the product Category widget.
1. The user is redirected to the product list page, on the top of the page there’s a breadcrumb to go back to the previous pages.
1. All products are displayed in cards, and in the top right corner user can switch to the particular category by default all is selected.
1. Each product card contains details such as, 
   1. product name
   1. product category (3-tier)
   1. department name
   1. Account name
   1. Account ID
   1. VPC ID
   1. Region of VPC
   1. Total number of services.
1. The user can click on the "View Details" button on a product card to redirect to the particular product page.
1. If the product is a 3-tier product, then the user is redirected to the 3-tier product page.
1. On the 3-tier product page, on the top of the page there’s a breadcrumb to go back to the previous pages.
1. ` `the user can see all layers of the product (web layer, app layer, data layer, auxiliary layer) on the left side and overall services of the production stage on the right side.
1. The user can select different stages of the software environment (production, staging, testing, development) from the top right corner.
1. When the user clicks on any layer, the services of that particular layer are displayed in the right size. 
1. If the user selects the EC2 service from the services, a table of EC2 services is shown at the bottom of the page, displaying 
- Instance ID
- Instance type
- Availability zone
- Pricing model
- Usage hours
- Overall status.
1. If the user clicks on the instance ID, then the user is redirected to the particular instance page.
1. On the instance page, the user can view information about the current instance on the left side and recommendations options on the right side.
1. User can click on CPU, memory, storage, or network utilization at the bottom left side of the page to view utilization graphs on the right side. By default, CPU utilization is selected.
1. In CPU Utilization there are two graphs are shown one is Current instance CPU utilization and recommended instance CPU utilization.  In all  graphs show the last 6 hours of data. And there’s a filter to change the data according to the time. 
1. ` `memory utilization is also the same as the CPU utilization graphs.
1. storage utilization shows two graphs one is Disk read/ Write operations per second and Disk Read/Write Bandwidth( MiB/second ).
1. Network Utilization shows two graphs one is Network packets IN/OUT (Per Second) and Network IN/OUT Traffic( Per/Second ).


**IF the user Click on the SOA Product.**

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screen shot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

**Normal Flow:**

1. If the product is a SOA product, the user is redirected to the SOA product page.
1. A breadcrumb trail at the top of the screen provides navigation options.
1. the user see the Business and common services of the product page on the left side and overall services of the production stage on the right side. 
1. On the right side Corner shows the software environment( Production, Staging, Testing, and Development ). By default, the Production stage is selected.
1. The user can select business or common service, if the user selects the business service then the list of modules is displayed, By default first module of the business is selected According to the selection of Service, the right side shows the App service, Data Service or other Services.
1. If the user selects the App Service, then the AWS Services of the App service is displayed in the same widget. Same to all other services.
1. If the user selects the EC2 service from the services, a table of EC2 services is shown at the bottom of the page, displaying the Items such as 
   1. Instance ID
   1. Instance type
   1. Availability zone
   1. Pricing model
   1. Usage hours
   1. Overall state.
1. If the user clicks on the instance ID, then the user is redirected to the particular instance page.
1. On the instance page, the user can view information about the current instance on the left side and recommendations options on the right side.
1. User can click on CPU, memory, storage, or network utilization at the bottom left side of the page to view utilization graphs on the right side. By default, CPU utilization is selected.
1. In CPU Utilization there are two graphs are shown one is Current instance CPU utilization and recommended instance CPU utilization.  In all  graphs show the last 6 hours of data. And there’s a filter to change the data according to the time. 
1. ` `memory utilization is also the same as the CPU utilization graphs.
1. storage utilization shows two graphs one is Disk read/ Write operations per second and Disk Read/Write Bandwidth( MiB/second ).
1. Network Utilization shows two graphs one is Network packets IN/OUT (Per Second) and Network IN/OUT Traffic( Per/Second ).

**About the Potential Savings Widget:**

![](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.030.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.031.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.032.jpeg)

![A screen shot of a graph

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.033.jpeg)

![A screenshot of a graph

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.034.jpeg)

![A screenshot of a graph

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.035.jpeg)

**Normal Flow:**

1. If user clicks on the view details(CTA ) on potential savings widgets in single account dashboard, to see the services which is in the saving state.
1. User redirected to the Savings state page. On the top of the page There’s a breadcrumb to go back to previous pages.
1. ` `user views a table and top left side corner displaying services in the saving state. By default, EC2 service is selected.
1. The table includes columns of that services such as 
   1. Instance ID
   1. Availability Zone
   1. Account ID
   1. Instance Type
   1. Optimization Type
   1. Recommendation Reason
   1. Recommended Instance Type
   1. Performance Effect
   1. Estimated Monthly Savings
   1. Overall Status.
1. User can click on an Instance ID to view details of a particular instance, which redirects them to the single instance page.
1. On the single instance page, user views information about the current instance on the left side and recommendations on the right side.
1. User can click on CPU, memory, storage, or network utilization at the bottom left side of the page to view utilization graphs on the right side. By default, CPU utilization is selected.
1. In CPU Utilization there are two graphs are shown one is Current instance CPU utilization and recommended instance CPU utilization.  In all  graphs show the last 6 hours of data. And there’s a filter to change the data according to the time. 
1. ` `memory utilization is also the same as the CPU utilization graphs.
1. storage utilization shows two graphs one is Disk read/ Write operations per second and Disk Read/Write Bandwidth( MiB/second ).
1. Network Utilization shows two graphs one is Network packets IN/OUT (Per Second) and Network IN/OUT Traffic( Per/Second ).

**About the Status of Analysed Services Widget:**

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.036.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.037.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.038.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.039.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.040.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.041.jpeg)

![A screen shot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

**Normal Flow:**

1. In a single account dashboard shows the status of analysed services in donut chart
1. which displays the services categorized into savings, optimal, risk, and not analysed states.
1. User clicks on any of the state (savings, optimal, risk, or not analysed), redirecting them to the respective state page.
1. On the respective state page, user views a table and top left side corner displaying services in that particular state. By default, EC2 is selected.
1. There’s a breadcrumb to go back to the previous pages.
1. All states pages as the similar tables and clickability.
1. The table includes columns such as 
   1. Instance ID
   1. Availability Zone
   1. Account ID
   1. Instance Type
   1. Optimization Type
   1. Recommendation Reason
   1. Recommended Instance Type
   1. Performance Effect
   1. Estimated Monthly Savings
   1. Overall Status.
1. User can click on an Instance ID to view details of a particular instance, which redirects them to the single instance page.
1. On the single instance page, user views information about the current instance on the left side and recommendations on the right side.
1. User can click on CPU, memory, storage, or network utilization at the bottom left side of the page to view utilization graphs on the right side. By default, CPU utilization is selected.
1. In CPU Utilization there are two graphs are shown one is Current instance CPU utilization and recommended instance CPU utilization.  In all  graphs show the last 6 hours of data. And there’s a filter to change the data according to the time. 
1. ` `memory utilization is also the same as the CPU utilization graphs.
1. storage utilization shows two graphs one is Disk read/ Write operations per second and Disk Read/Write Bandwidth( MiB/second ).
1. Network Utilization shows two graphs one is Network packets IN/OUT (Per Second) and Network IN/OUT Traffic( Per/Second ).

**About the top used Services widget:**

![A screenshot of a computer

Description automatically generated](Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.042.jpeg)

![A screenshot of a computer

Description automatically generated]

![A screenshot of a computer

Description automatically generated]

![A screen shot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

![A screenshot of a graph

Description automatically generated]

**Normal flow:**

1. If user clicks on the View details( CTA ) on the top used services.
1. User is redirected to the Overall services page where all the services are shown in count.
1. There is a search bar to search a service by its name. And on the top of the page there’s a breadcrumbs to go back to the pervious pages.
1. User selects the EC2 service from the list of services, which redirects them to the list of EC2 services page.
1. On the list of EC2 services page, user can view details of each instance in a tabular method and there’s a search bar to search the instance with the instance Id, the table includes the following column, 
   1. Instance ID
   1. Instance Type
   1. Availability Zone
   1. Product Name
   1. Instance State
   1. Usage hours
   1. Add-on
   1. Overall Status of the instance.
1. User can click on Instance ID to view details of a particular instance, which redirects them to the single instance page.
1. On the single instance page, user can view information about the current instance on the left side and recommendations on the right side.
1. User can click on CPU, memory, storage, or network utilization at the bottom left side of the page to view utilization graphs on the right side. By default, CPU utilization is selected.
1. In CPU Utilization there are two graphs are shown one is Current instance CPU utilization and recommended instance CPU utilization.  In all  graphs show the last 6 hours of data. And there’s a filter to change the data according to the time. 
1. ` `memory utilization is also the same as the CPU utilization graphs.
1. storage utilization shows two graphs one is Disk read/ Write operations per second and Disk Read/Write Bandwidth( MiB/second ).
1. Network Utilization shows two graphs one is Network packets IN/OUT (Per Second) and Network IN/OUT Traffic( Per/Second ).


**Post Conditions:**

1. User gains insights into the overall cloud infrastructure through the Cloud Summary section.
1. User can explore individual accounts and their specific cloud usage metrics.
1. User can make informed decisions regarding resource optimization and cost savings based on the detailed information provided within the Single Account Dashboard.

**Alternate Flow:**

1. If the user selects an account from the list and the account does not have detailed information available or cannot be accessed. the user can’t see the details of the particular account.












[A screen shot of a graph

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.008.jpeg
[A screenshot of a graph

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.009.jpeg
[A screenshot of a graph

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.010.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.012.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.013.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.014.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.015.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.016.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.017.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.018.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.019.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.020.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.021.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.022.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.023.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.024.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.026.jpeg
[A screenshot of a computer

Description automatically generated]: Aspose.Words.2d1df09b-ceaf-403f-90ce-2b4acfaaebd4.028.jpeg
