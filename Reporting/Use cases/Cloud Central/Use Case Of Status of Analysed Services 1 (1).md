**Use Case Of Status of Analysed Services.**

![A screenshot of a dashboard

Description automatically generated](Aspose.Words.0f9234a1-c88b-4372-ab82-9f1fbfae9845.001.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.0f9234a1-c88b-4372-ab82-9f1fbfae9845.002.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.0f9234a1-c88b-4372-ab82-9f1fbfae9845.003.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.0f9234a1-c88b-4372-ab82-9f1fbfae9845.004.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.0f9234a1-c88b-4372-ab82-9f1fbfae9845.005.jpeg)

![A screenshot of a computer

Description automatically generated](Aspose.Words.0f9234a1-c88b-4372-ab82-9f1fbfae9845.006.jpeg)

![A screenshot of a phone

Description automatically generated](Aspose.Words.0f9234a1-c88b-4372-ab82-9f1fbfae9845.007.jpeg)

![A screenshot of a graph

Description automatically generated](Aspose.Words.0f9234a1-c88b-4372-ab82-9f1fbfae9845.008.jpeg)

![A screenshot of a graph

Description automatically generated](Aspose.Words.0f9234a1-c88b-4372-ab82-9f1fbfae9845.009.jpeg)

**Title:** Status of Analysed Services Use Case

**Actors:**  CEO, CTO, CFO, Cloud Administrator, Cloud Operations Team leads.

**Description:** This use case describes the process for users to manage and analyze the status of Analysed services within the Cloud Central Dashboard of the AppKube platform. Users can access insights into the optimization status of various services, categorized into savings, optimal, risk, and not analysed stages.

**Trigger Points:**

1. If the User wants to know the status of the services.

**Precondition:**

1. User must have access permissions to the AppKube platform.
1. User must be authorized to access the Cloud Central Dashboard.

**Main Flow:**

1. User logs into the AppKube platform using their credentials.
1. After successful login, the user navigates to the reporting module within the AppKube platform.
1. Within the reporting module, the user selects the option to access the Cloud Central Dashboard.
1. The user sees the Status of Analysed Services widget, which categorizes services into four states (Savings, Optimal, Risk, and Not Analysed) and visualizes them in a donut chart.
1. User clicks on any of the states (savings, optimal, risk, or not analysed), redirecting them to the respective state page.
1. On the respective state page, user views a breadcrumb to go back to the previous pages on the top of the page.
1. User views a table and top left side corner displaying services in that particular state. By default, EC2 service is selected.
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
1. When the user click on Instance ID to view details of a particular instance, which redirects them to the single instance page.
1. On the single instance page, the user views the breadcrumb on the top of the page.
1. The user views the information about the current instance on the left side and recommendations on the right side.
1. User can click on CPU, memory, storage, or network utilization at the bottom left side of the page to view utilization graphs on the right side. By default, CPU utilization is selected.
1. In CPU Utilization there are two graphs are shown one is Current instance CPU utilization and recommended instance CPU utilization.  In all  graphs show the last 6 hours of data. And there’s a filter to change the data according to the time. 
1. ` `memory utilization is also the same as the CPU utilization graphs.
1. storage utilization shows two graphs one is Disk read/ Write operations per second and Disk Read/Write Bandwidth( MiB/second ).
1. Network Utilization shows two graphs one is Network packets IN/OUT (Per Second) and Network IN/OUT Traffic( Per/Second ).

**Post Condition:**

1. User successfully reviews the status of analysed services, gaining insights into the optimization status of various services within the Cloud Central Dashboard.
1. User may take further actions based on the insights obtained, such as optimizing resources, addressing risks, or initiating analysis for not analysed services.

**Alternative Flow:**

1. If the user encounters any issues accessing the Cloud Central Dashboard or viewing the status of analysed services, then the user cannot see the details of the services.

