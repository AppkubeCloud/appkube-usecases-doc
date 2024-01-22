# User Sign-In Use Case

## Actors:
- User
- System

## Use Case Description:
This use case describes the process a user undergoes to sign into the application using the Sign-In screen.

## Triggers:
The user opens the application to access its features.

## Pre-conditions:
- The user has a registered account.
- The system is operational.

## Post-conditions:
The user is successfully signed in and gains access to the application's features.

## Normal Flow:

1. The user opens the application.
2. The system presents the Sign-In screen, displaying the following elements:
   - Email input field
   - Password input field
   - Remember Me checkbox.
   - Forget Password link.
   - Sign In button
   - Sign Up Now button.

3. User enters their registered email address in the email input field.
4. User enters their password in the password input field.
5. Optionally, the user checks the "Remember Me" checkbox.
6. User clicks the "Sign In" button.
7. The system validates the entered credentials.
8. If the credentials are valid, the system grants access to the application, and the user is directed to the Authentication screen.
9. If the credentials are invalid, the system displays an error message and prompts the user to enter correct credentials.

## Alternative Flow (Forget Password):
- If the user forgets the password:
  1. User clicks on the "Forget Password" link.
  2. The system redirects the user to a password recovery screen.
  3. User enters the registered email address.
  4. The system sends a six-digit code to the user's email.
  5. User follows the link or enters the code to reset the password.

## Alternative Flow (Sign Up Now):
- If the user clicks on "Sign Up Now" button:
  - The system redirects the user to the Sign-Up screen.
  - User completes the Sign-Up process, providing necessary details.
  - Upon successful Sign-Up, the user is redirected back to the Sign-In screen.

## Alternative Flow (Authentication Screen):
- After successful Sign-In, the system prompts the user to enter a six-digit authentication code.
- The system sends a six-digit code to the user's Authenticator app.
- User enters the received code on the Authentication screen.
- If the code is correct, the user is authenticated, and the system grants access to the application.
- If the code is incorrect, the system prompts the user to re-enter the correct code or resend a new one.
