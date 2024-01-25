| | | | |
|-|-|-|-|
|Existing Landing Zone Discovery Valid Tests| | | |
|Steps|Actions|Expected Result|Actual Result|
|Open the AppKube.|Enter valid AWS account credentials, including Access Key ID and Secret Access Key.|The system should accept the valid AWS credentials.|The system successfully accepts the valid AWS credentials.|
|Navigate to the "Environments" section.|Provide a unique name for the environment.|The environment should be successfully added, and the user should be redirected to the Environments page.|The environment is added, and the user is redirected to the Environments page.|
|Click on the "Add New Environment" dropdown.|Choose a region from the available options.|A success message should be displayed confirming the addition of the AWS environment|A success message confirming the addition of the  NEW AWS ACCOUNT SETUP PAGE is displayed|
|Select "Amazon Web Services."|Click on the  "Submit" button.|The "Read-Only Mode" should be selected.|Read-Only Mode" is successfully selected.|
|Navigate to the "New AWS Account Setup" page|Click on the "Read-Only Mode" option.|The system should provide an informative message about the features and limitations of the "Read-Only Mode."|An informative message about the features and limitations of "Read-Only Mode" is displayed.|
|On the "New AWS Account Setup" page, Two specific condition is appear "Read-Only Mode" & "Automation Mode"|Click on the "Get Started" button.|The "Get Started" button should be clickable.|The "Get Started" button is clickable.|
|On the "New AWS Account Setup" page, locate the READ ONLY MODE| |No AWS account credentials should be required in "Read-Only Mode.| |
| | | | |
|Preparing IAM Policy for AppKube Valid Tests| | | |
|Steps|Actions|Expected Result|Actual Result|
|Log in to your AWS console (aws.amazon.com).|In the 'Create Policy' wizard, select the 'JSON' tab.|The system should successfully navigate to the 'JSON' tab.|The system successfully navigates to the 'JSON' tab.|
|Click on 'Services' and select the IAM service.|Review the provided policy document for AppKube.|The policy document content should be correctly displayed in the JSON editor.|The policy document content is correctly displayed in the JSON editor.|
|Select 'Policies' and click on the 'Create Policy' button.|Copy-and-paste the content of the policy document into the JSON tab.|No syntax errors should be reported in the JSON document.|No syntax errors are reported in the JSON document.|
| |Click the 'Next: Tags' button at the bottom of the page.|After clicking 'Next: Tags,' the system should navigate to the tags configuration step without errors.|Clicking 'Next: Tags' successfully navigates to the tags configuration step without errors|
| | | | |
|Creating IAM Roles for AppKube Valid Tests| | | |
|Steps|Actions|Expected Result|Actual Result|
|Navigate to the "Create Roles" section for AppKube.|On the "Create Roles" page, locate the input fields                                                                     Display Name                                                             Role ARN                                                                             External ID|The system should display the input fields for creating IAM roles.|The system correctly displays the input fields for creating IAM roles.|
|Click on the "Next" button|Click on the "Next" button|The input fields should be clearly labeled.|The input fields are labeled appropriately.|
| | |No errors or validation messages should be present initially.|No errors or validation messages are present initially.|
| | |Clicking the "Next" button should navigate to the "Associate OU" page without issues.|Clicking the "Next" button successfully navigates to the "Associate OU" page without issues|
| | | | |
|Selecting Existing OU for Association Valid Tests| | | |
|Steps|Actions|Expected Result|Actual Result|
|Navigate to the "Associate OU" page|On the "Associate OU" page, select the option to "Select From Existing OU."|The system should display a list of existing Organizational Units (OUs).|The system correctly displays a list of existing OUs.|
|On the "Associate OU" page, select the option to "Select From Existing OU|Enter a valid name in the "Name" field for the new OU.|The user should be able to select a specific OU from the list.|The user successfully selects a specific OU.|
|Navigate to the "Associate OU" page.|Enter a valid description in the "Description" field.|Upon selection, the system should provide feedback or confirmation of the OU association|The user inputs a valid name and description for the new OU.|
|Select the option to "Create New OU|Click the "Create" button|The system should navigate to the new OU creation section.|Clicking the "Create" button successfully creates the new OU, and the system provides confirmation|
|Click on the "Next" button|Click on the "Next" button|The user should be able to input a name and description for the new OU.|The system successfully creates the new OU with the provided name and description.|
|Click on the "Finished" button|Click on the "Finished" button|Clicking the "Create" button should successfully create the new OU, and the system should provide confirmation|The system successfully creates the new OU navigate to successfully AWS account will be added to appkube and will assocate with the OU's page|
| | |The system should successfully create the new OU with the provided name and description.|The system navigates to the App Kube DASHBOARD|
| | | | |
|Finished Valid Tests| | | |
|Steps|Actions|Expected Result|Actual Result|
|Navigate to the "Account Added" page.|In the account added page displayed                                   Display Name                                                                                                      Role ARN                                                                        EXTERNAL ID|The system should successfully create Dashboard|The system navigates to the App Kube DASHBOARD|
|Click on the "Finished" button|Click on the "Finished" button| | |
| | | | |
|Existing Landing Zone Discovery Invalid Tests| | | |
|Steps|Actions|Expected Result|Actual Result|
|Open the AppKube.|Enter invalid AWS account credentials.|The system should reject the invalid AWS credentials.|The system still accepts the invalid AWS credentials.|
|Navigate to the "Environments" section.|Provide a non-unique name for the environment.|The system should display an error message.|The environment is added despite providing a non-unique name.|
|Click on the "Add New Environment" dropdown.|Choose an invalid region.|An error should be displayed for the invalid region.|The system accepts the invalid region without displaying any error.|
|Select "Amazon Web Services."|Click on the "Submit" button without selection.|An error should prompt the user to choose an option.|Submission is allowed without selecting any option.|
|Navigate to the "New AWS Account Setup" page.|Click on "Read-Only Mode" without AWS credentials.|An error should indicate the need for AWS credentials.|Clicking on "Read-Only Mode" proceeds without AWS credentials.|
| | | | |
|Preparing IAM Policy for AppKube Invalid Tests| | | |
|Steps|Actions|Expected Result|Actual Result|
|Log in to your AWS console (aws.amazon.com).|Attempt to log in with incorrect credentials.|The system should reject the invalid login credentials.|The system allows login with incorrect credentials.|
|In the 'Create Policy' wizard, select the 'JSON' tab.|Skip selecting the 'JSON' tab and proceed to the next step.|An error should be displayed, indicating the need to select the 'JSON' tab.|The system allows proceeding without selecting the 'JSON' tab.|
|Click on 'Services' and select the IAM service.|Attempt to select a different service or skip this step.|An error message should indicate the need to select the IAM service.|The system allows selecting a different service without an error.|
|Review the provided policy document for AppKube.|Introduce syntax errors or modify the document incorrectly.|An error should be displayed, indicating syntax errors or incorrect modifications.|The system allows proceeding with incorrect policy document syntax.|
|Select 'Policies' and click on the 'Create Policy' button.|Click on the button without selecting any policy.|An error should prompt the user to select a policy before creating.|The system allows clicking without selecting a policy.|
|Copy-and-paste the content of the policy document into the JSON tab.|Introduce syntax errors or copy incorrect content.|No syntax errors should be reported in the JSON document.|Syntax errors are reported in the JSON document.|
|Click the 'Next: Tags' button at the bottom of the page.|Attempt to click without completing the policy creation.|An error should be displayed, indicating the need to complete the policy creation.|Clicking 'Next: Tags' allows proceeding without completing policy creation.|
| | | | |
|Creating IAM Roles for AppKube Invalid Tests| | | |
|Steps|Actions|Expected Result|Actual Result|
|Navigate to the "Create Roles" section for AppKube.|Attempt to access the "Create Roles" section with invalid access.|The system should reject the attempt due to invalid access.|The system allows access with invalid credentials.|
|On the "Create Roles" page, locate the input fields.|Modify or delete mandatory input fields.|An error should be displayed, indicating missing or incorrect inputs.|The system allows proceeding with missing or incorrect inputs.|
|Click on the "Next" button.|Click without filling in mandatory input fields.|An error should be displayed, indicating the need to fill in input fields.|The system allows clicking without filling in mandatory input fields.|
|Click on the "Next" button.|Attempt to click when errors or validation messages are present.|An error should be displayed, indicating the need to resolve errors.|The system allows clicking despite errors or validation messages.|
|Clicking the "Next" button should navigate to the "Associate OU" page without issues.|Introduce issues that prevent navigation to the next step.|An error should be displayed, preventing navigation to the next step.|Clicking "Next" encounters issues but allows navigation.|
| | | | |
|Selecting Existing OU for Association Invalid Tests| | | |
|Steps|Actions|Expected Result|Actual Result|
|Navigate to the "Associate OU" page.|Attempt to access the page with invalid permissions.|The system should reject the attempt due to invalid permissions.|The system allows access with invalid permissions.|
|On the "Associate OU" page, select the option to "Select From Existing OU."|Choose an option that is not present in the list.|An error should be displayed, indicating the need to select an existing OU.|The system allows choosing a non-existent option without an error.|
|On the "Associate OU" page, select the option to "Select From Existing OU."|Do not select any existing OU.|An error should be displayed, prompting the user to select an existing OU.|The system allows proceeding without selecting an existing OU.|
|Navigate to the "Associate OU" page.|Skip entering a valid description in the "Description" field.|An error should be displayed, indicating the need to provide a valid description.|The system allows skipping the description without displaying an error.|
|Select the option to "Create New OU."|Click the "Create" button without inputting a valid name.|An error should be displayed, indicating the need to provide a valid name.|The system allows clicking without providing a valid name.|
|Click on the "Next" button.|Attempt to click when errors or validation messages are present.|An error should be displayed, indicating the need to resolve errors.|The system allows clicking despite errors or validation messages.|
|Click on the "Finished" button.|Click without successfully creating the new OU.|An error should be displayed, indicating the unsuccessful creation of the new OU.|The system allows clicking without creating the new OU successfully.|
|The system should successfully create the new OU with the provided name and description.|Introduce issues that prevent successful creation.|An error should be displayed, preventing successful creation.|The system successfully creates the new OU despite introduced issues.|
|The system should successfully create the new OU with the provided name and description.|Introduce issues that prevent navigation to the App Kube DASHBOARD.|An error should be displayed, preventing navigation to the DASHBOARD.|The system successfully creates the new OU but encounters issues navigating to the DASHBOARD.|
| | | | |
|Finished Invalid Tests| | | |
|Steps|Actions|Expected Result|Actual Result|
|Navigate to the "Account Added" page.|Attempt to access the page with invalid permissions.|The system should reject the attempt due to invalid permissions.|The system allows access with invalid permissions.|
|In the account added page, display name, role ARN, and external ID displayed.|Modify or delete any of the displayed information.|An error should be displayed, indicating the need for valid information.|The system allows proceeding with modified or deleted information.|
|Click on the "Finished" button.|Click without successfully creating the App Kube DASHBOARD.|An error should be displayed, indicating the unsuccessful creation of the DASHBOARD.|The system allows clicking without creating the DASHBOARD successfully.|
|Click on the "Finished" button.|Attempt to click when errors or validation messages are present.|An error should be displayed, indicating the need to resolve errors.|The system allows clicking despite errors or validation messages.|
|Click on the "Finished" button.|Click without successfully creating the App Kube DASHBOARD.|An error should be displayed, indicating the unsuccessful creation of the DASHBOARD.|The system allows clicking without creating the DASHBOARD successfully.|
|The system should successfully create the new OU with the provided name and description.|Introduce issues that prevent successful creation.|An error should be displayed, preventing successful creation.|The system successfully creates the new OU despite introduced issues.|
|The system should successfully create the new OU with the provided name and description.|Introduce issues that prevent navigation to the App Kube DASHBOARD.|An error should be displayed, preventing navigation to the DASHBOARD.|The system successfully creates the new OU but encounters issues navigating to the DASHBOARD.|
