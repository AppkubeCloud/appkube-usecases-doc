**Use Case: Application Overview in AWS Account**

**Use Case Description**:

The Application Overview in the AWS Account allows users to view a list of all applications deployed within a specific AWS account. Users can access this information from the Environment Overview page, navigating to the Discovered Assets page and selecting the "Applications" tab. The displayed list includes details such as Line of Business (LOB), Environment, Application Type (3-tier or SOA), SLE (Service Level Expectation) score, End Usage score, and cost. Users can click on any application to view detailed information.

**Actors**:

User: Initiates interactions with the Application Overview.

**Triggers**:

User navigates to an AWS account from the Environment Overview page.

User clicks on the "Applications" tab in the Discovered Assets page.

**Preconditions**:

User has access to the Environment Overview page.

AWS account is selected from the Environment Overview, leading to the Discovered Assets page.

**Postconditions**:

User has successfully viewed the list of applications in the selected AWS account.

Detailed information about a specific application can be accessed by clicking on it.

**Normal Flow**:

**User navigates to the AWS account**:

Logs into the system.

Accesses the Environment Overview page.

**User selects an AWS account**:

Clicks on the desired AWS account from the Environment Overview page.

**System defaults to the Discovered Assets page**:

The system, by default, takes the user to the Discovered Assets page for the selected AWS account.

**User clicks on the "Applications" tab**:

Clicks on the "Applications" tab at the top of the Discovered Assets page.

**System displays a list of applications**:

A list of all applications deployed in the AWS account is presented, showing details such as LOB, Environment, Application Type, SLE score, End Usage score, and cost.

**User clicks on a specific application**:

Clicks on a particular application from the list to view detailed information.

**Alternative Flows**:

**No Applications Found**:

If there are no applications discovered in the AWS account, the system informs the user, and the process continues without displaying detailed application information.

**Navigation Issues**:

If there are issues navigating to the Discovered Assets page or the "Applications" tab, the system notifies the user and provides guidance on resolving the problem.

**Exceptions**:

If at any point the user encounters an error or wishes to return to the Environment Overview page, they can do so, and the system reverts to the previous state.

All changes made by the user are saved for future reference.
