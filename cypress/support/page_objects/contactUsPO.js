import basePO from './basePO'

class contactUsPO extends basePO {
  navigateToContactUsPage() {
    super.navigate('/Contact-Us/contactus.html')
  }
  typeFirstName(firstName) {
    cy.get('[placeholder="First Name"]')
      .type(firstName)
  }
  typeLastName(lastName) {
    cy.get('[placeholder="Last Name"]')
      .type(lastName)
  }
  typeEmailAdress(email) {
    cy.get('[placeholder="Email Address"]')
      .type(email)
  }
  typeComment(comment) {
    cy.get('[placeholder="Comments"]')
      .type(comment)
  }
  clickOnSubmit() {
    cy.contains('SUBMIT')
      .click()
  }
}
export default contactUsPO