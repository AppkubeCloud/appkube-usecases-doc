![](Aspose.Words.488cba7a-e4bb-445b-b5ea-fb309caac72b.001.png)

**Use Case: Monthly cost and budget overview/Invoice generation** 

**Use Case Description:** This use case focuses on providing users with a detailed overview of the financial status of different departments within an organization through an interactive table. The table reports on budget allocation, actual spending, variances, and payment status, and offers a "view more" action for detailed insights.

**Actors:** Users (with access to the Financial Status Table widget)

**Triggers:**  The need to Analyze and comprehend the financial status of various departments within the organization.

**Precondition:** Users have appropriate permissions to access the Financial Status Table for Departments - Detailed Overview.

**Postcondition:** Users gain insights into the financial status of different departments, enabling informed decision-making.

**Normal Flow:**

1. The user logs into the system and navigates to the dashboard containing the Financial Status Table widget.
1. The table provides a detailed overview of the financial status of different departments within the organization for various months.
1. The columns include:

a. Month:

Lists the months (January, December, November, October 2023).

b. Account ID:

Displays the consistent account ID (160079380622) associated with the financial data across months.

c. Department:

Specifies the department within the organization (Information Technology, Research and Development, Human Resources, SecOps).

d. Budget:

Indicates the budget allocated to each department for the respective month ($10,000).

e. Current Month's Spend:

Shows the actual spending for the current month.

f. Difference (Variance):

Highlights the difference between the budget and the current month's spending.

g. Payment Status:

Displays the status of payments with different indicators such as "Pending" (orange dot) and "Invoice sent" (blue dot).

h. Action (View More):

Provides an interactive "view more" link or button for each entry, allowing users to access more detailed information.


The user navigated to the IT Department Cloud Services Dashboard.

The dashboard includes two buttons at the top right:

a. "Create Invoice": Presumed to generate an invoice for services used.

b. "This Month": Likely a filter to view spending and details for the current month.

The dashboard features tabs for AWS, GCP, and Azure, indicating the use of multiple cloud service providers.

Key figures in the Spending Summary are highlighted:

**a. Last Month Spend** $10,000 (20% less than the previous month).

**b. This Month's Spend:** $12,800 (20% more than the previous month).

**c. Avg. Daily Spend:** $800 (average daily spending for the current month).

**Overview of Cloud Services lists** various services with spending for the last month and this month, along with spending variance.

Each service includes an "**Actions**" column featuring a "**View more**" link for accessing detailed information about that service.

**Example:**

**EC2: Last month's** spending was $2,000, and **This month's** spending is $1,800, with a variance of 15% decrease.

Filter Options below the Spending Summary allow users to view all services or filter by type **(Compute, Storage, Network).**







The user clicks on "View more" for a selected service.

The user is directed to the EC2 Instances Dashboard within the IT Department section.

The dashboard presents a summary of EC2 instances. 

**Total Instances:** 11 (11 running, 0 stopped, 0 terminated).

**Total EC2 Spend:** $1,800.

**Total spend on Add-ons:** 0.

**AVG. Daily Spend:** $60.

**In the Table - EC2 Instances Details:**

Each instance type is listed with its specific details.

The name of each instance is **clickable**, allowing users to drill down for more information.

Details include instance status, memory allocation, vCPUs, storage information, per-hour cost, usage hours, and total spend.

The user efficiently Analyzes the quantity, types, and costs of EC2 instances, facilitating effective management.
<br>
<br>
<br>
<br>
**Alternative Flow:**

**Usecase:** Creating Invoice
- When the user clicks "view more" on monthly cost and budget overview widget.
- The user is taken to internal screen, where the user finds "Create invoice" button on the top.
- When User clicks on the "Create invoice" button, User is taken to invoice creating page.
- a. "Step 1: Add OU."

b. "Step 2: Add Project & Services."

c. "Step 3: Payment and Date."

**In Step 1: Add OU:**

a. The user inputs the organization's name in the "Organization Name" text field, conforming to data integrity standards.

b. The user selects the department from the "Select Department" dropdown menu.

c. The user initiates progression to the next step by clicking the "CONTINUE" button.

**In Step 2: Add Project & Services:**

a. The user selects compute, storage, and network services.

b. The user chooses a product from the "Select Product" dropdown menu.

c. The user can navigate back to the previous step using the "BACK" button, maintaining user-friendly interactions.

d. The user proceeds to the next step by clicking the "CONTINUE" button, ensuring the logical flow of the process.

**In Step 3: Payment and Date:**

a. The user selects the "Invoice Issuing Date" and "Invoice Expiration Date".

b. The user can navigate back to the previous step using the "BACK" button, maintaining user-friendly interactions.

c. The user finalizes the form submission by clicking the "CONTINUE" button, confirming the completion of the invoice create system displays a completion screen featuring a green checkmark and the message "Completed!! Invoice Created Successfully!!," ensuring a clear indication of Invoice created. 

b. The user is presented with buttons for "HOME" to return to the main dashboard and "CONTINUE" for further actions, following a standard user interface pattern







