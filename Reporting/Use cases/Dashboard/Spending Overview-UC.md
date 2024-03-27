
**Use Case: Spending Overview Widget**







**Actor:** Cloud Administrator, Financial Analyst, Cloud Optimization Manager

**Goal:** To monitor and analyze spending across different categories (compute, storage, database, network, and others) within the AWS environment using the Spending Overview widget and detailed spending reports.

**Preconditions:**

•	The user must have access to the Cloud Optimization Software dashboard.

•	The user should have appropriate permissions to view spending data.

**Main Flow:**

1\.	The user logs in to the Appkube's AWS Overview Dashboard and navigates to the Spending Overview widget.

2\.	The Spending Overview widget provides a graphical representation of spending data under the AWS tab, categorized into compute, storage, database, network, and others.

3\.	The user notices a "View Details" button located in the top-right corner of the Spending Overview widget.

4\.	The user clicks the "View Details" button to access the complete spending report.

5\.	Upon clicking the "View Details" button, the user is directed to the Spend Overview page.

6\.	The Spend Overview page displays five different tabs: compute, storage, database, network, and others, allowing the user to analyze spending data for each category individually.

7\.	four cards are displayed, showing the following information:

•	Last month spend 

•	Month-to-date spend

•	Forecasted spend

•	Average daily spend

8\.	On the right side of the screen, there are two buttons:

•	Filter Button:

•	When clicked, the filter button displays options including pre-selected options called All regions, All departments, and All products.

•	The "All regions" option consists of sub-options listing all the regions from where the compute service is being used.

•	The "All departments" option consists of sub-options listing all the departments utilizing the compute service.

•	The "All products" option consists of sub-options listing all the products using compute services.

•	Duration Button:

•	When clicked, the duration button displays options for selecting the duration: 1 day, 1 week, 1 month, quarter, half-year, and annual.

9\.	The user selects the desired options for filter and duration to customize the spending data view.

10\.	After selecting the options, a data table "overview of the compute services" is displayed, showing the following headings:

•	Service Name

•	Last Month Spend

•	This Month Spend

•	Variance

•	Actions Button

11\.	when view more is clicked under actions tab, It takes you to a different page. The page displays four (4) cards namely, Total Ec2 instance, Running instance, stopped instances and Terminated instnces. Below that there is a detailed cost report of the particular services within a tabular format.

12\.	The table consists of following Tags, Instance ID, Instance Type, Instance status, Pricing Model, Availability zone, On demand cost / per hour, Reserved Instance / per hour, Usage hours, add-ons, Total spend and there is a search bar on the top right corner of the table, it lets user search any instance by its instance id.. And its respective data below in the table.

**Alternative Flow:**

•	 If the user selects Storage or Database tab on the Spend Overview page, the data table changes to "overview of the storage services" or "overview of the database services" respectively
•  The corresponding data is displayed in the table.
• If the user encounters an error while accessing the Spending Overview widget or detailed spending reports, an error message is displayed, suggesting troubleshooting steps or recommending contacting support for assistance.

**Postconditions:**

•	The user gains insights into spending trends and patterns across various categories within the AWS environment.

•	The user can analyze spending data effectively, identify areas for cost optimization, and make informed decisions to manage cloud expenses efficiently.

**Success Scenario:**

•	The user successfully accesses the Spending Overview widget, navigates to the detailed spending reports, customizes the view using filter and duration options, and analyzes spending data to optimize costs effectively.

**Failure Scenario:**

•	The user encounters an error while accessing the Spending Overview widget or detailed spending reports, hindering their ability to analyze spending data and make informed decisions. The user may need to retry accessing the widget or seek assistance from the support team to resolve the issue.
