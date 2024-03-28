| | | | |
|-|-|-|-|
|Test Case : Cost Central Dashboard | | | |
| | | | |
|Access Cost Central Dashboard| | | |
|Steps|Action|Expected Result|Actual Result|
|Navigate to the Cost Central Dashboard.|User navigates to the dashboard.|Dashboard is successfully loaded, and the default tab "AWS" is selected.|Dashboard is loaded with the default tab "AWS" selected.|
|Choose a duration from the duration selector.|User selects a duration (e.g., "This Month").|Duration is successfully selected, and data is updated accordingly.|Selected duration is displayed, and data is updated accordingly.|
|Observe the overview section.|User observes the overview section.|All four overview cards (Current Month To Date Spend, Forecasted Spend, Last Month Spend, Year to Date Spend) are displayed with relevant spending information.|All four overview cards are displayed with relevant spending information.|
|Click on the "View Details" button for Top 5 Accounts.|User clicks on the "View Details" button for Top 5 Accounts.| Graphical representation of spending for the top 5 accounts is displayed, and detailed spending information for these accounts is accessible.|Graphical representation of spending for the top 5 accounts is displayed, and detailed spending information for these accounts is accessible.|
|Click on the "View Details" button for Most Used Services.|User clicks on the "View Details" button for Most Used Services.|Vertical bar graph showing spending on services in descending order is displayed, and detailed breakdown of costs incurred on AWS services is accessible|Vertical bar graph showing spending on services in descending order is displayed, and detailed breakdown of costs incurred on AWS services is accessible|
|Click on the "View Details" button for Top 5 Regions.|User clicks on the "View Details" button for Top 5 Regions.|Pie chart showing cost distribution across the top 5 regions is displayed, and detailed breakdown of spending in each region is accessible.|Pie chart showing cost distribution across the top 5 regions is displayed, and detailed breakdown of spending in each region is accessible.|
|Click on the "View Details" button for Top 5 Products.|User clicks on the "View Details" button for Top 5 Products.| Pie chart showing cost distribution across the top 5 products is displayed, and detailed breakdown of spending on each product is accessible.|Pie chart showing cost distribution across the top 5 products is displayed, and detailed breakdown of spending on each product is accessible.|
|Click on the "View Details" button for Tagged vs Untagged Cost.|User clicks on the "View Details" button for Tagged vs Untagged Cost.|Pie chart showing cost distribution between tagged and untagged resources is displayed, and detailed breakdown of 'Tagged vs Untagged Cost' is accessible.|Pie chart showing cost distribution between tagged and untagged resources is displayed, and detailed breakdown of 'Tagged vs Untagged Cost' is accessible.|
| | | | |
|Negative Test Cases| | | |
| | | | |
|Accessing Non-Existent Dashboard| | | |
|Steps|Action|Expected Result|Actual Result|
|Attempt to navigate to a non-existent dashboard.|User tries to navigate to a non-existent dashboard.|Failure to access the dashboard, appropriate error message displayed.|Error message displayed indicating the dashboard does not exist.|
|Choose an invalid duration (e.g., negative duration).|User selects an invalid duration (e.g., negative duration).|Inability to select the duration, and data remains unchanged.|Duration selector does not accept negative duration values, and data remains unchanged.|
|Observe the overview section.|User observes the overview section.|All four overview cards (e.g., Current Month To Date Spend card) are displayed with relevant spending information.|One or more overview cards are missing, indicating a problem with data retrieval.|
|Attempt to view Top 5 Accounts, Most Used Services, Top 5 Regions, and Top 5 Products.|User tries to view various graphs.|Graphs fail to load or display errors, indicating a problem with data visualization.|Graphs fail to load or display errors due to issues with data retrieval or visualization.|
|Click on "View Details" buttons for various sections.|User clicks on "View Details" buttons.|Detailed pages fail to load or inaccessible, indicating a problem with navigation or data retrieval.|Detailed pages fail to load or inaccessible due to issues with navigation or data retrieval.|
