| | | | |
|-|-|-|-|
|Show App List Valid TestCases| | | |
|HRMS Application Overview in AWS Account (Normal Flows)| | | |
|Steps|Actions|Expected Result|Actual Result|
|Open the AppKube system.|1. Navigate to the AppKube application URL.   2. Enter valid login credentials (username and password).                                                            3. Click on the "Login" button.|User should be successfully logged in.|User is successfully logged in.|
|From the home page, click on the "Environment Overview" link.|1. Locate and click on the "Environment Overview" link on the home page.|Environment Overview page should be displayed.|Environment Overview page is displayed.|
|On the Environment Overview page, select the desired AWS account.|1. Identify the list of available AWS accounts.    2. Click on the desired AWS account.|AWS account should be selected, and the Discovered Assets page should load.|The selected AWS account is highlighted, and the Discovered Assets page is loaded.|
|On the Discovered Assets page, click on the "Applications" tab.|1. Locate the "Applications" tab on the Discovered Assets page. 2. Click on the "Applications" tab.|The list of applications deployed in the selected AWS account should be displayed.|The list of applications is displayed.|
|Selecting an AWS account|1. On the "Environment Overview" page, click on the desired AWS account.|The system should navigate to the "Discovered Assets" page for the selected AWS account.|The system successfully navigates to the "Discovered Assets" page for the selected AWS account.|
|Navigating to the "Applications" tab|1. On the "Discovered Assets" page, click on the "Applications" tab at the top.|The system should display a list of applications deployed in the selected AWS account.|The list of applications is displayed.|
|Viewing the list of applications|1. On the "Applications" tab, observe the displayed list with details such as LOB, Environment, Application Type, SLE score, End Usage score, and cost.|The system should present a list of applications with accurate details.|The list of applications is displayed with accurate details.|
|Navigating to the "Topology" page for HRMS|1. On the list of applications, find and click on the "HRMS" application.|The system should navigate to the "Topology" page for the "HRMS" application.|The "Topology" page for the "HRMS" application is displayed.|
|Checking "Web Layer" overview|1. On the "Topology" page for HRMS, locate the "Web Layer" section.|The "Web Layer" overview for the HRMS application should be visible.|The "Web Layer" overview for the HRMS application is visible NGINX|
|Checking "App Layer" overview|1. On the "Topology" page for HRMS, locate the "App Layer" section.|The "App Layer" overview for the HRMS application should be visible.|The "App Layer" overview for the HRMS application is visible Spring boot|
|Checking "Data Layer" overview|1. On the "Topology" page for HRMS, locate the "Data Layer" section.|The "Data Layer" overview for the HRMS application should be visible.|The "Data Layer" overview for the HRMS application is visibles PostgreSqL & Opensearch|
|Show App List Invalid TestCases| | | |
|HRMS Application Overview in AWS Account (Alternative Flows)| | | |
|Steps|Actions|Expected Result|Actual Result|
|No Applications Found|If no applications are found on the "Applications" tab, the system should inform the user.Display a user-friendly message on the UI, such as "No applications found." Optionally, provide a button or link to guide the user to take relevant actions, like adding new applications or refreshing the list.|If no applications found on "Applications" tab, the system should inform the user.|System notifies the user that no applications are found.|
|Navigation Issues|If issues arise while navigating to the "Discovered Assets" page or "Applications" tab, the system should notify the user and provide guidance. Display an error message explaining the navigation issue.Include a description of possible solutions or steps the user can take to resolve the navigation problem. If appropriate, provide a link or button to guide the user to the desired page or suggest an alternative action.|If issues navigating to "Discovered Assets" page or "Applications" tab, system notifies the user and provides guidance.|System notifies the user of the navigation issue and provides guidance.|
|Error Encounter|If the user encounters an error, they should be able to return to the Environment Overview page, and the system should revert to the previous state.Catch and handle errors gracefully, displaying a user-friendly error message.Include a button or link to return to the Environment Overview page.Implement a mechanism to revert any unsaved changes made by the user to maintain the previous state.|If the user encounters an error, they should be able to return to the Environment Overview page, and the system reverts to the previous state.|User encounters an error, returns to Environment Overview page, and system reverts to the previous state.|
|User Decides to Return|If the user wishes to return to the Environment Overview page, the system should allow it, and all changes made should be saved. Include a navigation option, like a button or link, to return to the Environment Overview page.Ensure that any unsaved changes are prompted to be saved or automatically saved before navigating back.Display a confirmation message to the user, ensuring they are aware that changes have been saved or prompting them to save if necessary.|If the user wishes to return to the Environment Overview page, the system should allow it, and all changes made are saved.|User decides to return to Environment Overview page, and all changes are saved.|
|Show App List Valid TestCases| | | |
|XUBER Application Overview in AWS Account (Normal Flows)| | | |
|Steps|Actions|Expected Result|Actual Result|
|Open the AppKube system.|1. Navigate to the AppKube application URL.           2. Enter valid login credentials (username and password).                                                                3. Click on the "Login" button.|User should be successfully logged in.|User is successfully logged in.|
|From the home page, click on the "Environment Overview" link.|1. Locate and click on the "Environment Overview" link on the home page.|Environment Overview page should be displayed.|Environment Overview page is displayed.|
|On the Environment Overview page, select the desired AWS account.|1. Identify the list of available AWS accounts. 2. Click on the desired AWS account.|AWS account should be selected, and the Discovered Assets page should load.|The selected AWS account is highlighted, and the Discovered Assets page is loaded.|
|On the Discovered Assets page, click on the "Applications" tab.|1. Locate the "Applications" tab on the Discovered Assets page. 2. Click on the "Applications" tab.|The list of applications deployed in the selected AWS account should be displayed.|The list of applications is displayed.|
|Selecting an AWS account|1. On the "Environment Overview" page, click on the desired AWS account.|The system should navigate to the "Discovered Assets" page for the selected AWS account.|The system successfully navigates to the "Discovered Assets" page for the selected AWS account.|
|Navigating to the "Applications" tab|1. On the "Discovered Assets" page, click on the "Applications" tab at the top.|The system should display a list of applications deployed in the selected AWS account.|The list of applications is displayed.|
|Viewing the list of applications|1. On the "Applications" tab, observe the displayed list with details such as LOB, Environment, Application Type, SLE score, End Usage score, and cost.|The system should present a list of applications with accurate details.|The list of applications is displayed with accurate details.|
|Navigating to the "Topology" page for XUBER|1. On the list of applications, find and click on the "XUBER" application.|The system should navigate to the "Topology" page for the "XUBER" application.|The "Topology" page for the "XUBER" application is displayed.|
|Checking "XUBER" overview|1. On the "Topology" page for XUBER, locate the "Data Layer" section.|The "Data Layer" overview for the XUBER application should be visible.|The "XUBER" overview for the XUBER application is visibles Business Services & Common Services |
|Show App List Invalid TestCases| | | |
|XUBER Application Overview in AWS Account (Alternative Flows)| | | |
|Steps|Actions|Expected Result|Actual Result|
|No Applications Found|If no applications are found on the "Applications" tab, the system should inform the user.Display a user-friendly message on the UI, such as "No applications found." Optionally, provide a button or link to guide the user to take relevant actions, like adding new applications or refreshing the list.|If no applications found on "Applications" tab, the system should inform the user.|System notifies the user that no applications are found.|
|Navigation Issues|If issues arise while navigating to the "Discovered Assets" page or "Applications" tab, the system should notify the user and provide guidance. Display an error message explaining the navigation issue.Include a description of possible solutions or steps the user can take to resolve the navigation problem. If appropriate, provide a link or button to guide the user to the desired page or suggest an alternative action.|If issues navigating to "Discovered Assets" page or "Applications" tab, system notifies the user and provides guidance.|System notifies the user of the navigation issue and provides guidance.|
|Error Encounter|If the user encounters an error, they should be able to return to the Environment Overview page, and the system should revert to the previous state. Catch and handle errors gracefully, displaying a user-friendly error message. Include a button or link to return to the Environment Overview page. Implement a mechanism to revert any unsaved changes made by the user to maintain the previous state.|If the user encounters an error, they should be able to return to the Environment Overview page, and the system reverts to the previous state.|User encounters an error, returns to Environment Overview page, and system reverts to the previous state.|
|User Decides to Return|If the user wishes to return to the Environment Overview page, the system should allow it, and all changes made should be saved. Include a navigation option, like a button or link, to return to the Environment Overview page.Ensure that any unsaved changes are prompted to be saved or automatically saved before navigating back.Display a confirmation message to the user, ensuring they are aware that changes have been saved or prompting them to save if necessary.|If the user wishes to return to the Environment Overview page, the system should allow it, and all changes made are saved.|User decides to return to Environment Overview page, and all changes are saved.|