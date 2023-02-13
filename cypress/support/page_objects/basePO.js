/// <reference types="cypress" />

class basePO {

  navigate(path) {
    cy.visit('/' + path)
  }

  getPageTitle() {
    return cy.title()
  }
}
export default basePO