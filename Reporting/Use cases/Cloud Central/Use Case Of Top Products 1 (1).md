
**Use Case Of Top Products.** 



**Title:** Use case of top Products. 

**Description:** This use case describes the process for users to interact with product information within the Cloud Central Dashboard of the AppKube platform. Users can explore a list of products, By clicking the view details(CTA) in top products, and navigate to specific pages for 3-tier, SOA, all products list, instance details, and utilization graphs.

**Actors:**  CEO, CTO, CFO, Cloud Administrator, Cloud Operations Team leads.

**Trigger Points:**

1. If the user wants to know about the Product Category Details.

**Preconditions:**

1. User initiates access to the Cloud Central Dashboard within the AppKube platform.

**Main Flow:**

1. User logs into the AppKube platform using their credentials.
1. After successful login, the user navigates to the reporting module within the AppKube platform.
1. Within the reporting module, the user selects the option to access the Cloud Central Dashboard.
1. A Widget Top Products with More Services, which displays the top 5 products utilizing the highest number of services compared to all products, presented in a bar chart.
1. If the user clicks on the view details (CTA) of the top product with more services.
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

**If the user select the SOA Product.**



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

**Post Conditions:**

1. User successfully navigates through product information, exploring product lists, individual product details, 3-tier product pages, and instance details.
1. User gains insights into various aspects of products and utilization graphs, enabling informed decision-making regarding resource management and optimization.

**Alternative Flow:**

1. If the user encounters any issues accessing the Cloud Central Dashboard or navigating through product lists then the user cannot see the details.
1. If the user searches for a product using the search bar and does not find any matching results, they will be prompted with an appropriate message indicating no results found.

