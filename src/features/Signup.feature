@signup
Feature: Signup functionality

    @signup_with_valid_details
    Scenario: Verify signup with valid details
        Given user launch browser with url
        When user click on signin link
        And user click on dont have account link
        And user enter name as "harrytest3" and email as "harrytest3@gmail.com"
        And user enter password as "Test@1234" and confirm password as "Test@1234"
        And user click on signup button
        Then user should navigate to my account page "My account"

    @signup_with_invalid_details
    Scenario: verify creating account with invalid details
        Given user launch browser with url
        When user click on signin link
        And user click on dont have account link
        And user enter name as "harrytest3" and email as "harrytest3"
        And user enter password as "Test@1234" and confirm password as "Test@1234"
        And user click on signup button
        Then shows error msg as "Login must be a valid email address"
    