Cypress.Commands.add('clickOnLink', (selector) => {
  cy.get(selector)
    .invoke('removeAttr', 'target')
    .click()
})