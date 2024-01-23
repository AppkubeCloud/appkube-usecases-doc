| | | | |
|-|-|-|-|
|Change Password| | | |
|Test case: Change Password with valid data| | | |
|Step|Action|Excepted result|Actual result|
|1 login the application with user name and password                                                             2 Click on continue button                                                              3 Click on setting|1 Click on current password  Enter the valid current password                 |1The system should accept the new password|1The system displays a success message: "Password successfully changed."|
|2 Default page open account feature then you will get change password format|2 Enter New password above  the instrections|2 A success message or confirmation should be displayed, indicating that the password has been changed|2 The user is redirected to the home page.|
|3 Change password format you will get three option curren password , New password confirm password.|3 Enter confirm password enter the same password new password|3 The user should be redirected to the home page or a success confirmation page.|4 The system should accept the new password|
|4  In format four Instructions is there between 8 to 20 character 1 lowercase latter 1upper case latter 1 special character|4 Click on submit new password butten|4 The user should be able to log in using the new password.|3 The user can log in using the new password without any issues.|
|               | | | |
|Test case :Change Password with invalid (current password)| | | |
|Step|Action|Excepted result|Actual result|
| 1 Login the application with user name and passwors                                                              2 Click on continue button                                    3 Click on setting|1 Log in to the application using your current credentials|                         |1 After entering an incorrect current password and clicking on the "Change Password" button, |
|2 Default page open account feature then you will get change password format|2 Navigate to the "Change Password" section.|2 An error message should be displayed, indicating that the current password is incorrect.|2 The system displays a prominent error message: "Invalid current password. Please enter the correct current password."|
|3 Change password format you will get three option curren password , New password confirm password.|3 Enter an incorrect current password, a new password, and confirm the new password|3  The user should not be allowed to proceed with the password change until the correct current password is provided|3 The system does not proceed with the password change process|
|4  In format four Instructions is there between 8 to 20 character 1 lowercase latter 1upper case latter 1 special character|4 Click on the "Change Password" button|4 The user should not be allowed to proceed with the password change|4 There is no change in the user's account information or password.|
| | | | |
|Test case: Change Password with invalid(New password)| | | |
|Step|Action|Excepted result|Actual result|
| 1 login the application with user name and passwors 2 click on continue button  3 click on setting|1 Log in to the application using your New password credentials|1The system should not accept the password change.|1 An error message should be displayed, indicating that the new password entered is invalid.|
|2 default page open account feature then you will get change password format|2Navigate to the "Change Password" section.|2 An error message should be displayed, indicating that the new password entered is invalid.|2The system should not accept the password change.|
|3 change password format you will get three option curren password , New password confirm password.|3 Enter an incorrect New password, a new password, and confirm the new password|3The error message should be clear, concise, and provide guidance on the password requirements|3 message will be display (please enter strong password)|
|4  In format four Instructions is there between 8 to 20 character 1 lowercase latter 1upper case latter 1 special character|4Click on the "Change Password" button |4 message will be display (please enter strong password)|4 click on submit button instructoin message display  |
| | | | |
|Test case: Change Password with invalid (confirm password)| | | |
|Step|Action|Excepted result|Actual result|
| 1 login the application with user name and passwors 2 click on continue button  3 click on setting|1 Enter the correct current password.|1 The system should not accept the password change.|1After entering an incorrect confirm password and clicking on the "Change Password" button, |
|2 default page open account feature then you will get change password format|2 Enter a valid new password in the "New Password" field.|2 An error message should be displayed, indicating that the confirmation password does not match the new password.|2 The system displays a prominent error message: "Invalid confirm password. Please enter the correct confirm  password."|
|3 change password format you will get three option curren password , New password confirm password.|3 Enter a different or invalid value in the "Confirm Password" field.|3 The error message should be clear, concise, and guide the user to ensure the confirmation password matches the new password.|3The system does not proceed with the password change process|
|4  In format four Instructions is there between 8 to 20 character 1 lowercase latter 1upper case latter 1 special character|4 Click on the "Change Password" button.|4 The system should not proceed with the password change process until a matching confirm password is provided.|4There is no change                                             message is display on confirm password                                                 New password and confirm password should be matched|
