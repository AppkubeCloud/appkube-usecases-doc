**Use Case: Available Budgets Widget**


**Actor:** Financial Analyst (or anyone with access to the financial dashboard)

**Goal:** Monitor and manage the organization's AWS budgets by viewing a consolidated overview and detailed information for each budget.

**Preconditions:**

- The user has logged in to the platform and has access to the financial dashboard.
- The user has appropriate permissions to view budget details.



**Main flow:**

1. The user navigates to the Budget dashboard.
1. The user locates the "Available Budgets" widget on the dashboard.
1. The widget displays a list of cards, each representing a single budget.
1. Each card displays the following information:
   1. Budget Name
   1. Department Name
   1. Time Period Left (e.g., "2 Months Remaining")
   1. Remaining Budget (absolute value)
   1. Budget Period (monthly, weekly, quarterly, yearly)
1. The card also features a progress bar:
   1. Divided from the center, visually separating remaining and spent budget.
   1. The right side of the bar displays the Total Budget Allocated.
   1. As spending increases, the filled portion of the bar on the left side expands towards the center, visually representing the remaining budget.
1. The user can quickly scan the list of cards to identify potential budget concerns based on:
   1. Low remaining budget values.
   1. Short time period left for expiration.

**Alternative Flow:**

- If there are no active budgets, the widget displays a message like "No Active Budgets Found."

**Success:**

- Provides a consolidated view of all active budgets within the organization.
- Users can easily assess the overall budget health based on remaining funds and expiration times.
- The progress bar offers a quick visual indicator of budget utilization.
