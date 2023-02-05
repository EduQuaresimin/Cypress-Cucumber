import { Given, When } from '@badeball/cypress-cucumber-preprocessor'

Given('I navigate to the WebdriverUniversity homepage', () => {
  cy.visit('/')
})

When('I click on the contact us button', () => {
  cy.get('#contact-us')
    .invoke('removeAttr', 'target')
    .click()
})