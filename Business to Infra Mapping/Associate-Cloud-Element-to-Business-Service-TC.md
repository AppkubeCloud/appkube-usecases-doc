| | | | |
|-|-|-|-|
|Associating AWS Element to Business Service| | | |
|Steps|Action|Expected result|Actual result|
|Open the App Kube application.|User enters valid credentials and clicks on the "Login" button.|User is logged into the system.|User is successfully logged into the system.|
|From the dashboard, click on the "Environment Overview" link.|User is redirected to the "Environment Overvire" drop down page|Environment Overview drop down  page is displayed.|Environment Overview  drop down page is displayed as expected.|
|Click on a specific AWS account from the drop down list.|The system displays VPCs and Global Services for the selected AWS account.|VPCs and Global Services are listed for the selected AWS account.|VPCs and Global Services are displayed for the selected AWS account as expected.|
|Click on a specific VPC from the list.|The system displays the elements within the selected VPC.|Elements within the VPC are listed.|Elements within the VPC are displayed EKS-Cluster and ECS- cluster details|
|Click on a specific AWS element (e.g., ECS, EKS, EC2).|The system displays cards for available elements.|Cards representing available elements are displayed.|Cards for available elements are Displayed|
|Click on the "Associate App" option on the desired element card.|The system displays a clickable tree diagram for tagging.|A tree diagram with clickable options for department, product, and environment is presented.|Navigate to Synectiks under module Bussiness Association Mapping displayed|
|Sequentially click on department, product, and environment options.|The system prompts the user to select the application type.|User is prompted to choose between a 3-tier application or an SOA application.|The user is prompted to choose between a 3-tier application or an SOA application as expected.|
|Choose 3-tier application.|The system displays options for Web layer, App layer, and Data layer.|Options for Web layer, App layer, and Data layer are displayed.|Options for Web layer, App layer, and Data layer are displayed as expected.|
|Click on the desired layer (Web, App, Data,Auxiliary ).|The system displays services for the selected layer.|A list of services available for the selected layer is displayed.|A list of services for the selected layer is displayed as expected.|
|Click on a specific service for the chosen layer.|The system proceeds to the next step based on the selected layer.|The user is able to select a specific service for the chosen layer.|The user successfully selects a specific service for the chosen layer.|
|Choose SOA application.|The system prompts the user to choose between Business Service and Common Service.|User is prompted to choose between Business Service and Common Service.|The user is prompted to choose between Business Service and Common Service as expected.|
|Choose Business Service or Common Service.|The system prompts the user to select a module.|User is prompted to choose a module for the selected service type.|The user is prompted to choose a module for the selected service type as expected.|
|Click on the EC2:12463 module.|The system displays services for the EC2:12463 module.|A list of services available for the EC2:12463 module is displayed.|A list of services available for the EC2:12463 module is displayed .|
|Click on a specific service for the 3 Tier|The system proceeds to the next step they show (Web,App,Data,Auxiliary layer)|The user is able to select a specific service for the  (Web,App,Data,Auxiliary layer)|The user successfully selects a specific service for the   (Web,App,Data,Auxiliary layer)|
|Click on a specific service for the SOA|The system proceeds to the next step they show App,Data,Other service|The user is able to select a specific service for the  App,Data,Other service|The user successfully selects a specific service for the App,Data,Other service|
|Click on the "Add Tag" button.|The system associates the selected AWS element with the chosen business service, and the business service information is updated.|The AWS element is successfully associated with the business service, and business service information is updated.|The AWS element is successfully associated with the business service, and business service information is updated as expected.|
|Alternative Flow: Navigation Issues| | | |
|Steps|Actions|Expected Result|Actual Result|
|Encounter navigation issues (e.g., server error).|The system notifies the user and provides guidance on resolving the problem.|The system informs the user about navigation issues and provides guidance.|The system correctly notifies the user about the navigation issue (e.g., server error) and provides helpful guidance on how to resolve the problem or navigate to other sections.|
|Exceptions: Save Changes for Future Reference| | | |
|Steps|Actions|Expected Result|Actual Result|
|Encounter an error or wish to navigate to other sections.|The user navigates to other sections or encounters an error.|The system allows the user to navigate freely or encounters an error gracefully.|The system correctly allows the user to navigate freely or handles errors gracefully, ensuring that all changes made by the user are saved for future reference.|
|Alternative Flow: Tagging Errors| | | |
|Steps|Actions|Expected Result|Actual Result|
|Click on the "Add Tag" button.|The system encounters tagging errors and informs the user.|The system notifies the user of tagging errors and guides them to correct the tags.|The system correctly identifies tagging errors, displays appropriate messages, and guides the user to correct the tags. The error messages are clear and helpful.|
|Alternative Flow: Navigation Issues| | | |
|Steps|Actions|Expected Result|Actual Result|
|Encounter navigation issues (e.g., server error).|The system notifies the user and provides guidance on resolving the problem.|The system informs the user about navigation issues and provides guidance.|The system correctly notifies the user about the navigation issue (e.g., server error) and provides helpful guidance on how to resolve the problem or navigate to other sections. The guidance is clear and actionable.|
|Exceptions: Save Changes for Future Reference| | | |
|Steps|Actions|Expected Result|Actual Result|
|Encounter an error or wish to navigate to other sections.|The user navigates to other sections or encounters an error.|The system allows the user to navigate freely or encounters an error gracefully.|The system correctly allows the user to navigate freely or handles errors gracefully, ensuring that all changes made by the user are saved for future reference. The system provides a seamless experience for the user even in case of errors.|
