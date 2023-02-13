@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

    Background: Pre conditions
        Given I navigate to the WebdriverUniversity Contact Us page

    Scenario: Valid contact us form submission
        And I type a First Name
        And I type a Last Name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successfull contact us submission message

    Scenario: Invalid contact us form submission - Email
        And I type a First Name
        And I type a Last Name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessfull contact us submission message

    Scenario: Valid contact us form submission - Specific Data
        And I type a specific First Name "Mariana"
        And I type a specific Last Name "Eccher"
        And I enter a specific email address "marianaeccher@mariana.com"
        And I type a specific phrase "Hello world!" and number - 123456789 - to the comment field
        And I click on the submit button
        Then I should be presented with a successfull contact us submission message

    @smoke
    Scenario Outline: Validade contact us page
        And I type a First Name <firstName> and I type a Last Name '<lastName>'
        And I type an '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName   | emailAddress                | comment             | message                      |
            | Eduardo   | Quaresimin | eduardoquaresimin@gmail.com | Lets play Dofus!    | Thank You for your Message!  |
            | Lucinha   | Pereira    | lucinha_eccher              | I want cake         | Error: Invalid email address |
