| | | |
|-|-|-|
|Create New Landing Zone| | |
|Normal Flow| | |
|Steps|Actions|Expected Result|
| Login to "Appkube" with valid credentials.|Enter valid credentials and click on login button.|User successfully logged in and navigated to the Dashboard.|
| Click on  "CATALOGUE MANAGEMENT" page.|Click on "CATALOGUE MANAGEMENT" from the dashboard.|Dev, Sec & Ops modules are displayed.|
| Click on the "Ops" module.|Click on the "Ops" module from the CATALOGUE MANAGEMENT page.|Cloud Dashboards, Provisioning Templates, Alert Rules, Workflows, Collectors Bots & Diagnostic options are displayed.|
|Click on "Provisioning Templates".|Select "Provisioning Templates" from the Ops module options.|Number of cloud services are displayed.|
| Select "AWS Landing Zone".|Click on "AWS Landing Zone" from the list of cloud services.|Navigated to AWS Landing Zone configuration page.|
| Click on the "Next" button.|Click on the "Next" button to proceed.|Navigated to the next step for creating a Landing Zone.|
|Fill in required input fields.|Enter valid values for "CT Management Account ID, Log Archive Account ID, Audit Account ID, AFT Management Account ID, GitHub Username, CT Home Region & TF Backend Secondary Region" fields.|Input fields are populated with valid values.|
|Click on the "Create" button.|Click on the "Create" button to initiate the creation process.|Successful creation message is displayed.|
| | | |
| | | |
|Alternate Flow:| | |
|Fails due to missing or invalid input.|Leave one or more input fields blank or enter invalid values.|Validation error messages appear indicating missing or invalid input.|
| Rectify the errors and fill in correct values.|Correct the input values or provide the missing information.|All required input fields are correctly filled.|
|Attempt to create the AWS Landing Zone again.|Click on the "Create" button once more.|System processes the input and proceeds to create the Landing Zone.|
|Validation fails again due to duplicate entries.|Enter duplicate values for any of the required fields.|Error message displays indicating duplication of entries.|
| Resolve the duplication issue.|Modify the input values to ensure uniqueness.|Unique values are entered for each required field.|
|Click on the "Create" button.|Click on the "Create" button to proceed.|System successfully processes the input and creates the Landing Zone.|
|Verify the success message.|Check for the confirmation message indicating successful creation.|Success message displays confirming the creation of the Landing Zone.|
