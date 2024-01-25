**Use Case: Viewing Tagged Compliance for Specific Accounts**

**Use Case Description**:

The Viewing Tagged Compliance for Specific Accounts use case outlines the process for users to check tagged compliance for specific accounts. Users log into the application and navigate to the "Environment Overview" page, where a table displays a list of accounts. The "Compliance" column in the table provides a mechanism for users to view tagged compliance for each account. Hovering over the compliance column triggers a popup displaying tags, such as HIPAA and PCIDSS compliance, associated with that specific account.

**Actors**:

User: Initiates interactions to view tagged compliance for specific accounts.

**Triggers**:

User logs into the system.

User navigates to the "Environment Overview" page.

**Preconditions**:

User has access to the system.

Accounts with tagged compliance information are available.

**Postconditions**:

User has successfully viewed tagged compliance for specific accounts.

Detailed information about compliance tags associated with each account is accessible.

**Normal Flow**:

**User logs into the application**:

Enters credentials to log into the system.

**User navigates to the "Environment Overview" page**:

Clicks on the "Environment Overview" page from the navigation menu.

**System displays a table of accounts**:

A table is presented with a list of accounts, including a "Compliance" column.

**User hovers over the "Compliance" column for a specific account**:

Hovers the mouse cursor over the "Compliance" column corresponding to a specific account.

**System triggers a popup displaying compliance tags**:

A popup appears, displaying tags associated with compliance for the selected account.

Example tags: HIPAA, PCIDSS.

**Alternative Flows**:

**No Tagged Compliance Found**:

If there are no compliance tags associated with the selected account, the system informs the user that no compliance details are available.

**Navigation Issues**:

If there are issues navigating to the "Environment Overview" page or hovering over the "Compliance" column, the system notifies the user and provides guidance on resolving the problem.

**Exceptions**:

If at any point the user encounters an error or wishes to navigate to other sections of the application, they can do so, and the system reverts to the previous state.
