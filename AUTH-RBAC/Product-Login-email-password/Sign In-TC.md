| | | | |
|-|-|-|-|
|Sign In Test Case| | | |
|Test Case 1: Successful Sign In (Valid Data)| | | |
|Steps|Actions|Expected Result|Actual Result|
|Navigate to the AppKube sign-in page.|Enter a valid username and password.|User should be successfully logged in.|User is successfully logged in.|
|Enter a valid Username.|Optionally, select the "Remember me" checkbox.|User is redirected to the AppKube dashboard or the expected landing page.|Redirected to the AppKube dashboard or the expected landing page.|
|Enter a valid Password. |Click on the "Sign In" button again Click on the | | |
|Optionally, check the "Remember me" checkbox.| | | |
|Click on the "Sign In" button.| | | |
| | | | |
| | | | |
|Test Case 2: Sign In with Incorrect Username (Invalid Data)| | | |
|Steps|Actions|Expected Result|Actual Result|
|Navigate to the AppKube sign-in page. |Enter an incorrect username.|User should receive an error message indicating that the username is not recognized.|User receives the expected error message.|
|Enter an incorrect Username. |Enter a valid password.|User should not be allowed to proceed with the sign-in process.|User is prevented from proceeding with the sign-in using an incorrect username.|
|Enter a valid Password.|Click on the "Sign In" button.| | |
|Click on the "Sign In" button.| | | |
| | | | |
|Test Case 3: Sign In with Incorrect Password (Invalid Data)| | | |
|Steps|Actions|Expected Result|Actual Result|
|Navigate to the AppKube sign-in page.| | | |
|Enter a valid Username. |Enter a valid username.|User should receive an error message indicating that the password is incorrect.|User receives the expected error message.|
|Enter an incorrect Password.|Enter an incorrect password.|User should not be allowed to proceed with the sign-in process.|User is prevented from proceeding with the sign-in using an incorrect password.|
|Click on the "Sign In" button.|Click on the "Sign In" button.| | |
| | | | |
|Test Case 4: Sign In with Empty Fields (Invalid Data)| | | |
|Steps|Actions|Expected Result|Actual Result|
|Navigate to the AppKube sign-in page. | | |User receives the expected error message.|
|Leave the Username and Password fields empty|Leave both the username and password fields empty.|User should receive an error message indicating that both username and password are required.|User is prevented from proceeding with the sign-in with empty fields.|
|Click on the "Sign In" button.|Click on the "Sign In" button.|User should not be allowed to proceed with the sign-in process.| |
| | | | |
|TEST CASE FOR FORGOT PASSWORD WITH VALID CREDENTIALS| | | |
|Steps|Actions|ExpectedResult|ActualResult|
|Open the application and navigate to the login page.|Launch the application.|Login page is displayed.|Login page displayed successfully.|
|Click on the "Forgot Password" link.|Click on the "Forgot Password" link on the login page.|Navigates to the "Forgot Password" page.|"Forgot  Password" page displayed successfully.| ./
|Enter a valid username in the provided field|Enter a valid username in the designated field.|Username is entered successfully.|Valid username entered successfully.|
|Click on the "Reset your password" button|Click on the "Reset your password" button.|An OTP (One-Time Password) is sent to the registered email address.|Six digit code sent successfully.|
| Enter the correct six digit code in the designated field.|Enter the correct six digit code in the provided field.|Enter the correct six digit code in the designated field.|Correct six digit code entered successfully.|
|Enter a valid new password in the "New Password" field.|Enter a valid new password in the designated field.|New password is entered successfully.|New password set successfully.|
|Re-enter the new password in the "Re-enter Password" field.|Re-enter the new password in the designated field.|Password is re-entered successfully.|Password re-entered successfully.|
|Click on the "Confirm" button.|Click on the "Confirm" button to confirm the password reset.|Password reset is successful, and a confirmation message is displayed.|Password reset confirmed successfully.|
|Attempt to login using the updated password.|Logout and attempt to login using the updated password.|Successfully logs in with the new password.|Login successful with the updated password.|
|Logout and attempt to login using the old password.|Logout and attempt to login using the old password.|Unable to log in with the old password.|Unable to login as expected.|
| | | | |
|TESTCASES FOR  FORGOT PASSWORD WITH INVALID CREDENTIALS| | | |
|Steps|Actions|ExpectedResult|ActualResult|
|Enter an invalid username in the "Forgot Password" page.|Enter an invalid username in the designated field.|System displays an error message indicating that the username is not valid|Error message displayed for invalid username.|
|Click on the "Reset your password" button without entering a username.|Click on the "Reset your password" button without entering a username.|System displays an error message indicating that a username is required.|Error message displayed for missing username.|
|Enter a valid username but provide an incorrect six digit code.|Enter a valid username and provide an incorrect six digit code.|System displays an error message indicating that the six digit code is incorrect.|Error message displayed for incorrect six digit code.|
|Enter a valid username and six digit code, but provide an invalid new password (e.g., less than 6 characters).|Enter a valid username and six digit code, but provide an invalid new password.|System displays an error message indicating that the new password is not valid.|Error message displayed for invalid new password.|
|Enter a valid username, correct six digit code, and a new password, but provide a different password in the "Re-enter Password" field.|Enter a valid username, correct six digit code, and provide a different password in the "Re-enter Password" field.|System displays an error message indicating that the passwords do not match.|Error message displayed for mismatched passwords.|
|Click on the "Confirm" button without completing all the required fields.|Click on the "Confirm" button without completing all required fields.|System displays an error message indicating that all fields must be filled.|Error message displayed for incomplete fields.|
|Enter a valid username and correct six digit code but click on the "Confirm" button multiple times.|Enter a valid username and correct six digit code, then click on the "Confirm" button multiple times.|System handles multiple clicks gracefully and does not process duplicate requests.|System prevented duplicate processing.|
|Enter a valid username, correct six digit code, and a new password, but click on the "Confirm" button after the six digit code expiration time.|Enter a valid username, correct six digit code, and a new password, then click on the "Confirm" button after the OTP expiration time.|System displays an error message indicating that the six digit code has expired.|Error message displayed for expired six digit code.|
