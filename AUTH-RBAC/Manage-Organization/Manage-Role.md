# Use Case: Manage Roles

## Actors:
- **Admin:** The system administrator responsible for managing roles and access control.

## Triggers:
- Admin logs into the RBAC Module.

## Preconditions:
- The system is operational.
- Admin is authenticated and has access to the RBAC Module.
- The Role Screen is loaded.

## Postconditions:
- The role-related information is updated based on the admin's actions.

## Normal Flow:

### View Role Screen:
1. Admin logs into the RBAC Module.
2. System displays the Role Screen with widgets showing Role Count, Group Count, User Count, Policy Count, and Permission Count.

### Create New Role:
1. Admin clicks on the "Create New Role" button.
2. System displays a popup with a form for adding a new role.
3. Admin provides Role Name, Role Description, and selects policies from the dropdown.
   ![Image](./assets/create%20role%20button.png)
4. Admin clicks "Create" to add the new role.
   ![Image](./assets/add%20new%20role.png)
5. System updates the Role Screen with the new role information.
6. If canceled, the admin lands back on the Role Screen.

### Search Roles:
1. Admin uses the generic search to find specific roles.
![Image](./assets/Search%20Role.png)
2. System filters and displays relevant roles based on the search criteria.

### View Role Details:
1. Admin clicks on a specific role in the Role Screen.
![Image](./assets/view%20policy.png)
2. System redirects to the Role Overview Screen for the selected role.

### Manage Role Policies:
1. In the Role Overview Screen, admin views the Role Description and the allowed policy set table.
2. Admin clicks "Add Policy" button.
![Image](./assets/add%20policy.png)
3. System displays a popup with available policies, and admin can use a search box to find specific policies.
4. Admin selects one or more policies and clicks "Add Policy" to associate them with the role.
![Image](./assets/Policy%20Popup.png)
5. System updates the Role Overview Screen with the added policies.

### Delete Role Policy:
1. In the Role Overview Screen, admin clicks "Delete Policy" button.
![Image](./assets/Delete%20Policy.png)
2. System allows admin to select and detach policies from the role.
3. Default policies created by the system cannot be deleted.
4. System updates the Role Overview Screen after policy detachment.

## Alternative Flows:
- If there are no existing roles, the Role Screen may prompt the admin to create a new role.
- If the admin provides incomplete information while creating a role, the system prompts for required details.
- If the admin attempts to delete default policies, the system displays an error message.
- If the search yields no results, the system informs the admin and suggests refining the search criteria.

This use case outlines the step-by-step process for managing roles, policies, and permissions in the RBAC Module.
