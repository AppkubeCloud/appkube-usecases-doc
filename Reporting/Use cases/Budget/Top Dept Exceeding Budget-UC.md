**Title: Top Department Exceeding Budget Widget**
 
**Actor:** CTO, CFO, Cloud Administrator, Cloud Operations Team and Financial Analyst
 
**Triggering Point:**
 
- When a user opens the cloud management platform's dashboard.
 
**Preconditions:**
 
- The user has logged in to the cloud management platform.
- The platform has recorded budget data for different departments and cloud services.
 
**Main Flow:**
 
1. When users log in, they see a widget called "Top Departments Exceeding Budget" on the dashboard.
1. This widget graphically represents which departments are exceeding budget
1. On the top right corner of the widget, there is an eye button. Clicking the eye button opens a detailed page.
1. Users can switch between tabs named AWS, GCP, and Azure to see spending on different cloud platforms. The AWS tab is selected by default.
1. On the detailed page, the user notices a duration selection button positioned at the right top corner of the detail page.
1. They select the desired time period from options such as 1 day, 1 week, last month, this month, quarter, half year, and annual
1. Below the duration selection button, an information table displays metrics including VPC, Department, All Products, Product with High Spending, Spend, Budget, and Forecast.
1. Users can select data under the "All Products" column to expand and view all products being utilized within the selected department.
1. The user is beign redirected to a new page where the detailed description of the product is displayed.
1. A table is displayed with the label 'All Products' and it has following columns: Product, Date Created, Product Category, High Spending Region,Environment, Spending, Budget,Forecast.
1. The Table also contains a search bar to help user to search for the product using product name or product category.
1. User can click on the 'product name' which will redirect the user to a new page where they can see the detail of that particular product.
1. On the detail page, the user can determine whether the selected product is 3-tier or SOA.
1. If it's 3-tier, the detail page includes web layer, data layer, and app layer details.
1. The user can select any layer to see the details of that layer on the right side of the screen, displaying all the resources being utilized.
 
1. When the user clicks on any service on the right side, they receive data about that particular service, the duration of resources running and its cost in a tabular format.
 
 
1. This action provides detailed insights into individual product usage contributing to budget overruns.
 
**Post Conditions:**
 
- The user gains comprehensive insights into departmental spending patterns and budget discrepancies.
- Informed decisions can be made to optimize resource allocation and mitigate budget overruns across departments and cloud platforms.
 
**Alternate Flow:**
 
- If there's an issue accessing the detailed page or using the widget, users may see an error message and need to try again or contact support for help.
 
