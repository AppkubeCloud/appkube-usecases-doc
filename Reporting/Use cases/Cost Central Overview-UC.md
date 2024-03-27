
**Use Case: Cost Central Dashboard**



**Actors:**

- Cloud Administrators
- Financial Analysts
- Stakeholders responsible for cost management

**Goals or Objectives:** The primary goal is to enable users to monitor, analyze, and optimize cloud costs effectively through the Cost Central Dashboard.

**Preconditions:**

- Users have access to the cloud optimization software.
- Relevant cloud accounts are properly integrated with the system.

**Main Flow:**

1. **Dashboard Initialization:**
   1. Upon accessing the Cost Central Dashboard, users are presented with an overview containing three tabs:  AWS, Azure, and GCP.
   1. The default selection is AWS.
1. **Duration Selection:**
   1. Users can utilize the duration selector at the top right corner to choose periods such as 1 day, 1-week, Last month, This month, current quarter, last quarter, half year, and annual.
   1. The default duration is set to 'This Month.'

**Overview Cards:**

- The dashboard displays four cards:
  - **Current Month To Date Spend:** Shows spending for the current month.
  - **Forecasted Spend:** Displays an estimate of the current month's spending.
  - **Last Month Spend:** Presents spending from the previous month and the percentage variance.
  - **Year to Date Spend:** Illustrates cumulative spending for the selected CSP and the percentage variance compared to the previous year.

**First Row Widgets:**

- **Top 5 Accounts (Horizontal Bar Graph):**
  - Users can view a graphical representation of spending for the top 5 accounts.
  - Clicking the 'View Details' button leads to a detailed page of spending for these top accounts.
- **Most Used Services (Vertical Bar Graph):**
  - Displays the highest spending on services in a descending order.
  - Clicking 'View Details' provides a more detailed breakdown of costs incurred on AWS services.

**Second Row Widgets:**

- **Top 5 Regions (Donut Chart):**
  - Users can visualize cost distribution across the top 5 regions in a Donut chart.
  - The 'View Details' button leads to a more detailed breakdown of spending in each region.
- **Top 5 Products (Donut Chart):**
  - Presents the cost distribution across the top 5 products in a Donut chart.
  - Clicking 'View Details' provides a detailed breakdown of spending on each product.
- **Tagged vs Untagged Cost (Donut Chart):**
  - Visualizes the cost distribution between tagged and untagged resources.
  - Clicking 'View Details' leads to a detailed breakdown of 'Tagged vs Untagged Cost.'

**Alternate Flow: Data Retrieval Error Handling** 

1. **Dashboard Initialization:**
   1. User accesses the Cost Central Dashboard.
1. **Duration Selection:**
   1. User chooses a specific duration using the duration selector.
1. **Overview Cards:**
   1. The system encounters difficulty retrieving real-time data for the selected duration due to network issues or data source unavailability.
1. **Error Handling:**
   1. Instead of displaying inaccurate or incomplete data, the system presents an error message or notification to the user.
   1. The error message communicates the issue and suggests potential actions such as retrying, checking network connections, or contacting support.
1. **User Interaction:**
   1. The user can choose to retry the data retrieval process by refreshing the page or selecting a different duration.
   1. If the issue persists, the user is provided with a 'Contact Support' option or a link to additional resources for troubleshooting.
1. **Resolution:**
   1. Once the data retrieval issue is resolved, the user can proceed with the regular flow, viewing accurate and up-to-date information on the Cost Central Dashboard.

**Postconditions:** Users gain valuable insights into their cloud spending, enabling them to make informed decisions and optimize costs effectively.

**Success Criteria:**

- Users can seamlessly navigate and interact with the Cost Central Dashboard.
- Detailed breakdowns and visualizations provide actionable insights.
- The 'View Details' buttons lead users to in-depth analyses for further investigation.

**Conclusion:** The Cost Central Dashboard enhances users' ability to manage cloud costs, providing a user-friendly interface to monitor spending patterns, analyze trends, and make data-driven decisions for optimal resource allocation.

**THE END**

