@login @regression
Feature: WebdriverUniversity - Login Portal Page

    Background: Pre conditions
        Given I navigate to the WebdriverUniversity homepage
        When I click on the Login Portal button

    @smoke
    Scenario Outline: Validade Login Portal Page
        And I enter a <username> and I type a <password>
        And I click on the Login button
        Then I should be presented with an alert box which contains a validation '<message>'

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver1   | validation failed    |