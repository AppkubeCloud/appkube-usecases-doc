
**Usecase Title: Accounts with High Spending** 

**Actors:**

1. Financial Analyst
1. Cloud Administrator
1. Department Manager

**Goal:** To analyze and manage top accounts with high spending across AWS, Azure, and GCP platforms using the Top Accounts with High Spending Analysis tool.

**Preconditions:**

1. Users must have appropriate permissions to access spending data and view detailed reports within the Top Accounts with High Spending Analysis tool.

**Main Flow:**

1. Users access the Top Accounts with High Spending Analysis tool to gain insights into accounts with significant spending across AWS, Azure, and GCP platforms.
1. A breadcrumb trail at the top of the screen provides navigation options.
1. Below the breadcrumb trail, users find three tabs: AWS, Azure, and GCP, enabling them to view high spending details specific to each cloud platform.
1. Users click on one of the tabs to select a cloud platform and access detailed spending information for top accounts.
1. Beneath the tabs, four cards:
1. Month to Date Spend: Shows spending for the current month.
1. Forecasted Spend: Predicts future spending based on current trends.
1. Last Month Spend: Compares spending for the previous month.
1. Average Daily Spend: Calculates the average spending per day.
2. <br>
1. Users scroll down to find a table titled "Top 5 Spending Accounts" with the following headers:
1. Account ID, Department, VPC, Service Count, High Spending Region, Spending, Variance and budgeted.

1. A search bar at the top-right corner of the table allows users to search for specific accounts.
1. Users can analyze spending patterns, identify top accounts with high spending, and compare actual spending with budgeted amounts.
1. User clicks on an Account ID or Service Count, the user is directed to the Cost of Services Analysis page.

1. A breadcrumb trail at the top of the screen provides navigation options.



User finds a table titled "Overview of Top 10 Services" with the following headers:

1. user clicks Ec2 service in table
2. User is sent to Cost of EC2 page
3. user finds 3 cards,


- Total Ec2 Instances: Total number of instances or resources used for the service.

- Month to date spend Spend: Amount spent on the service in the current month.

- Last Month Spend: Amount spent on the service in the previous month.

Below the cards, there is a data table of cost consumption of Ec2

**Alternative Flow:**

1. If users encounter discrepancies or errors in spending data, they can utilize the search functionality or review historical spending trends to identify and address issues.

**Postconditions:**

Users gain actionable insights into top accounts with high spending across AWS, Azure, and GCP platforms, enabling informed decision-making and effective budget management strategies
