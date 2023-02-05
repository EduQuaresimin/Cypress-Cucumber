Feature: WebdriverUniversity - Contact Us Page

    Scenario: Valid contact us form submission
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button
        And I type a First Name
        And I type a Last Name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successfull contact us submission message

    Scenario: Invalid contact us form submission - Email
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button
        And I type a First Name
        And I type a Last Name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessfull contact us submission message
@focus 
    Scenario: Valid contact us form submission - Specific Data
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button
        And I type a specific First Name "Mariana"
        And I type a specific Last Name "Eccher"
        And I enter a specific email address "marianaeccher@mariana.com"
        And I type a specific phrase "Hello world!" and number - 123456789 - to the comment field
        And I click on the submit button
        Then I should be presented with a successfull contact us submission message