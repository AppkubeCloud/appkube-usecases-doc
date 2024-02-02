**Use Case: Infrastructure Topology View**

**Use Case Description**:

The Infrastructure Topology View provides users with a comprehensive overview of AWS accounts, their product enclaves, and global services. Users can explore and interact with elements within product enclaves, view detailed information, and associate elements with applications or products.

**Actors**:

**User**: Initiates interactions with the Infrastructure Topology View.

**Triggers**:

User logs in and accesses the Infrastructure Topology View.

User aims to understand the architecture of AWS accounts, product enclaves, and global services.

**Preconditions**:

User has access to the Infrastructure Topology View.

AWS accounts, product enclaves, and global services are configured in the system.

**Postconditions**:

User has successfully navigated and explored the infrastructure topology.

Any associations or changes made by the user are saved.

**Normal Flow**:

**User accesses the Infrastructure Topology View**:

Logs into the system.

Navigates to the Infrastructure Topology section.

User views AWS Account, Product Enclave, and Global Services:

Sees a visual representation of AWS accounts, product enclaves, and global services on the topology view.

**User clicks on a Product Enclave**:

The topology view expands to display all elements within the selected Product Enclave along with a count of each element type (e.g., EC2, EKS, ECS).

**User clicks on a specific element**:

The details of the selected element are displayed on the side panel.

**User selects 3-tier or SOA application details for the Element**:

Chooses to view either 3-tier or SOA application details for the selected element.

**User associates the element to an application or product**:

Has the option to associate the selected element with an existing application or product.

**User explores further or returns to previous views**:

Navigates back to the topology view.

Continues exploring other AWS accounts, product enclaves, or global services.

**Alternative Flows**:

**No Elements in Product Enclave**:

If the selected Product Enclave has no elements, the system informs the user, and the process continues without displaying detailed elements.

**Association to Application/Product Fails**:

If there's an issue associating the element with an application or product, the system notifies the user and provides guidance on resolving the problem.

**Invalid Selection of Application Details**:

If the user attempts to select application details that are not applicable to the chosen element, the system prompts the user to choose the correct details.
