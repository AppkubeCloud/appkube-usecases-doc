**Use Case: SOA App Topology**

**Use Case Description:**

The Viewing SOA Application Topology use case outlines the flow when a user clicks on a specific Service-Oriented Architecture (SOA) application from the Application Overview. This process enables the user to explore the topology of the SOA application, including Business Services and Common Services. The user can delve deeper into Cloud-managed and Cluster-managed services, view details of specific services like API Gateway and Load Balancer, and access information on the right panel.

**Actors**:

User: Initiates interactions and exploration within the SOA Application Topology.

**Triggers**:

User navigates to an AWS account from the Environment Overview page.

User clicks on the "Applications" tab in the Discovered Assets page.

User selects an SOA application from the list.

**Preconditions**:

User has access to the Environment Overview page.

AWS account is selected from the Environment Overview, leading to the Discovered Assets page.

An SOA application exists in the selected AWS account.

**Postconditions**:

User has successfully viewed the topology of the selected SOA application.

Detailed information about Business Services, Cloud-managed services, and Cluster-managed services is accessible.

**Normal Flow**:

**User navigates to the AWS account**:

Logs into the system.

Accesses the Environment Overview page.

**User selects an AWS account**:

Clicks on the desired AWS account from the Environment Overview page.

System defaults to the Discovered Assets page:

The system, by default, takes the user to the Discovered Assets page for the selected AWS account.

**User clicks on the "Applications" tab**:

Clicks on the "Applications" tab at the top of the Discovered Assets page.

**System displays a list of applications**:

A list of all applications deployed in the AWS account is presented.

**User clicks on a specific SOA application**:

Clicks on a particular SOA application from the list.

**System displays the SOA Application Topology view**:

The topology view shows Business Services and Common Services for the selected SOA application.

**User explores Business Services**:

Clicks on Business Services to view a list of services used by the application.

**System lists Cloud-managed and Cluster-managed services**:

Displays Cloud-managed services (e.g., API Gateway) and Cluster-managed services (e.g., Load Balancer) in the right panel.

**User clicks on a specific Cloud-managed service**:

Clicks on a Cloud-managed service (e.g., API Gateway) from the list.

**System displays details of the Cloud-managed service**:

Information about the selected Cloud-managed service is shown on the right side panel.

**User explores Cluster-managed services**:

Clicks on Cluster-managed services to view a list of services.

**User clicks on a specific Cluster-managed service**:

Clicks on a Cluster-managed service (e.g., Load Balancer) from the list.

**System displays details of the Cluster-managed service**:

Information about the selected Cluster-managed service is shown on the right side panel.

**Alternative Flows**:

**No SOA Applications Found**:

If there are no SOA applications discovered in the AWS account, the system informs the user, and the process continues without displaying detailed application information.

**Navigation Issues**:

If there are issues navigating to the Discovered Assets page, the "Applications" tab, or the selected SOA application, the system notifies the user and provides guidance on resolving the problem.

**No Services in Business Services**:

If there are no services listed under Business Services, the system informs the user that no details are available.

**Exceptions**:

If at any point the user encounters an error or wishes to return to the Application Overview page, they can do so, and the system reverts to the previous state.
