import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

let stub

When('I enter a {word} and I type a {word}', (username, password) => {
  cy.get('[placeholder="Username"]')
    .type(username)
  cy.get('[placeholder="Password"]')
    .type(password)
})

When('I click on the Login button', () => {
  stub = cy.stub()
  cy.on('window:alert', stub)
  cy.get('#login-button')
    .click()
})

Then('I should be presented with an alert box which contains a validation {string}', (message) => {
  expect(stub).to.have.been.calledWith(message)
})