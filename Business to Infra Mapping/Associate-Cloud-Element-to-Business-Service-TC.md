| | | | |
|-|-|-|-|
|Test Cases: Associating AWS Element to Business Service - Viewing Services| | | |
| | | | |
|Steps|Actions|Expected Result|Actual Result|
|1. Open the App Kube application.|User enters valid credentials and clicks on the "Login" button.|User is logged into the system.|User is successfully logged into the system.|
|2. From the dashboard, click on the "Environment Overview" dropdown page|User is redirected to the "Environment Overview" dropdown page.|Environment Overview dropdown page is displayed.|Environment Overview dropdown page is displayed |
|3. Click on a specific AWS account from the list.|The system displays VPCs and Global Services for the selected AWS account.|VPCs and Global Services are listed for the selected AWS account.|VPCs and Global Services are displayed for the selected AWS account as expected.|
|4. Click on a specific VPC from the list.|The system displays the elements within the selected VPC.|Elements within the VPC are listed.|Elements within the VPC are displayed as expected.|
|5. Click on a specific AWS element (ECS, EKS, EC2).|The system displays cards for available elements.|Cards for available elements are shown.|Cards for available elements are shown as expected.|
|6. Click on the "View Services" option on the desired element card.|The system displays details of 3-tier and SOA applications on the element card.|Details about associated 3-tier and SOA applications are shown.|Details about associated 3-tier and SOA applications are displayed as expected.|
|7. Choose to view 3-tier applications.|User selects 3-tier application on the card.|System displays a list of services for the selected 3-tier application.|System correctly presents a list of services for the selected 3-tier application.|
|8. Switch to view SOA applications.|User switches to view SOA applications.|System displays a list of services for the selected SOA application.|System correctly presents a list of services for the selected SOA application.|
|9. Switch back to view 3-tier applications.|User switches back to view 3-tier applications.|System displays a list of services for the selected 3-tier application.|System correctly presents a list of services for the selected 3-tier application.|
|10. Select a specific service from the list.|User clicks on a specific service from the list.|System displays detailed information about the selected service.|System correctly presents detailed information about the selected service.|
|11. Navigate back to the Environment Overview.|User navigates back to the "Environment Overview" page.|The system returns to the "Environment Overview" page.|The system successfully returns to the "Environment Overview" page.|
|12. Logout from the application.|User logs out from the application.|The system logs out the user and returns to the login page.|The system successfully logs out the user and returns to the login page.|
| | | | |
| | | | |
|Alternative Flow: View Services Cancelled| | | |
| | | | |
|Steps|Actions|Expected Result|Actual Result|
| | | | |
|11. Decide to cancel viewing services.|User clicks on the "Cancel" button during the process.|The system cancels the view services operation and returns to the previous state.|The system successfully cancels the view services operation and returns to the previous state. User interface and data are reverted appropriately.|
| | | | |
| | | | |
|Alternative Flow: Navigation Issues| | | |
| | | | |
|Steps|Actions|Expected Result|Actual Result|
| | | | |
|11. Encounter navigation issues.|The system notifies the user and provides guidance on resolving the problem.|The system informs the user about navigation issues and provides guidance.|The system correctly notifies the user about navigation issues and provides guidance on how to resolve the problem. The guidance is clear and actionable.|
| | | | |
|Navigating to Other Sections| | | |
| | | | |
|Steps|Actions|Expected Result|Actual Result|
|(Steps 1-10 are the same as the main flow)| | | |
|11. Encounter an error or wish to navigate to other sections.|The user navigates to other sections or encounters an error.|The system allows the user to navigate freely or encounters an error gracefully.|The system correctly allows the user to navigate freely or handles errors gracefully, reverting to the previous state. User data and application state are maintained appropriately|
