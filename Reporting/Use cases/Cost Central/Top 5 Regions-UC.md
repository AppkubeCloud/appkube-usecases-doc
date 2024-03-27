**Use Case: Cost of Top 5 Regions Widget**

**Title:** Exploring and Analyzing Top 5 Regions Spend

**Introduction:** The 'Cost of Top 5 Regions' widget in the Cost Central Dashboard provides users with a detailed view of spending patterns in the top 5 regions across cloud service providers (AWS, Azure, GCP).

**Goals or Objectives:** The primary goal is to enable users to analyze and optimize cloud spending in the top 5 regions.

**Preconditions:**

- User has access to the Cost Central Dashboard.
- Relevant cloud accounts are integrated with the system.
- Data for the selected regions is available.

**Main Flow:**

1. **Widget Initialization:**
   1. Users can access the Cost Central Dashboard and view the widget displaying the 'Cost of Top 5 Region
1. **View Details Button:**
   1. User clicks on view detail button which is available on the top right corner of the widget.
1. **User lands on a new page called Cost of Top Region**

   1. **Filter Button:**
      1. Clicking the 'Filter' button opens a popup with multiple dropdowns.
      1. Dropdown options include:
         1. Select all regions.
         1. Select all services.
         1. Select all VPCs.
         1. Select all accounts.
         1. Select all Products.
      1. By default, the filter is set to 'All' (all services, all VPCs, all accounts, all products , all regions).
   1. **Date Picker Button:**
      1. Clicking the 'Date Picker' button provides a range of pre-selected dates:
         1. Last month
         1. This month
         1. Last quarter
         1. Current quarter
         1. Current year
         1. Last year
      1. By default, it is set to 'This Month.'



1. Four cards display spendings based on the selected filters:
   1. **Month to Date Spend:** Shows spending for the current month.
   1. **Forecasted Spend:** Provides an estimate of the current month's spending.
   1. **Last Month Spend:** Displays spending from the previous month.
   1. **Avg Daily Spend:** Calculates the average daily spending for the top 5 regions.

1. **Overview of Top Regions Table:**



   1. A table contains the following columns:
      1. **Region (Descending Order):** Displays the top 5 regions based on their spending.
      1. **Services Count:** Number of services accessed in that region.
      1. **Current Month Spend with Variance:** Displays spending for the current month with a variance compared to the last month.
      1. **Last Month Spend:** Shows spending from the previous month.
      1. **Actions:** Contains a 'View More' link for each region.
      1. **Search :** a search bar to assist user in searching for a region within the table.



1. **View More Link:**
   1. Clicking the 'View More' link in the 'Actions' column directs users to an internal page specific to a particular region. This page provides a more detailed breakdown of spending, services, and other relevant information for the selected region.

1. **Page Initialization:**
   1. Users click the 'View More' button for the N. Virginia region.
   1. The page displays information related to services used in the N. Virginia region.


1. **Overview Cards of N Virginia:**

   1. Four cards display spendings based on the selected filters:
      1. **Month to Date Spend of All Services:** Shows spending for all services in the N. Virginia region for the current month.
      1. **Forecasted Spend:** Provides an estimate of the current month's spending for the N. Virginia region.
      1. **Last Month Spend:** Displays spending from the previous month for the N. Virginia region.
      1. **Avg Daily Spend:** Calculates the average daily spending for the N. Virginia region.


   1. A table contains the following columns:
      1. **Service Name:** All the services accessed in the N. Virginia region.
      1. **Current Month Spend:** Month To Date spend of that particular service.
      1. **Last Month Spend:** Total cost incurred on that service in the last month.
      1. **Variance:** Difference between the MTD spend and the last month's spend to date.
      1. **Actions:** Contains a 'View More' link for each service.
1. **View More Link:**
   1. Clicking the 'View More' link in the 'Actions' column directs users to a detailed breakdown page for that service. This page provides further insights into the usage, costs, and other relevant details for the selected service within the N. Virginia region.


1. **Clicking 'View More' for EC2 Service:**
   1. Users click the 'View More' link for the 'EC2' Service within the ‘N. Virginia’.

1. **Overview Cards:**
   1. Five cards display spending details based on the selected filters:
      1. **Total EC2 Instances:** Indicates the total number of EC2 instances, including running, stopped, and terminated, in the selected month.
      1. **Month to Date Spend:** Shows the total spending on EC2 instances for the 'N. Virginia’ region in the current month.
      1. **Forecasted Spend:** Provides an estimate of the current month's spending, with a trend compared to last month.
      1. **Last Month Spend:** Displays spending from the previous month, along with a trend compared to the month before.
      1. **Avg Daily Cost:** Calculates the average daily cost of the EC2 Service within the 'N. Virginia’ Region.
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

**Postconditions:** Users gain in-depth insights into the cost breakdown of individual EC2 instances within the ,'N. Virginia’ Region supporting informed decision-making and cost optimization efforts.

**Success Criteria:**

- Users can seamlessly navigate and interact with the detailed cost analysis of EC2 instances.
- Overview cards provide a quick summary of key spending metrics for EC2 instances within the 'N. Virginia’
- The table offers a comprehensive breakdown of spending details for each EC2 instance.
- The search bar facilitates quick identification of specific instances.
- Pagination allows users to navigate through multiple pages of EC2 instances.

