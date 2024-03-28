| | | | | | |
|-|-|-|-|-|-|
|Test Case : Top 5 Regions| | | | | |
|Test Case ID|Description|Steps|Expected Result|Actual Result|Pass/Fail|
|TC-001|Widget Initialization:| | | | |
| |Positive:|1. Access the Cost Central Dashboard.|The dashboard is successfully loaded.| | |
| | |2. Locate the 'Cost of Top 5 Regions' widget.|The widget is visible on the dashboard.| | |
| |Negative:|1. Navigate to a different page.|The 'Cost of Top 5 Regions' widget is not visible.| | |
|TC-002|Click on "View Details" Button:| | | | |
| |Positive:|1. Click on the "View Details" button.|User is directed to the detailed report page 'Cost of Top Regions'.| | |
| |Negative:|1. Verify behavior if button is not clickable.|The "View Details" button is not clickable.| | |
|TC-003|Verify Filter Button Functionality:| | | | |
| |Positive:|1. Click on the filter button.|Filter options are displayed including All regions, All services, All VPCs, All accounts, and All products.| | |
| | |2. Verify the dropdown options.|Options are available for all filter categories.| | |
| |Negative:|1. Verify behavior without clicking on the button.|Filter options are not displayed.| | |
|TC-004|Verify Duration Button Functionality:| | | | |
| |Positive:|1. Click on the duration button.|Duration options are displayed including Last month, This month, Last quarter, Current quarter, Current year, and Last year.| | |
| | |2. Verify the pre-selected duration.|Default duration is set to 'This Month.'| | |
| |Negative:|1. Verify behavior without clicking on the button.|Duration options are not displayed.| | |
|TC-005|Overview Cards Functionality:| | | | |
| |Positive:|1. Verify the four overview cards.|Cards display month to date spend, forecasted spend, last month spend, and average daily spend.| | |
| |Negative:|1. Verify behavior if cards are missing.|One or more overview cards are missing.| | |
|TC-006|Overview of Top Regions Table:| | | | |
| |Positive:|1. Verify the columns in the overview table.|Columns include Region (Descending Order), Services Count, Current Month Spend with Variance, Last Month Spend, and Actions.| | |
| |Negative:|1. Verify behavior if columns are missing.|One or more columns in the overview table are missing.| | |
|TC-007|Click on "View More" Link:| | | | |
| |Positive:|1. Click on the "View More" link in the Actions column.|User is directed to a detailed breakdown page for the selected region.| | |
| |Negative:|1. Verify behavior if link is not clickable.|The "View More" link is not clickable.| | |
|TC-008|Page Initialization:| | | | |
| |Positive:|1. Click on the 'View More' button for the N. Virginia region.|User is directed to the page displaying information related to services used in the N. Virginia region.| | |
| |Negative:|1. Verify behavior if button is not clickable.|The 'View More' button for the N. Virginia region is not clickable.| | |
|TC-009|Overview Cards of N Virginia Functionality:| | | | |
| |Positive:|1. Verify the four overview cards.|Cards display month to date spend of all services, forecasted spend, last month spend, and average daily spend for the N. Virginia region.| | |
| |Negative:|1. Verify behavior if cards are missing.|One or more overview cards are missing.| | |
|TC-010|Verify Information Table Data on EC2 Service Page:| | | | |
| |Positive:|1. Verify the columns in the information table.|Columns include Tags, Instance ID, Instance Type, Instance Status, Pricing Model, Availability Zones, On Demand Cost / HR, Reserved Instance Cost / HR, Usage Hours, Add-ons, and Total Spend.| | |
| |Negative:|1. Verify behavior if columns are missing.|One or more columns in the information table are missing.| | |
|TC-011|Verify Search Bar Functionality on EC2 Service Page:| | | | |
| |Positive:|1. Enter a search query in the search bar.|The table is filtered based on the search query.| | |
| |Negative:|1. Verify behavior if search bar is not available.|The search bar is not visible.| | |
|TC-012|Verify Pagination Functionality on EC2 Service Page:| | | | |
| |Positive:|1. Click on the 'Next Page' button.|User is navigated to the next page of EC2 instances.| | |
| |Negative:|1. Verify behavior if pagination is not available.| | | |
