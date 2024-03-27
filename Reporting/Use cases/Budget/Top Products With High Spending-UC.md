
﻿
**Use Case: Top Products with High Spending**

**Title:** Monitoring and Analyzing Cloud Spending Across Multiple Providers

**Actor:** User (Administrator or Analyst)

**Goal:** To monitor and analyze spending on cloud services across different providers and drill down into detailed information about specific products and their utilization.

**Preconditions:**

1. The user has access to the budget dashboard within the Appkube platform.
1. The user has appropriate permissions to view spending data and access detailed information about cloud services and products.
1. Data for spending and usage of cloud services is available and up-to-date.

   **Main Flow**

1. The user logs into the Appkube platform and navigates to the budget dashboard.
1. On the budget dashboard, the user locates the "Top Products with High Spending" widget.
1. The widget displays a graphical representation (bar chart) of the top products and their spending for the current month and the previous month.
1. The user observes an eye button at the top right corner of the widget and clicks on it to view detailed information.
1. The user is directed to a detailed page with three tabs: AWS, GCP, and Azure. By default, the AWS tab is selected.
1. The user can switch between tabs to view spending details for different cloud service providers.
1. On the top right corner of the detailed page, there is a duration picker button that allows the user to select a time duration ranging from 1 day to annual.
1. The user selects a desired time duration to view spending data.
1. Below the duration picker, an information table is displayed, providing details such as product name, date created, product category, high spending region, environment, spending, budget, and forecast.
1. While hovering on the "Environment" category, the user can view all the environments in which a particular product is being utilized.
1. If the user clicks on a product name, they are directed to a detail page.
1. On the detail page, the user can determine whether the selected tool is 3-tier or SOA.
1. If it's 3-tier, the detail page includes web layer, data layer, and app layer details.
1. The user can select any layer to see the details of that layer on the right side of the screen, displaying all the resources being utilized.
1. When the user clicks on any service, they receive data about the duration of resources running and its cost.

   **Postconditions:**

1. The user gains insights into the top spending products across different cloud service providers.
1. Detailed information about specific products, their utilization, and spending is accessible and understandable.
1. The user can make informed decisions about optimizing cloud spending and resource utilization based on the provided data.

   Extensions:

- If the user encounters any technical issues or discrepancies in the displayed data, they can report the issue to the Appkube support team for resolution.
- If there are new features or enhancements suggested by the user community, they can provide feedback to the development team for consideration in future updates.

