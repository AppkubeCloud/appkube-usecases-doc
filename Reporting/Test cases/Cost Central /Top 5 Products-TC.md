| | | | | | | |
|-|-|-|-|-|-|-|
| |Top 5 Products| | | | | |
|Test Case ID|Test Case Description|Test Steps|Expected Result (Positive)|Expected Result (Negative)|Actual Result|Pass/Fail|
|CCDA-001|Verify navigation to 'Cost Central Dashboard' page|1. Click on the 'View Details' button in the 'Top 5 Products' widget.|Users are directed to the 'Cost Central Dashboard' page.|Users encounter no errors and are not redirected to an incorrect page.|The 'Cost Central Dashboard' page is displayed correctly.| |
|CCDA-002|Verify the correctness of the 'Cost Central Dashboard' page|1. Check if the page title is 'Cost Central Dashboard.' 2. Verify the presence of a back arrow. 3. Ensure the presence of three tabs ('AWS,' 'AZURE,' 'GCP') with 'AWS' selected by default. 4. Check the functionality of the 'Date Picker' button. 5. Verify the presence of four overview cards displaying spendings. 6. Ensure the 'Overview of Top 5 Products Table' is displayed with 8 columns.|All elements on the page should be displayed correctly and functional.|Any missing element or incorrect display should be noted as a deviation.|All elements on the page are displayed correctly.| |
|CCDA-003|Verify functionality of the 'Date Picker' on the Dashboard|1. Click on the 'Date Picker' button. 2. Select a date range from the options provided.|The selected date range should be applied to the data displayed on the page.|There should be no errors while selecting the date range, and the chosen range should be clearly visible.|The selected date range is applied, and the data updates accordingly.| |
|CCDA-004|Verify the accuracy of the overview cards on the Dashboard|1. Check the 'Month to Date Spend' card. 2. Check the 'Forecasted Spend' card. 3. Check the 'Last Month Spend' card. 4. Check the 'Avg Daily Spend' card.|Each card should display accurate spending information based on selected filters.|There should be no discrepancies or inaccuracies in the spending information displayed.|Spending information on the cards is accurate.| |
|CCDA-005|Verify the correctness of the 'Overview of Top 5 Products Table' on the Dashboard|1. Check each column in the table. (a) Verify the 'Product Name' column. (b) Verify the 'Date Created' column. (c) Verify the 'Product Category' column. (d) Verify the 'Highest Spend Region' column. (e) Verify the 'Environment' column. (f) Verify the 'This Month Cost' column. (g) Verify the 'Last Month Spend with Variance' column. (h) Verify the 'Actions (View More)' column.|All columns should display relevant and accurate spending information for each product.|There should be no missing or incorrect data in any column of the table.|Detailed spending information in the table is accurate.| |
|CCDA-006|Verify navigation to 'Services in Internal CRM Tool' page|1. Click on the 'View More' link in the 'Actions' tab for a product.|Users should be directed to the 'Services in Internal CRM Tool' page.|Users encounter no errors and are not redirected to an incorrect page.|The 'Services in Internal CRM Tool' page is displayed correctly.| |
|CCDA-007|Verify the correctness of the 'Services in Internal CRM Tool' page|1. Check if the page title is 'Services in Internal CRM Tool.' 2. Check the functionality of the overview cards displaying spending details. 4. Ensure that the table presenting detailed spending information for each service is displayed with 6 columns. 5. Click on the 'View More' link for a service.|All elements on the page should be displayed correctly and functional.|Any missing element or incorrect display should be noted as a deviation.|All elements on the page are displayed correctly.| |
| |Verify the Product Name : Internal CRM Tool|Verify the |All elements on the page should be displayed correctly and functional.|Any missing element or incorrect display should be noted as a deviation.| | |
|TC008|Default tab selection in Services page|1. Navigate to Services in Internal CRM Tool page|'AWS' tab should be selected by default|N/A| | |
|TC009|Overview cards display in Services page|1. Check for the presence of Overview cards|Five overview cards should be visibleTotal Services, Month to date Spend, Forecasted Spend, Last Month Spend,Avg Daily Spend|N/A| | |
|TC010|Table display of Services Used in Internal CRM Tool|1. Check for the presence of Services table|Services table should display with relevant columns|N/A| | |
|TC011|View More link functionality for a service|1. Click 'View More' link for a service|User should be directed to the 'EC2 Service Cost Analysis' page for the selected service|N/A| | |
|TC012|Date Picker and Filter button display|1. Check for the presence of Date Picker and Filter|Both buttons should be displayed on the top right corner|N/A| | |
|TC013|Overview cards display in EC2 Service page|1. Check for the presence of Overview cards|Five overview cards should be visible|N/A| | |
|TC014|Table display of Cost Consumption of EC2|1. Check for the presence of EC2 Cost Consumption table|EC2 Cost Consumption table should display with relevant columns|N/A| | |
|TC015|Search functionality for EC2 instances|1. Enter a valid Instance ID or tag in the search bar|Corresponding EC2 instance should be highlighted or displayed|If an invalid ID or tag is entered, no instance should be highlighted or displayed| | |
|TC016|Pagination functionality|1. Click 'Next Page' button|Next page of EC2 instances should be displayed|If on the first page, 'Previous Page' button should be disabled| | |