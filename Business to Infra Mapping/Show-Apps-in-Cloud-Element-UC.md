**Use Case: Show Apps in CloudElement**

**Use Case Description**:

The Associating AWS Element to Business Service - Viewing Services use case outlines the process for users to associate an AWS element (e.g., ECS, EKS, EC2) with business services and view the services running on that element. Users navigate from the "Environment Overview" page to a specific AWS account, select a VPC, choose an element, and explore the associated services. The system provides card-based details for 3-tier and SOA applications, allowing users to view and switch between lists of services.

**Actors**:

User: Initiates interactions to associate an AWS element with business services and view associated services.

**Triggers**:

User logs into the system.

User navigates to the "Environment Overview" page.

User selects a specific AWS account.

**Preconditions**:

User has access to the system.

AWS account information is available, including VPCs and associated AWS elements.

**Postconditions**:

User has successfully associated an AWS element with business services and viewed the list of associated services.

Detailed information about associated services is accessible.

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

**System displays cards for available elements**:

A set of cards representing available elements (e.g., ECS, EKS, EC2) is displayed.

**User clicks on the "View Services" option on the desired element card**:

Clicks on the option to view services associated with the selected element.

**System displays details of 3-tier and SOA applications on the element card**:

The card provides details about the associated 3-tier and SOA applications.

**User selects 3-tier or SOA application on the card**:

Chooses whether to view services for a 3-tier or SOA application.

**System displays list of services for the selected application type**:

A list of services running on the selected element is presented.

**User has the option to switch between 3-tier and SOA application lists**:

If initially viewing 3-tier applications, the user can switch to SOA applications and vice versa.

**Alternative Flows**:

**View Services Cancelled**:

If the user decides to cancel viewing services at any step, they can do so, and the system returns to the previous state.

**Navigation Issues**:

If there are issues navigating between elements or viewing services, the system notifies the user and provides guidance on resolving the problem.

**Exceptions**:

If at any point the user encounters an error or wishes to navigate to other sections of the application, they can do so, and the system reverts to the previous state.
