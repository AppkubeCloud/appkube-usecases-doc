| | | |
|-|-|-|
|Top Department Exceeding Budget Widget (Main Flow)| | |
| | | |
|Test Steps|Actions|Expected Result|
|User logs into the AppKube platform.|User enters credentials and logs into the cloud management platform.|The user is successfully logged in and directed to the dashboard interface.|
|User locates the "Top Departments Exceeding Budget" widget on the dashboard.|User scans the dashboard for the specified widget.|The "Top Departments Exceeding Budget" widget is visible and accessible on the dashboard.|
|User clicks on the eye button within the widget to open the detailed page.|User clicks on the eye button icon within the widget.|A detailed page is opened, allowing the user to view more information.|
|User selects a desired time period using the duration selection button.|User clicks on the duration selection button and selects a time period from the options provided.|The spending data is updated according to the selected time period.|
|User examines the information table displayed on the detailed page.|User reviews the information table displaying departmental spending metrics.|The table includes metrics such as VPC, Department, All Products, Product with High Spending, Spend, Budget, and Forecast.|
|User selects data under the "All Products" column to view all products being utilized within the selected department.|User clicks on data under the "All Products" column.|A new page is opened displaying detailed information about the selected product.|
|User examines the detailed description of the product on the new page.|User reviews the detailed description of the product.|The detailed description includes information such as Product Name, Date Created, Product Category, High Spending Region, Environment, Spending, Budget, and Forecast.|
|User clicks on the 'product name' to view further details.|User clicks on the 'product name' listed in the detailed description.|The user is redirected to a new page where they can see additional details about the selected product.|
|User determines whether the selected product is 3-tier or SOA.|User inspects the details provided on the detail page.|If the product is 3-tier, the detail page includes web layer, data layer, and app layer details. If SOA, appropriate details are displayed.|
|User selects any layer (if applicable) to view its details.|User clicks on a layer (web, data, or app) on the detail page.|The details of the selected layer are displayed on the right side of the screen.|
|User clicks on any service on the right side to receive detailed data.|User clicks on a specific service listed under the selected layer.|Data about the duration of resources running and its cost is displayed to the user in a tabular format.|
| | | |
|Top Department Exceeding Budget Widget (Alternate Flow)| | |
| | | |
|Test Steps|Actions|Expected Result|
|User clicks on the eye button within the widget to open the detailed page.|User clicks on the eye button icon within the widget.|The detailed page should be successfully opened, displaying the requested information.|
|If the detailed page fails to open due to an issue, an error message is displayed.|User encounters an error message instead of the detailed page.|An error message indicating the issue with accessing the detailed page is displayed to the user.|
|User attempts to reload the page or try again.|User refreshes the page or clicks on the eye button again to retry.|The user retries accessing the detailed page.|
|If the issue persists, user contacts support for assistance.|User is unable to access the detailed page despite multiple attempts.|The user contacts support for assistance in resolving the issue.|
