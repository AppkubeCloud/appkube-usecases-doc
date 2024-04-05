**Use Case of Top Services.**

![](Aspose.Words.051e7bfd-6f1c-4a6f-a171-2e5098c23de0.001.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.051e7bfd-6f1c-4a6f-a171-2e5098c23de0.002.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.051e7bfd-6f1c-4a6f-a171-2e5098c23de0.003.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.051e7bfd-6f1c-4a6f-a171-2e5098c23de0.004.jpeg)

![A screenshot of a phone

Description automatically generated](Aspose.Words.051e7bfd-6f1c-4a6f-a171-2e5098c23de0.005.jpeg)

![A screenshot of a graph

Description automatically generated](Aspose.Words.051e7bfd-6f1c-4a6f-a171-2e5098c23de0.006.jpeg)

![A screenshot of a graph

Description automatically generated](Aspose.Words.051e7bfd-6f1c-4a6f-a171-2e5098c23de0.007.jpeg)

**Title:** Use Case of Top  Services

**Actors:**  CEO, CTO, CFO, Cloud Administrator, Cloud Operations Team leads.

**Description:** This use case Describes the process for users to manage AWS services within the Cloud Central Dashboard of the AppKube platform. Users can access a list of AWS services from the top services, navigate through specific service details such as EC2 instances, and monitor utilization metrics for individual instances.

**Trigger Points:**

1. If the user wants to see a single service from the Top services.

**Precondition:**

1. User must have access permissions to the AppKube platform.
1. User must be authorized to access the Cloud Central Dashboard.

**Main Flow:**

1. User logs into the AppKube platform using their credentials.
1. After successful login, the user navigates to the reporting module within the AppKube platform.
1. Within the reporting module, the user selects the option to access the Cloud Central Dashboard.
1. A widget Top Services, illustrating the top 10 services with the highest usage across all services from all accounts, displays in a bar chart showing the total count of each service.
1. If user click the view details (CTA) of top used services, which redirects the user to the Overall service pages.
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

**Post Condition:**

1. User successfully navigates through AWS service lists and instance details, gaining insights into various aspects of service management within the Cloud Central Dashboard.
1. User may take further actions based on the insights obtained from service details, such as optimizing resources or making recommendations.

**Alternative Flow:**

1. If the user encounters any issues accessing the Cloud Central Dashboard or navigating through service details, then the user Can’t see the details of the service.

