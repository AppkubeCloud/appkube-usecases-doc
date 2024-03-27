**Use Case: Potential Savings Widget**

**Actor:** CTO, CFO, Cloud Administrator, Cloud Operations Team and Financial Analyst

**Goal:** To monitor and analyze potential savings of cloud services across different categories within the cloud environment using the Potential savings widget.

**Preconditions:** The user must have access to the cloud management platform and appropriate permissions to view usage data.

**Main Flow:**

1\.The user logs in to the cloud management platform and navigates to the dashboard.

2\. On the dashboard, the user locates the Potential Savings widget, which displays graphical representations of the potential savings which can be done in cloud services like, spot instances, Reserved instances, Rightsizing and others. And also it shows an overall average savings which can be done.

4\. At the top-right corner of the widget, there is a "View Details" button.

5\. Upon clicking the "View Details" button, the user is directed to the detailed potential savings report page.

6\.The detailed potential savings page provides insights into the usage patterns, trends, and metrics for the services.

7\. The potential savings detail page includes

- Two buttons on the top right corner of the screen

**Filter Button:**

1. When clicked, the filter button displays options including pre-selected options called All regions, All departments, and All products.
1. The "All regions" option consists of sub-options listing all the regions from where the compute service is being used.
1. The "All departments" option consists of sub-options listing all the departments utilizing the compute service.
1. The "All products" option consists of sub-options listing all the products using compute services.

**Duration Button:**

1. When clicked, the duration button displays options for selecting the duration: 1 day, 1 week, 1 month, quarter, half-year, and annual.

Below the buttons there are,

8\. four cards, showing the following information:

1. This month’s savings
1. Forecasted savings
1. Last month’s savings
1. Total savings

9\. Below the cards there are two widgets

- Total savings widget
- Monthly Savings graph widget

10\. total savings widget shows the total amount of savings happened in time duration selected.

11\. Monthly Savings graph widget displays the graphical data of the savings of each month.

12\. Below the widgets, there is a data table. The data table "Top RI recommendation" shows information of resource type, instance id, recommendation, current instance, recommended instance, terms, payment mode, upfront cost, per hour cost, estimated savings and total spend.

1. **Alternative Flow:**
- If the user selects some other widget on overview dashboard, the corresponding data is displayed.
- If the user encounters an error while accessing the Spending Overview widget or detailed spending reports, an error message is displayed, suggesting troubleshooting steps or recommending contacting support for assistance.

**Post conditions:**

- The user gains insights into the potential savings and total savings on various categories within the AWS environment.
- The user can analyze the potential and total savings effectively, identify areas for cost optimization, and make informed decisions to manage potential savings efficiently.

**Success Scenario:**

- The user successfully accesses the potential savings widget, navigates to the detailed potential savings page, customizes the view using filter and duration options, and analyzes potential savings and total savings.

**Failure Scenario:**

- The user encounters an error while accessing the potential savings widget or detailed potential savings, hindering their ability to analyze potential savings and make informed decisions. The user may need to retry accessing the widget or seek assistance from the support team to resolve the issue.
