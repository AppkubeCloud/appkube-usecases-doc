**Use Case: App Topology 3 Tier**

**Use Case Description**:

The Viewing 3-Tier Application Topology use case outlines the flow when a user clicks on a specific 3-tier application from the Application Overview. This process enables the user to explore the topology of the application, including the Web layer, App layer, and Data layer. Additionally, the user can view details of SSL certificates, technology elements in each layer, and specifics of individual elements, such as Nginx.

**Actors**:

User: Initiates interactions and exploration within the 3-Tier Application Topology.

**Triggers**:

User navigates to an AWS account from the Environment Overview page.

User clicks on the "Applications" tab in the Discovered Assets page.

User selects a 3-tier application from the list.

**Preconditions**:

User has access to the Environment Overview page.

AWS account is selected from the Environment Overview, leading to the Discovered Assets page.

A 3-tier application exists in the selected AWS account.

**Postconditions**:

User has successfully viewed the topology of the selected 3-tier application.

Detailed information about SSL certificates, technology elements, and individual elements within the Web, App, and Data layers is accessible.

**Normal** **Flow**:

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

A list of all applications deployed in the AWS account is presented.

**User clicks on a specific 3-tier application**:

Clicks on a particular 3-tier application from the list.

**System displays the 3-Tier Application Topology view**:

The topology view shows the Web layer, App layer, and Data layer of the selected 3-tier application.

**User explores the Web layer**:

Clicks on the Web layer to view details of elements/technologies used (e.g., Nginx).

**System displays details of Nginx**:

Information about Nginx is presented on the right side panel, including variables and volume details in the bottom panel.

**User explores the App layer**:

Clicks on the App layer to view details of elements/technologies used.

**System displays details of App layer elements**:

Information about the elements in the App layer is presented on the right side panel, including variables and volume details in the bottom panel.

**User explores the Data layer**:

Clicks on the Data layer to view details of elements/technologies used.

**System displays details of Data layer elements**:

Information about the elements in the Data layer is presented on the right side panel, including variables and volume details in the bottom panel.

**User clicks on SSL certificate**:

Clicks on the SSL certificate associated with the application.

**System displays SSL certificate details**:

SSL certificate details are shown on the right side panel.

**Alternative Flows**:

**No 3-Tier Applications Found**:

If there are no 3-tier applications discovered in the AWS account, the system informs the user, and the process continues without displaying detailed application information.

**Navigation Issues**:

If there are issues navigating to the Discovered Assets page, the "Applications" tab, or the selected 3-tier application, the system notifies the user and provides guidance on resolving the problem.

**No SSL Certificate Details Available**:

If there are no SSL certificates associated with the application, the system notifies the user that no details are available.

**Exceptions**:

If at any point the user encounters an error or wishes to return to the Application Overview page, they can do so, and the system reverts to the previous state.
