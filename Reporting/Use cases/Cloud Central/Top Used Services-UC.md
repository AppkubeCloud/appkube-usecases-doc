
**Use Case of Top used Services.**

**Title:** Use Case of Top used Services

**Actors:**  CEO, CTO, CFO, Cloud Administrator, Cloud Operations Team leads.

**Description:** This use case describes the functionality of Top Products with more services section within the Cloud Central Dashboard.

**Trigger Points:**

1. the user wants to see a single service from the Top used services.

**Precondition:**

1. User must have access permissions to the AppKube platform.
1. User must be authorized to access the Cloud Central Dashboard.

**Main Flow:**

1. User logs into the AppKube platform using their credentials.
1. After successful login, the user navigates to the reporting module within the AppKube platform.
1. Within the reporting module, the user selects the option to access the Cloud Central Dashboard.
1. A widget Top used Services, illustrating the top 10 services with the highest usage across all services from all accounts, displays in a bar chart showing the total count of each service.
1. user click the view details button on  top used services widget, which redirects the user to theTop used service page.
1. On the top of the page there’s a breadcrumbs to go back to the pervious pages and  below that on the right side there’s a view all services button.
1. Shows the List of the top used services in a tabular format with the following Details, such as 
   1. Service Name
   1. Service Count
   1. Accounts count
   1. Regions
   1. Action
1. User selects the EC2 service Action ( Hyperlink )from the list of services, which redirects them to the list of EC2 services page.
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
1. On the Instance page user sees the breadcrumb to go back to the previous pages.
1. Below the breadcrumb, the user sees the instance details. Where it shows the whole details of the particular instance.
1. Below that, the user sees the CPU utilization, memory utilization, network Inbound and Outbound Traffic, and Disk read and write operation.
1. By default, all graphs show the data of the last one hour and With that user can choose the custom time range to see the data on his/her way.

<b>On 6<sup>th</sup> point User clicks on the View all services button</b>.

1. User Clicks on the view all services page. Which redirect to the all services page, where shows the overall services of all accounts.
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

**Post Condition:**

1. User successfully navigates through Top used services and instance details, gaining insights into various aspects of service management within the Cloud Central Dashboard.
1. User may take further actions based on the insights obtained from service details, such as optimizing resources.

**Alternative Flow:**

If the user encounters any issues accessing the Cloud Central Dashboard or navigating through service details, then the user Can’t see the details of the service.
