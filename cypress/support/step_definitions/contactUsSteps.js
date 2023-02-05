import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker'

When('I type a First Name', () => {
  cy.get('[placeholder="First Name"]')
    .type(faker.name.firstName())
})

When('I type a Last Name', () => {
  cy.get('[placeholder="Last Name"]')
    .type(faker.name.lastName())
})

When('I enter an email address', () => {
  cy.get('[placeholder="Email Address"]')
    .type(faker.internet.email())
})

When('I type a comment', () => {
  cy.get('[placeholder="Comments"]')
    .type(faker.random.words(5))
})

When('I click on the submit button', () => {
  cy.contains('SUBMIT')
    .click()
})

Then('I should be presented with a successfull contact us submission message', () => {
  cy.url().should('be.eq', `${Cypress.config('baseUrl')}/Contact-Us/contact-form-thank-you.html`)
})

Then('I should be presented with a unsuccessfull contact us submission message', () => {
  cy.contains('Error: Invalid email address')
})

When('I type a specific First Name {string}', (firstName) => {
  cy.get('[placeholder="First Name"]')
    .type(firstName)
})

When('I type a specific Last Name {string}', (lastName) => {
  cy.get('[placeholder="Last Name"]')
    .type(lastName)
})

When('I enter a specific email address {string}', (email) => {
  cy.get('[placeholder="Email Address"]')
    .type(email)
})

When('I type a specific phrase {string} and number - {int} - to the comment field', (phrase, number) => {
  cy.get('[placeholder="Comments"]')
    .type(phrase + ' ' + number)
})
