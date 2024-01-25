# Use Case: Manage Groups

## Actors:
- **Admin:** The system administrator responsible for managing groups and access control.

## Triggers:
- Admin logs into the RBAC Module.

## Preconditions:
- The system is operational.
- Admin is authenticated and has access to the RBAC Module.
- The Group Screen is loaded.

## Postconditions:
- The group-related information is updated based on the admin's actions.

## Normal Flow:

### 1. View Group Screen:
   - Admin logs into the RBAC Module.
   - System displays the Group Screen with default groups (for basic users and admins).

### 2. Create New Group:
   - Admin clicks on the "Create New Group" button.

   ![Image](./assets/Create%20Group.png)

   - System displays a Create Group screen with:
     - Group Name input field.
     - Group Description input field.
     - User table for selecting and searching users.
     - Role table for selecting roles.
   - Admin fills in the details and selects users and roles.
   - Admin clicks "Create Group" to add the new group.

     ![Image](./assets/Create%20group%20button.png)
   - If canceled, the admin is redirected to the Group Screen.

### 3. View Group Details:
   - Admin clicks on the "View" button for a specific group.

    ![Image](./assets/veiw%20group.png)

   - System redirects to the Overview Group page for the selected group.

### 4. Edit Group Details:
   - On the Overview Group page, admin clicks on the "Edit" button.

   ![Image](./assets/Edit%20group.png)

   - System allows the admin to edit the Group Name and Group Description.
   - Admin clicks "Save" to update the group details.

### 5. Delete Group:
   - On the Overview Group page, admin clicks on the "Delete" button.
   - If the group is created by the system, the system informs the admin it cannot be deleted.
   - If the group is created by the admin, the system prompts for confirmation.

     ![Image](./assets/Delete%20group.png)

   - If confirmed, the group is deleted; otherwise, the action is canceled.

### 6. Manage Users in Group:
   - On the Users tab, admin views the number of users in the group.
   - Admin clicks "Add Users" or "Remove Users" buttons.
   - System displays a popup with available users, and admin can add or remove users.

    ![Image](./assets/Remove-add%20in%20group.png)

### 7. Manage Roles in Group:
   - On the Roles tab, admin views the number of roles in the group.
   - Admin clicks "Add Roles" or "Remove Roles" buttons.
   - System displays a popup with available roles, and admin can add or remove roles.

   ![Image](./assets/Remove-add%20role%20in%20group.png)

### 8. Manage Allowed Permissions in Group:
   - On the Permissions tab, admin views the number of allowed permissions.
   - Admin can see a table with all allowed permissions.
   

    ![Image](./assets/Allowed%20permissions.png)

### 9. Manage Disallowed Permissions in Group:
   - On the Disallowed Permissions tab, admin views the number of disallowed permissions.
   - Admin can see a table with all disallowed permissions.

    ![Image](./assets/Disallowed%20Permissions.png)


## Alternative Flows:
- If there are no existing groups, the Group Screen may prompt the admin to create a new group.
- If the admin provides incomplete information while creating a group, the system prompts for required details.
- If the admin attempts to delete a system-created group, the system informs the admin it cannot be deleted.
- If the admin cancels the delete action, the system maintains the existing group.
- If the admin cancels the creation of a new group, the admin is redirected to the Group Screen without creating a new group.

This use case outlines the step-by-step process for managing groups, including creation, viewing, editing, and deletion, as well as managing users, roles, and permissions within a group in the RBAC Module.
