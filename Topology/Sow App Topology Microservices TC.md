| | | | |
|-|-|-|-|
|Show App Topology Microservices| | | |
|Steps|Actions|Expected Result|Actual Result|
| Log into the APP Kube Application| Enter valid credentials and log in.|User is logged in successfully.|User is successfully logged in; no errors reported.|
| Access the Environment Overview page.|Navigate to the Environment Overview page.|Environment Overview page is displayed.|Environment Overview page is displayed as expected.|
| Click on the desired AWS account.|Select the AWS account from the dropdown box.|User is directed to the selected AWS account.|User is directed to the selected AWS account; AWS account details are visible.|
| User has already selected an AWS account.|Ensure an AWS account is selected in the dropdown box.|The system should automatically navigate to the Discovered Assets page for the selected AWS account.|System automatically navigates to the Discovered Assets page for the selected AWS account.|
| Click on the "Applications" tab.| Navigate to the "Applications" tab on the Discovered Assets page.|A list of applications deployed in the AWS account is displayed.|List of applications is displayed as expected.|
| List of applications is displayed.|Click on XUBER SOA application from the list.|The system should display the SOA Application Topology view for the XUBER  application.|SOA Application Topology view is displayed with the XUBER application details.|
|XUBER Application Topology view is displayed.|Click on Business Services to view a list of services.|A list of Business Services used by the application is displayed.|List of Business Services is displayed as expected.|
| Business Services list is displayed.|Observe the right panel for Cloud-managed and Cluster-managed services.|Cloud-managed and Cluster-managed services are listed in the right panel.|Cloud-managed and Cluster-managed services are correctly listed.|
|Cloud-managed services are listed.| Click on a Cloud-managed service (e.g., API Getway, Load Balancer) from the list.|Details of the selected Cloud-managed service should be displayed on the right side panel.|Details of the selected Cloud-managed service are displayed .|
|Cluster-managed services are listed.| Click on a Cluster-managed service (e.g., Cluster, ingrees, Service Mesh, Java Springbot) from the list.|Details of the selected Cluster-managed service should be displayed on the right side panel.|Details of the selected Cluster-managed service are displayed .|
|PostgreSQL services are listed.| Click on a PostgreSQL service |Details of the selected PostgreSQL service should be displayed |Details of the selected PostgreSQL service are displayed .|
|Opensearch services are listed.| Click on a  Opensearch  service |Details of the selected Opensearch  service should be displayed |Details of the selected Opensearch service are displayed .|
| Cloud-managed service details are displayed.| Click on Cluster-managed Services to view a list.|A list of Cluster-managed services is displayed.|List of Cluster-managed services is displayed successfully.|
| Cluster-managed services list is displayed.| Click on a Cluster-managed service (e.g., Load Balancer) from the list.B5|Details of the selected Cluster-managed service should be displayed on the right side panel.|Details of the selected Cluster-managed service are displayed overview.|
| | | | |
|No SOA Applications Found| | | |
|Steps|Actions|Expected Result|Actual Result|
|No SOA Applications Found| | | |
| Click on the "Applications" tab on the Discovered Assets page.|Navigate to the "Applications" tab.|No SOA applications are discovered. System informs the user.|User clicks on the "Applications" tab, and the system attempts to retrieve SOA applications. However, no SOA applications are found, and the system displays a message on the UI, such as "No SOA applications found in this AWS account."|
|Navigation Issues| | | |
|Steps|Action|Expected result|Actual result|
|Navigate to the Environment Overview page.|Access the Environment Overview page.|Environment Overview page is not displayed due to navigation issues. System notifies the user.|User attempts to navigate to the Environment Overview page, but it is not accessible. The system recognizes the issue and displays a notification to the user, indicating the navigation problem.|
| Click on the "Applications" tab on the Discovered Assets page.|Navigate to the "Applications" tab.|Applications tab is not accessible due to navigation issues. System provides guidance.|User clicks on the "Applications" tab, but it is not accessible due to navigation issues. The system guides the user on resolving the navigation problem, providing instructions or suggestions.|
|Select an SOA application from the list.| Click on a specific SOA application.|SOA Application Topology view is not accessible. System provides guidance.|User attempts to select an SOA application, but the SOA Application Topology view is not accessible. The system guides the user on resolving the issue, providing instructions or suggestions.|
| | | | |
|No Services in Business Services| | | |
|Steps|Action|Expected result|Actual result|
|Explore Business Services.| Click on Business services.|No services are listed under Business Services. System informs the user.|User clicks on Business Services, and the system attempts to display a list of services. However, no services are found, and the system informs the user with a message like "No services listed under Business Services."|
| | | | |
|Exceptions| | | |
|Steps|Action|Expected result|Action result|
| Encounter an unexpected error or decide to return to the Application Overview page.| User clicks on a "Return" or "Go Back" button or chooses a relevant option from the UI.|System recognizes the user's request and initiates the process to return to the Application Overview page.|The system successfully recognizes the user's request to return.|
| If there were any changes or selections made by the user, the system should prompt if they want to save changes before returning.|System displays a prompt asking the User if they want to save any changes.|User is prompted with a message like "Do you want to save changes before returning|User observes the prompt as expected.|
| Confirm the decision to return without saving changes (if applicable).|User selects an option to proceed without saving changes.|The system returns to the Application Overview page without saving changes.|User is successfully returned to the Application Overview page without saving changes.|
| The Application Overview page is displayed with the previous state.|System displays the application Overview page.|User is back on the Application Overview page with the previous state.|The Application Overview page is successfully displayed with the previous state.|
