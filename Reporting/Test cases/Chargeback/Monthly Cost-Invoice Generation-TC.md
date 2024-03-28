| | | |
|-|-|-|
|Monthly cost and budget overview(Normal Flow )| | |
| | | |
|Test Steps|Actions|Expected Result|
|User logs into the AppKube application and navigates to the dashboard containing the Financial Status Table widget.|User enters credentials and selects the dashboard option containing the Financial Status Table widget.|The user is successfully logged in and directed to the dashboard interface displaying the Financial Status Table widget.|
|User examines the Financial Status Table widget.|User reviews the Financial Status Table widget on the dashboard.|The Financial Status Table widget provides a detailed overview of the financial status of different departments within the organization for various months, including columns for Month, Account ID, Department, Budget, Current Month's Spend, Difference (Variance), Payment Status, and Action (View More).|
|User clicks on the "View More" action for a specific entry in the Financial Status Table.|User clicks on the "View More" action link/button for a specific department entry in the table.|The user is directed to a detailed page or dashboard providing more information about the selected department's financial status.|
|User navigates to the IT Department Cloud Services Dashboard.|User selects the IT Department Cloud Services Dashboard option from the navigation menu.|The user is directed to the IT Department Cloud Services Dashboard interface.|
|User examines the buttons and tabs on the IT Department Cloud Services Dashboard.|User reviews the "Create Invoice" and "This Month" buttons, as well as the AWS, GCP, and Azure tabs on the dashboard.|The buttons and tabs are visible and accessible, providing options for generating invoices, filtering data for the current month, and viewing services from different cloud providers.|
|User reviews key figures in the Spending Summary section.|User examines key figures such as Last Month Spend, This Month's Spend, and Avg. Daily Spend in the Spending Summary section.|The key figures are displayed accurately, providing insights into spending trends for the organization's cloud services.|
|User explores the Overview of Cloud Services section.|User examines the list of various services with spending for the last month and this month, along with spending variances.|The services are listed with accurate spending data, and the "Actions" column features a "View more" link for accessing detailed information about each service.|
|User clicks on "View more" for a selected service.|User clicks on the "View more" link for a specific service listed in the Overview of Cloud Services section.|The user is directed to the EC2 Instances Dashboard within the IT Department section.|
|User examines the EC2 Instances Dashboard.|User reviews the summary of EC2 instances, total spend, and details provided on the EC2 Instances Dashboard.|The dashboard provides accurate information about EC2 instances, including total instances, total spend, and details for each instance type.|
|User analyzes the Table - EC2 Instances Details.|User examines the details provided in the Table - EC2 Instances Details section, including instance status, memory allocation, vCPUs, storage information, per-hour cost, usage hours, and total spend.|The details are displayed accurately, facilitating effective analysis of EC2 instances and their costs.|
| | | |
|Monthly cost and budget overview(Alternative Flow )| | |
| | | |
|Test Steps|Actions|Expected Result|
|User clicks on "View More" on the monthly cost and budget overview widget.|User clicks on the "View More" action for a specific department entry in the Financial Status Table.|The user is directed to the internal screen for creating an invoice.|
|User inputs the organization's name and selects the department in Step 1: Add OU.|User enters the organization's name in the "Organization Name" text field and selects the department from the dropdown menu.|The organization's name and department are successfully inputted, adhering to data integrity standards.|
|User clicks the "CONTINUE" button to proceed to Step 2.|User clicks on the "CONTINUE" button after completing Step |The user is directed to Step 2: Add Project & Services.|
|User selects compute, storage, and network services in Step 2.|User selects compute, storage, and network services and chooses a product from the dropdown menu.|The selected services and product are successfully chosen.|
|User clicks the "CONTINUE" button to proceed to Step 3.|User clicks on the "CONTINUE" button after completing Step 2.|The user is directed to Step 3: Payment and Date.|
|User selects the invoice issuing date and expiration date.|User selects the "Invoice Issuing Date" and "Invoice Expiration Date".|The dates are successfully selected.|
|User clicks the "CONTINUE" button to finalize the form submission.|User clicks on the "CONTINUE" button after completing Step 3.|The form submission is finalized.|
|User is presented with a completion screen featuring a green checkmark and the message "Completed!! Invoice Created Successfully!!"|User is presented with a completion screen confirming successful invoice creation.|The completion screen is displayed with a green checkmark and the success message.|
|User is presented with buttons for "HOME" and "CONTINUE".|User is presented with options to return to the main dashboard or continue with further actions.|Buttons for "HOME" and "CONTINUE" are displayed as expected.|
