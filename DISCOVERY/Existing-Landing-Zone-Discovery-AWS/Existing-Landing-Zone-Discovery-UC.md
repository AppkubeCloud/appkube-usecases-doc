**Use Case Description**:

The Landing Zone Discovery Wizard facilitates the configuration of the landing zone for cloud resources.

**Actors**:

**User**: Initiates the landing zone discovery process.

**System**: Guides the user through the wizard and manages the configuration steps.

**Triggers**:

User initiates the landing zone discovery process when setting up a new cloud environment or refining an existing one.

**Preconditions**:

User has access to the Landing Zone Discovery Wizard.

Necessary permissions and credentials are available for configuring IAM policies and roles.

**Postconditions**:

Landing zone is configured based on user's selections.

IAM policies, roles, and organizational units are appropriately set up.

Accounts are successfully added to the landing zone.

**Normal Flow**:

**User initiates the wizard**:

The user opens the Landing Zone Discovery Wizard.

User selects Ready Only or Automation mode:

The user decides between "Ready Only" for manual configuration or "Automation" for an automated setup.

**User prepares IAM policies**:

In the selected mode, the user defines and configures IAM policies based on security and access requirements.

**User creates a role**:

The user defines a role with specific permissions needed for the landing zone.

The user specifies trust relationships as required.

**User associates OU**:

The user chooses between:

Selecting an existing Organizational Unit (OU).

Creating a new OU by filling out a form with necessary details.

**User adds accounts**:

The user specifies the accounts to be added to the landing zone.

**Alternative Flows**:

**Invalid IAM Policy Configuration**:

If the IAM policy configuration is invalid, the system prompts the user to rectify the issues before proceeding.

**Existing OU Not Found**:

If the user chooses to associate with an existing OU that does not exist, the system notifies the user and provides the option to select a different OU.

**Role Creation Failure**:

If the role creation fails, the system provides details on the error and guides the user to correct the configuration.

**Account Addition Issues**:

If there are issues adding accounts, such as invalid credentials, the system notifies the user and guides them to resolve the issues.
