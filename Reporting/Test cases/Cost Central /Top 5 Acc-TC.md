| | | | | | |
|-|-|-|-|-|-|
|Test case : Top 5 Accounts| | | | | |
|Test Case ID|Description|Steps|Expected Result|Actual Result|Pass/Fail|
|TC-001|Page Initialization:| | | | |
| |Positive:|1. Log in to the cloud management platform.|User successfully logs in and is directed to the dashboard.| | |
| | |2. Navigate to the dashboard.|The dashboard is loaded successfully.| | |
| |Negative:|1. Attempt to log in with invalid credentials.|Login fails, and appropriate error message is displayed.| | |
|TC-002|Locate Cost of Top Accounts Widget:| | | | |
| |Positive:|1. Look for the Cost of Top accounts widget on the dashboard.|The Cost of Top accounts widget is visible on the dashboard.| | |
| |Negative:|1. Verify behavior if the widget is missing.|The Cost of Top accounts widget is not visible on the dashboard.| | |
|TC-003|Click on "View Details" Button:| | | | |
| |Positive:|1. Locate the Cost of Top accounts widget on the dashboard.| | | |
| | |2. Click on the "View Details" button at the top-right corner of the widget.|User is directed to the detailed report page.| | |
| |Negative:|1. Verify behavior if the button is not clickable.|No action is performed as the button is not clickable.| | |
|TC-004|Filter Button Functionality:| | | | |
| |Positive:|1. Click on the 'Filter' button.|A popup with multiple dropdowns appears, including options for All regions, All VPCs, All Accounts, All Tagnames, and All products.| | |
| | |2. Verify the dropdown options.|Dropdown options are displayed as expected.| | |
| |Negative:|1. Verify behavior without clicking on the button.|The filter popup does not appear.| | |
|TC-005|Duration Button Functionality:| | | | |
| |Positive:|1. Click on the 'Duration' button.|Options for selecting the duration (1 day, 1 week, 1 month, quarter, half-year, and annual) are displayed.| | |
| | |2. Verify the duration options.|Duration options are displayed as expected.| | |
| |Negative:|1. Verify behavior without clicking on the button.|The duration options do not appear.| | |
|TC-006|Overview Cards Functionality:| | | | |
| |Positive:|1. Verify the four overview cards.|Cards display the spendings based on the selected filters: This month spend, Month to date spend, Forecasted spends, and Average daily spend.| | |
| |Negative:|1. Verify behavior if cards are missing.|One or more overview cards are missing.| | |
|TC-007|Information Table Display:| | | | |
| |Positive:|1. Verify the columns in the information table.|Information table shows columns including Account Name, Account Id, Organization Unit, Current Month Spend, Last Month Spend, Spending Variance, Average daily spend, and Action.| | |
| |Negative:|1. Verify behavior if columns are missing.|One or more columns in the information table are missing.| | |
|TC-008|Click on "View More" Link:| | | | |
| |Positive:|1. Click on the 'View More' link in the 'Actions' column for a service.|User is directed to a detailed breakdown page for that service.| | |
| |Negative:|1. Verify behavior if link is not clickable.|The 'View More' link is not clickable.| | |
|TC-009|Page Initialization for EC2 Service:| | | | |
| |Positive:|1. Click on the 'View More' link for the 'EC2' service within the 'IT Account.'|User is directed to a new page titled 'EC2 Service Cost Analysis.'| | |
| |Negative:|1. Verify behavior if the link for EC2 service is not available.|No action is performed as the link is not available.| | |
|TC-010|Verify Overview Cards for EC2 Service:| | | | |
| |Positive:|1. Verify the five overview cards on the EC2 Service Cost Analysis page.|Cards display spendings details for Total EC2 Instances, Month to Date Spend, Forecasted Spend, Last Month Spend, and Avg Daily Cost.| | |
| |Negative:|1. Verify behavior if cards are missing on the EC2 Service Cost Analysis page.|One or more overview cards are missing on the EC2 Service Cost Analysis page.| | |
|TC-011|Verify Information Table for EC2 Service:| | | | |
| |Positive:|1. Verify the columns in the information table on the EC2 Service Cost Analysis page.|Information table shows columns including Tags, Instance ID, Instance Type, Instance Status, Pricing Model, Availability Zones, On Demand Cost / HR, Reserved Instance Cost / HR, Usage Hours, Add-ons, and Total Spend.| | |
| |Negative:|1. Verify behavior if columns are missing on the EC2 Service Cost Analysis page.|One or more columns in the information table are missing on the EC2 Service Cost Analysis page.| | |
|TC-012|Search Functionality for EC2 Service:| | | | |
| |Positive:|1. Enter a search query in the search bar on the EC2 Service Cost Analysis page.|Search results are displayed based on the entered query.| | |
