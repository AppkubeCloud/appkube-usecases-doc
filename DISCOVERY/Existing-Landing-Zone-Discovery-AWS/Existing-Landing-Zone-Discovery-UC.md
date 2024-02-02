**Use Case: Existing Landing Zone Discovery**

**Use Case Description**:

The Landing Zone Discovery Wizard provides a streamlined process for adding an AWS environment to the system. Users can initiate the wizard from the Environment Overview page, select AWS environment, and follow a series of steps to configure the environment, including choosing the mode (Ready Only or Automation), preparing IAM policies, creating roles, and associating organizational units (OUs) or creating new ones.

**Actors**:

1\. User: Initiates the Landing Zone Discovery Wizard to configure an AWS environment.

**Triggers**:

\- User logs into the system.

\- From the Environment Overview page, the user selects the option to add a new environment and chooses AWS.

**Preconditions**:

1\. User has access to the system.

2\. The Environment Overview page is accessible.

3\. No existing configuration for the selected AWS environment.

**Postconditions**:

1\. The AWS environment is successfully added to the system with the configured settings.

2\. IAM policies, roles, and organizational units are appropriately set up for the added AWS environment.

**Normal** **Flow**:

1\. **User initiates the Landing Zone Discovery Wizard**:

`   `- Logs into the system.

`   `- Navigates to the Environment Overview page.

`   `- Selects the option to add a new environment and chooses AWS.

2\. **System displays the Landing Zone Discovery Wizard**:

`   `- The wizard prompts the user to configure the AWS environment.

3\. **User selects Ready Only or Automation mode**:

`   `- Chooses between "Ready Only" for manual configuration or "Automation" for an automated setup.

4\. **User prepares IAM policies**:

`   `- Defines and configures IAM policies based on security and access requirements.

5\. **User creates a role**:

`   `- Defines a role with specific permissions needed for the landing zone.

`   `- Specifies trust relationships as required.

6\. **User associates OU**:

`   `- Chooses between:

`     `- Selecting existing OU:

`       `- User picks an existing Organizational Unit from a list.

`     `- Creating a new OU:

`       `- Fills out a form to add a new OU, defining its structure and properties.

7\. **User adds the AWS account**:

`   `- Specifies the AWS account to be added to the landing zone.

**Alternative** **Flows**:

1\. **Invalid IAM Policy Configuration**:

`   `- If the IAM policy configuration is invalid, the system prompts the user to rectify the issues before proceeding.

2\. **Existing OU Not Found**:

`   `- If the user chooses to associate with an existing OU that does not exist, the system notifies the user and provides the option to select a different OU.

3\. **Role Creation Failure**:

`   `- If the role creation fails, the system provides details on the error and guides the user to correct the configuration.

4\. **Account Addition Issues**:

`   `- If there are issues adding the AWS account, such as invalid credentials, the system notifies the user and guides them to resolve the issues.

**Exceptions**:

\- If at any point the user encounters an error or wishes to cancel the wizard, they have the option to exit with the changes rolled back to the previous state.
