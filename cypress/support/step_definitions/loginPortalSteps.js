import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'
import loginPO from '../page_objects/loginPortalPO'

let stub
const loginPage = new loginPO()

Given('I navigate to the WebdriverUniversity login page', () => {
  loginPage.navigateToLoginPage()
})
When('I enter a {word} and I type a {word}', (username, password) => {
  loginPage.typeCredentials(username, password)
})

When('I click on the Login button', () => {
  stub = cy.stub()
  cy.on('window:alert', stub)
  loginPage.clickOnLoginButton()
})

Then('I should be presented with an alert box which contains a validation {string}', (message) => {
  expect(stub).to.have.been.calledWith(message)
})