
**Use Case: Top Accounts Widget**

**Actor:** Cloud Administrator, Cloud Operations Team, Financial Analyst

**Goal:** To monitor and analyze Cost of Top Accounts of cloud services across different categories within the cloud environment using the Cost of Top Accounts widget.

**Preconditions:** The user must have access to the cloud management platform and appropriate permissions to view usage data.

**Main Flow:**

1\.The user logs in to the cloud management platform and navigates to the dashboard.

2\. On the dashboard, the user locates the Cost of Top accounts widget, which displays graphical representations of the Top cost consuming accounts or departments. 

4\. At the top-right corner of the widget, there is a "View Details" button.

5\. Upon clicking the "View Details" button, the user is directed to the detailed report page.

6\.The detailed page provides insights into accounts which are using more services than usual.

7\. The cost of top accounts detail page includes

- Two buttons on the top right corner of the screen

**Filter Button:**

- When clicked, the filter button displays options including pre-selected options called All regions, All departments, and All products. (cost
- The "All regions" option consists of sub-options listing all the regions from where the compute service is being used.
- The "All departments" option consists of sub-options listing all the departments utilizing the compute service.
- The "All products" option consists of sub-options listing all the products using compute services.

**Duration Button:**

- When clicked, the duration button displays options for selecting the duration: 1 day, 1 week, 1 month, quarter, half-year, and annual.

Below the buttons there are,

8\. four cards, showing the following information:

- last month spend
- Month to date spend
- Forecasted spend
- Average daily spend

9\. below that there is information table showing data. The data table "overview of top 5 accounts" shows information of Account id, department, VPC, Service count, High spending region, spending, Variance and Budget.

10\. Upon clicking account id, the system takes you to account detail page. Where the details of the account using all the services is showed. When you click view more button under actions column of the particular service, cost of that particular service page opens.

11\. The cost page diplays data table of cost consumption, the table has a search bar at top right corner allowing users to search an instace by its id.



**Alternative Flow:**

- If the user selects some other widget on overview dashboard, the corresponding data is displayed.
- If the user encounters an error while accessing the cost of top accounts widget, an error message is displayed, suggesting troubleshooting steps or recommending contacting support for assistance.

**Post conditions:**

- The user gains insights into the Costings of top accounts using cloud services with the help of Appkube in the AWS environment.
- The user can analyze the Costings of top accounts using cloud services, identify areas for cost optimization, and make informed decisions to manage potential savings efficiently.

**Success Scenario:**

- The user successfully accesses to the Costings of top accounts widget, navigates to the detailed page, customizes the view using filter and duration options, and analyzes potential savings.

**Failure Scenario:**

- The user encounters an error while accessing the Costings of top accounts widget or detailed pages, hindering their ability to analyze Costings of top accounts and make informed decisions. The user may need to retry accessing the widget or seek assistance from the support team to resolve the issue.
