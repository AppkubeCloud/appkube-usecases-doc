**Use Case: Associating AWS Element to Business Service**

**Use Case Description**:

The Associating AWS Element to Business Service use case outlines the process for users to associate an AWS element (e.g., ECS, EKS, EC2) with a specific business service. Users navigate from the "Environment Overview" page to a specific AWS account, select a VPC, choose an element, and associate it with a business service. The system guides the user through a structured process, including selecting layers, services, and modules, and finally, adding tags to complete the association.

**Actors**:

User: Initiates interactions to associate an AWS element with a business service.

**Triggers**:

User logs into the system.

User navigates to the "Environment Overview" page.

User selects a specific AWS account.

**Preconditions:**

User has access to the system.

AWS account information is available, including VPCs and associated AWS elements.

**Postconditions**:

User has successfully associated an AWS element with a business service.

Business service information is updated with the association details.

**Normal Flow**:

**User navigates to the AWS account**:

Logs into the system.

Clicks on a specific AWS account from the "Environment Overview" page.

**System displays VPCs and Global Services for the selected AWS account**:

A list of VPCs and global services is presented for the selected AWS account.

**User selects a VPC**:

Clicks on a specific VPC to view its elements.

**User clicks on an AWS element (ECS, EKS, EC2):**

Clicks on a specific AWS element within the selected VPC.

**System displays cards for available** **elements**:

A set of cards representing available elements (e.g., ECS, EKS, EC2) is displayed.

**User clicks on the "Associate App" option on the desired element card**:

Clicks on the option to associate the selected element with a business service.

**System displays a clickable tree diagram for tagging**:

A tree diagram is presented with clickable options for department, product, and environment.

**User clicks on department, product, and environment**:

Sequentially clicks on the department, product, and environment options.

**System prompts user to select the application type**:

Asks the user to choose between a 3-tier application or an SOA application.

**User selects the application type (3-tier or SOA):**

Chooses whether the application is a 3-tier or an SOA application.

**For 3-Tier Application**:

If 3-tier is selected, the system displays options for Web layer, App layer, and Data layer.

a. User selects a layer:

Clicks on the desired layer (Web, App, Data).

b. System displays services for the selected layer:

A list of services available for the selected layer is displayed.

c. User selects a service:

Clicks on a specific service for the chosen layer.

**For SOA Application**:

If SOA is selected, the system prompts the user to choose between Business Service and Common Service.

a. User selects Business Service or Common Service:

Chooses whether it's a Business Service or a Common Service.

b. System prompts user to select a module:

Asks the user to choose a module for the selected service type.

c. User selects a module:

Clicks on the desired module.

d. System displays services for the selected module:

A list of services available for the chosen module is displayed.

e. User selects a service:

Clicks on a specific service for the chosen module.

**User clicks on the "Add Tag" button**:

Finalizes the tagging process by clicking on the "Add Tag" button.

**Alternative Flows**:

**Association Cancelled**:

If the user decides to cancel the association at any step, they can do so, and the system returns to the previous state.

**Tagging Errors**:

If there are issues with tagging (e.g., missing information), the system informs the user and guides them to correct the tags.

**Navigation Issues**:

If there are issues navigating between elements or layers, the system notifies the user and provides guidance on resolving the problem.

**Exceptions**:

If at any point the user encounters an error or wishes to navigate to other sections of the application, they can do so, and the system reverts to the previous state.

All changes made by the user are saved for future reference.
