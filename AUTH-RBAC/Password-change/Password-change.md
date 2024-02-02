# Password Change Use Case

## Actors:
- User
- System

## Use Case Description:
This use case outlines the process a user undergoes to change their password within the application.

## Triggers:
The user intends to change their password.

## Pre-conditions:
- The user is logged into the application.
- The system is operational.

## Post-conditions:
The user's password is successfully changed, and the user is automatically signed out.

## Normal Flow:

1. The user is logged into the application.
2. The user navigates to the Change Password screen.
3. The system presents the Change Password screen, displaying the following fields:
   - Current Password
   - New Password
   - Confirm New Password
4. User enters their current password in the "Current Password" field.
5. User enters a new password in the "New Password" field.
6. The system validates the new password against the following conditions:
   - Should be between 12 and 22 characters.
   - Must include 2 lowercase letters.
   - Must include 2 uppercase letters.
   - Must include 1 special character.
   - Should not repeat from the last three passwords.
7. If the new password meets the conditions, the user enters the same password in the "Confirm New Password" field.
8. User clicks the "Submit" button.
9. The system updates the user's password, ensuring it complies with the specified conditions.
10. The system signs the user out automatically.

## Alternative Flow (Password Validation Failure):
- If the new password does not meet the specified conditions:
  1. The system provides error messages indicating the specific conditions not met.
  2. The user adjusts the new password accordingly.
  3. Steps 6 to 9 are repeated.

## Alternative Flow (Cancel Password Change):
- If the user decides not to change the password:
  1. User clicks on a "Cancel" or "Go Back" option.
  2. The system does not make any changes to the user's password.
  3. The user remains logged in.

## Post-conditions:
- If the new password is successfully validated and updated, the user is signed out. The user must log in again using the new password for further access to the application.
