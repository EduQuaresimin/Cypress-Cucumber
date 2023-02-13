import { After, Before, When } from '@badeball/cypress-cucumber-preprocessor'

Before(() => {
  cy.log('Executes before each Scenario/Test.')
  cy.clearAllLocalStorage()
})

Before({ tags: '@smoke' }, () => {
  cy.log('Executes before smoke tests')
})

After(() => {
  cy.log('Executes after each Scenario/Test.')
})

When('I wait {int} seconds', (seconds) => {
  cy.wait(seconds * 1000)
})