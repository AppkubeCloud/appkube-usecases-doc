# Use Case: Creating Department

## Use Case Description

This use case describes the process for creating a new department within the microservices monitoring tool.

## Trigger

The trigger for this use case is the need to establish a new department within the organization.

## Primary Actors

- Admin: Responsible for initiating and overseeing the department creation process.
- User: Provides necessary information and selects options during the department creation process.

## Precondition

The user must be authenticated and have the necessary permissions to create a department within the microservices monitoring tool.

## Postcondition

A new department is successfully created and visible within the organization's structure in the microservices monitoring tool.

## Normal Flow

1. The admin logs into the microservices monitoring tool and navigates to the dashboard.
2. The admin selects the option to create a new department.

![Alt text](./Assets/Create%20Department.png)


3. The system displays the dashboard showing the organization's structure, including available organization units and web services (AWS, Azure, GCP, Kubernetes), along with a button to proceed with department creation.
4. The administrator clicks on the "Department" button, initiating the department creation process.
5. The system presents a screen for entering basic department information, including the department name and description.
6. The administrator fills in the required information and clicks on the "Next" button.
7. The system presents a screen for selecting the landing zone to deploy the department.
8. The administrator selects a specific landing zone and clicks on the "Next" button.
9. The system fetches the accounts associated with the chosen landing zone and presents them to the administrator.
10. The administrator can include associated LZ accounts and select the desired account(s) for the department.
11. The administrator clicks on the "Next" button to proceed.
12. The system confirms the selected account and presents a summary of the department creation details.
13. The administrator verifies the information and clicks on the "Next" button to finalize the department creation process.
14. The system creates the department, assigns the selected account(s), and displays a success message.

## Alternate Flow

- If at any step the administrator decides to go back, they can click on the "Previous" button to navigate to the previous screen and make changes as needed.
- If there are errors or missing information during any step, the system prompts the administrator to correct the issues before proceeding.

---

# Use Case: Adding a Product

## Use Case Description

This use case outlines the process for a user to add a product to a created department within the microservices monitoring tool.

## Trigger

The trigger for this use case is the need to add a new product to an existing department within the organization.

## Primary Actors

- User: Responsible for initiating the process and providing necessary information for adding a product to a department.

## Precondition

The user must be authenticated and have appropriate permissions to add a product to the selected department.

## Postcondition

The new product is successfully added to the selected department with all relevant configurations and services.

## Normal Flow

1. The user logs into the microservices monitoring tool and navigates to the dashboard.
2. The user selects the previously created department from the list of available options.
3. The system displays the options for the selected department, including the ability to add a new product.
4. The user clicks on the option to add a product, triggering the product addition process.
5. The system presents a screen with a field to input the name of the product and options to choose the deployment environment (Development, Test, Stage, Production).
6. After selecting the deployment environment, the system presents options for the product category: 3 Tier and SOA.
7. If the user selects the SOA option, the system displays a field to set the module name.
8. The user fills in the required information and clicks on the "Next" button to proceed.
9. The system presents a screen with options to add services for the product: Business Service and Common Service.
10. The user clicks on the "Add" button for the Business Service.
11. The system displays a screen to set the module, showing options to select the App Service from the given options.
12. The user selects a specific App Service and clicks on the "Next" button.
13. The system prompts the user to select the "Deployed to Service" and displays instances of the selected service.
14. The user selects the desired instance, and the system shows the details of that instance, including service name, port details, and department.
15. The "Save" button is activated, and the user clicks on it to save the configuration.
16. The procedure repeats for the Data Service, and then for Other Services.
17. Once all services are added, the system confirms the successful addition of the product to the department.

## Alternate Flow

- If at any step the user decides to cancel the process, they can click on the "Cancel" button to abort the product addition process.
- If there are errors or missing information during any step, the system prompts the user to correct the issues before proceeding.
