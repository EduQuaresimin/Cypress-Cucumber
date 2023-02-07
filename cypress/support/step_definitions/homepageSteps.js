import { Given, When } from '@badeball/cypress-cucumber-preprocessor'

Given('I navigate to the WebdriverUniversity homepage', () => {
  cy.visit('/')
})

When('I click on the Contact Us button', () => {
  cy.get('#contact-us')
    .invoke('removeAttr', 'target')
    .click()
})

When('I click on the Login Portal button', () => {
  cy.get('#login-portal')
    .invoke('removeAttr', 'target')
    .click()
})