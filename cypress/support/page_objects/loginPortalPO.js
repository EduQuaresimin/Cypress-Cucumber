import basePO from './basePO'

class loginPO extends basePO {
  navigateToLoginPage() {
    super.navigate('/Login-Portal/index.html')
  }
  typeCredentials(username, password) {
    cy.get('[placeholder="Username"]')
      .type(username)
    cy.get('[placeholder="Password"]')
      .type(password)
  }
  clickOnLoginButton() {
    cy.get('#login-button')
      .click()
  }
}
export default loginPO