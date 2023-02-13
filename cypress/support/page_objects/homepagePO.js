import basePO from './basePO'

class homepagePO extends basePO {
  navigateToHome() {
    super.navigate('')
  }

  clickOnContactUs() {
    cy.clickOnLink('#contact-us')
  }

  clickOnLoginPortal() {
    cy.clickOnLink('#login-portal')
  }
}
export default homepagePO