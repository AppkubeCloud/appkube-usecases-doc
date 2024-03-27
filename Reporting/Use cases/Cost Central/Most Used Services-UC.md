
**Use Case: Top Used Services Widget**

**Actor:** CTO, CFO, Cloud Administrator, Cloud Operations Team, and Financial Analyst

**Goal:** To monitor and analyze the usage of cloud services across different categories within the cloud environment using the Top Used Services widget.

**Preconditions:** The user must have access to the Appkube and appropriate permissions to view usage data.





**Main Flow:**

1. The user logs in to the cloud management platform and navigates to the dashboard.
1. On the dashboard, the user locates the Most Used Services widget, which displays graphical representations of the most frequently used cloud services.
1. The widget provides a graphical representation, in a bar chart, depicting the usage distribution among the top services.
1. At the top-right corner of the widget, there is a "View Details" button.
1. Upon clicking the "View Details" button, the user is directed to the detailed usage report page.
1. The detailed usage report page provides insights into the usage patterns, trends, and metrics for the top-used services.
1. The top used services detail page includes.


1. Two buttons on the top right corner of the screen
   1. **Filter Button:**
      1. When clicked, the filter button displays options including pre-selected options called All regions, All departments, and All products.
      1. The "All regions" option consists of sub-options listing all the regions from where all the service is being used.
      1. The "All departments" option consists of sub-options listing all the departments utilizing all the service.
      1. The "All products" option consists of sub-options listing all the products using all services.
      1. All “VPCs” option consists of sub-options listing all the VPCs.
   1. **Duration Button:**
      1. When clicked, the duration button displays options for selecting the duration: 1 day, 1 week, 1 month, quarter, half-year, and annual.

Below the buttons there are,

1. four cards, showing the following information:
   1. Month-to-date spend
   1. Forecasted spend
   1. Last month spend
   1. Average daily spend
1. Below the cards there is information table showing data of top 10 services used with the heading of the table as Service name, current month spend, last month spend, Variance, average daily spend and actions.
1. when view more is clicked under actions column in table, It takes you to service spending page.

  

1. ` `The page displays five (5) cards namely, Total Ec2 instance, Month to date spend, Forecasted spend, last month spend and avg daily spend. Below that there is a detailed cost report of the services within a tabular format.
1. The table consists of following columns: Tags, Instance ID, Instance Type, Instance status, Pricing Model, Availability zone, On demand cost / per hour, Reserved Instance / per hour, Usage hours, add-ons, Total spend. And its respective data below in the table.
1. A search bar is available on the table to help the user in searching EC2 Instance with their tags or ID.

**Alternative Flow:**

1. If the user selects some other widget on the Cost central dashboard, the corresponding data is displayed.
1. If the user encounters an error while accessing the Most used service widget or detailed spending reports, an error message is displayed, suggesting troubleshooting steps or recommending contacting support for assistance.

**Post conditions:**

- The user gains insights into the top 10 used services and patterns across various categories within the AWS environment.
- The user can analyze the top used services effectively, identify areas for cost optimization, and make informed decisions to manage cloud expenses efficiently.

**Success Scenario:**

- The user successfully accesses the top 10 used services widget, navigates to the detailed top used services reports, customizes the view using filter and duration options, and analyzes spending data to optimize costs effectively.

**Failure Scenario:**

- The user encounters an error while accessing the Spending Overview widget or detailed spending reports, hindering their ability to analyze spending data and make informed decisions. The user may need to retry accessing the widget or seek assistance from the support team to resolve the issue.

