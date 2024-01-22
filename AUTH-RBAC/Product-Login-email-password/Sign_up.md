# User Sign-Up Use Case

## Actors:
- User
- System

## Use Case Description:
This use case outlines the process a user undergoes to sign up for the application and, if needed, register a company.

## Triggers:
The user intends to create a new account.

## Pre-conditions:
- The user does not have an existing account.
- The system is operational.

## Post-conditions:
The user account is created, and if applicable, company registration is initiated.

## Normal Flow:

1. The user opens the application.
2. The system presents the Sign-Up screen, displaying the following mandatory fields:
   - Full Name
   - Username
   - Email
   - Password

3. User enters the required information into the fields.
4. User clicks the "Create Account" button.
5. The system validates the entered information.
6. If the information is valid, the system creates a user account.
7. The system redirects the user to the Company Registration screen.
8. On the Company Registration screen, the user sees:
   - An option to upload the company logo.
   - An input field for the company name.
9. User uploads the company logo and enters the company name.
10. User clicks the "Next" button.

## Alternative Flow (Existing Company Registration):

- If the entered company name is already registered:
  1. The system displays a popup indicating that the company is already registered with another user as the administrator.
  2. User sees an input field to enter an email address for admin approval.
  3. User enters the email address and clicks "Submit."
  4. The system sends a request to the admin for approval.
  5. Post-conditions depend on admin approval, which may involve the user gaining access upon approval.

## Alternative Flow (Return to Sign-In):

- If the user already has an account and clicks on the "Sign-In" button:
  1. The system redirects the user to the Sign-In screen.
  2. The user can log in using their existing credentials.

## Post-conditions (Company Registration):
If the company registration is successful and admin approval is not required, the user gains access to the application. If admin approval is needed, access is granted upon approval.
