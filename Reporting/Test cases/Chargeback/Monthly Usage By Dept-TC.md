| | | | |
|-|-|-|-|
| Monthly Usage by Department(Normal Flow)| | | |
| | | | |
|Test Case ID|Steps|Action|Expected Result|
|TC001|1. Open the applicatios AppKube                                     2. Enter valid username and password                            3. Click on the login button|Enter valid credentials and click login|User is redirected to the dashboard|
|TC002|1. Navigate to the dashboard containing the Bar Chart.|Verify that the Bar Chart is titled "Monthly Usage by IT Department."|The Bar Chart is titled correctly, and the horizontal axis labels match the specified months.|
|TC003|1. Visually inspect the Bar Chart.|Verify that each bar represents the total spending for a specific month.|Each bar on the chart accurately represents the total spending for the corresponding month.|
|TC004|1. Visually inspect the vertical axis of the Bar Chart.|Verify that the vertical axis on the left side indicates the spending amount in dollars.|The vertical axis accurately displays the spending amount in dollars.|
|TC005|1. Cross-reference the data displayed on the Bar Chart with actual spending records.|Verify that the displayed data matches the actual spending data for the specified nine-month period.|The data displayed on the Bar Chart matches the actual spending data.|
|TC006|1. Interact with the Bar Chart, such as hovering over bars or zooming in.|Verify that users can explore spending variations effectively.|Users can interact with the Bar Chart to explore spending variations.|
| | | | |
| Monthly Usage by Department(Alternative Flow)| | | |
|Test Case ID|Steps|Action|Expected Result|
|TC_06|1. User logs into the Application AppKube|The system encounters errors in retrieving spending data.|User receives an appropriate error message indicating the failure to retrieve spending data.|
|TC_07|1. User logs into the Application AppKube|The system encounters errors in rendering the Bar Chart.|User receives an appropriate error message indicating the failure to render the Bar Chart.|
