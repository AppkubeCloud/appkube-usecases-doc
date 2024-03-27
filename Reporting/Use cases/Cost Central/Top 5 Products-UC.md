
**Use Case: Cost of ‘Top 5 Products’ Widget**

**Title:** Analyzing Top 5 Products Expenditure

**Introduction:** The 'Cost of Top 5 Products' widget in the 'Cost Central Dashboard' allows users to explore and analyze the spending patterns of the top products. Clicking the 'View Details' button for the 'Top 5 Products' navigates users to a dedicated page for in-depth analysis.

**Actors:**

- Cloud Administrators
- Financial Analysts
- Stakeholders responsible for product-based cost management

**Goals or Objectives:** Enable users to analyze and gain insights into the spending details of the top 5 products in AWS.

**Preconditions:**

- User has accessed the 'Cost Central Dashboard.'
- The 'Top 5 Products' widget is visible on the overview dashboard.
- Relevant cloud accounts are integrated with the system.


**Main Flow:**

1. **Clicking 'View Details':**
   1. Users click the 'View Details' button in the 'Top 5 Products' widget.
1. **Navigating to New Page:**
   1. Users are directed to a new page titled 'Cost Central Dashboard.'
   1. A back arrow is available to navigate back to the previous page.
   1. Three tabs ('AWS,' 'AZURE,' 'GCP') are present, with 'AWS' selected by default.
1. **Date Picker:**
   1. A 'Date Picker' button on the top right corner allows users to select a date range.
   1. Pre-selected date options include 'Last Month,' 'This Month,' 'Last Quarter,' 'Current Quarter,' 'Current Year,' and 'Last Year.'
   1. By default, it is selected to 'This Month.'
1. **Overview Cards:**
   1. Four cards display spendings based on the selected filters:
      1. **Month to Date Spend:** Shows the total spending of the top 5 products for the current month.
      1. **Forecasted Spend:** Provides an estimate of the current month's spending, with a trend compared to last month.
      1. **Last Month Spend:** Displays spending from the previous month, along with a trend compared to the month before.
      1. **Avg Daily Spend:** Calculates the average daily spending of the top 5 products.
1. **Overview of Top 5 Products Table:**
   1. A table with 8 columns presents detailed spending information:
      1. **Product Name:** Lists the top 5 products with the highest spending.
      1. **Date Created:** Displays the date when the product was created for the first time.
      1. **Product Category:** Indicates whether the product belongs to '3-tier architecture' or 'SOA architecture.'
      1. **Highest Spend Region:** Identifies the region incurring the highest cost for that product.
      1. **Environment:** Shows the number of environments associated with the product, along with the name of the environment incurring the highest charge.
      1. **This Month Cost:** Presents the cost incurred by the product in the current month.
      1. **Last Month Spend with Variance:** Displays the cost incurred on the product last month, along with a variance compared to the previous month.
      1. **Actions (View More):** Provides 'View More' links to navigate to the internal page of each product, where the list of services used in that product will be displayed.

1. **Clicking 'View More' in Actions Tab:**
   1. Users click the 'View More' link in the 'Actions' tab for the 'Internal CRM Tool.'
1. **Navigating to New Page:**
   1. Users are directed to a new page titled 'Services in Internal CRM Tool.'
   1. Three tabs ('AWS,' 'AZURE,' 'GCP') are present, with 'AWS' selected by default.

1. **Overview Cards:**
   1. Five cards display spending details based on the selected filters:
      1. **Total Number of Services:** Indicates the total number of services used within the 'Internal CRM Tool.'
      1. **Month to Date Spend:** Shows the total spending on services for the 'Internal CRM Tool' in the current month.
      1. **Forecasted Spend:** Provides an estimate of the current month's spending, with a trend compared to last month.
      1. **Last Month Spend:** Displays spending from the previous month, along with a trend compared to the month before.
      1. **Avg Daily Spend:** Calculates the average daily spending on services within the 'Internal CRM Tool.'
1. **Table: Services Used in Internal CRM Tool:**

A table with 6 columns presents detailed spending information for each service:

1. **Service Name:** Lists the names of services used in the 'Internal CRM Tool.'
1. **Current Month Spend:** Shows the Month To Date spends of a particular service.
1. **Last Month Spend:** Displays the total cost incurred on that service in the last month.
1. **Variance Compared to Last Month:** Shows the difference in spending between the current month and the last month.
1. **Avg Daily Spend:** Indicates the daily average spend on that service.
1. **Actions (View More):** Provides a 'View More' link to navigate to a detailed breakdown of that service.


1. **Clicking 'View More' for EC2 Service:**
   1. Users click the 'View More' link for the 'EC2' Service within the 'Internal CRM Tool.'
1. **Navigating to New Page:**
   1. Users are directed to a new page titled 'EC2 Service Cost Analysis.'
   1. Two buttons on the top right corner: 'Filter' and 'Date Picker.'
1. **Overview Cards:**
   1. Five cards display spending details based on the selected filters:
      1. **Total EC2 Instances:** Indicates the total number of EC2 instances, including running, stopped, and terminated, in the selected month.
      1. **Month to Date Spend:** Shows the total spending on EC2 instances for the 'Internal CRM Tool' across all regions in the current month.
      1. **Forecasted Spend:** Provides an estimate of the current month's spending, with a trend compared to last month.
      1. **Last Month Spend:** Displays spending from the previous month, along with a trend compared to the month before.
      1. **Avg Daily Cost:** Calculates the average daily cost of the EC2 Service within the 'Internal CRM Tool.'
1. **Table: Cost Consumption of EC2:**
   1. A table with 11 columns presents detailed spending information for each EC2 instance:
      1. **Tags:** Tag names of the EC2 instance.
      1. **Instance ID:** Lists the Instance ID.
      1. **Instance Type:** Specifies the type of EC2 instance (e.g., t2.2xlarge, c5.2xlarge).
      1. **Instance Status:** Indicates whether the instance is currently running, stopped, or terminated.
      1. **Pricing Model:** Specifies whether the EC2 instance is On Demand, Spot Instance, or Reserved Instance.
      1. **Availability Zones:** Displays the zone where the instance is located.
      1. **On Demand Cost / HR:** Cost per hour if the instance is On Demand or under a Savings Plan.
      1. **Reserved Instance Cost / HR:** Effective per hour cost if the instance is under a Reserved Instance; null if On Demand.
      1. **Usage Hours:** Total hours the instance has run so far.
      1. **Add-ons:** Additional cost associated with attached EBS, if any; null otherwise.
      1. **Total Spend:** Total cost associated with each EC2 instance.
1. **Search Bar:**
   1. A search bar allows users to search for a specific EC2 instance by ID or tag.
1. **Pagination:**
   1. Pagination with 'Previous Page' and 'Next Page' buttons facilitates navigation through multiple instances.
   1. The center of the screen indicates the current page being accessed.

**Postconditions:** Users gain in-depth insights into the cost breakdown of individual EC2 instances within the 'Internal CRM Tool,' supporting informed decision-making and cost optimization efforts.

**Success Criteria:**

- Users can seamlessly navigate and interact with the detailed cost analysis of EC2 instances.
- Overview cards provide a quick summary of key spending metrics for EC2 instances within the 'Internal CRM Tool.'
- The table offers a comprehensive breakdown of spending details for each EC2 instance.
- The search bar facilitates quick identification of specific instances.
- Pagination allows users to navigate through multiple pages of EC2 instances.


