import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker'
import contactUsPO from '../page_objects/contactUsPO'

const contactUsPage = new contactUsPO()

Given('I navigate to the WebdriverUniversity Contact Us page', () => {
  contactUsPage.navigateToContactUsPage()
})

When('I type a First Name', () => {
  cy.get('[placeholder="First Name"]')
    .type(faker.name.firstName())
})

When('I type a Last Name', () => {
  cy.get('[placeholder="Last Name"]')
    .type(faker.name.lastName())
})

When('I enter an email address', () => {
  cy.get('[placeholder="Email Address"]')
    .type(faker.internet.email())
})

When('I type a comment', () => {
  cy.get('[placeholder="Comments"]')
    .type(faker.random.words(5))
})

Then('I should be presented with a successfull contact us submission message', () => {
  cy.url()
    .should('be.eq', `${Cypress.config('baseUrl')}/Contact-Us/contact-form-thank-you.html`)
  cy.contains('Thank You for your Message!')
    .should('be.visible')
})

Then('I should be presented with a unsuccessfull contact us submission message', () => {
  cy.contains('Error: Invalid email address')
})

When('I type a specific First Name {string}', (firstName) => {
  contactUsPage.typeFirstName(firstName)
})

When('I type a specific Last Name {string}', (lastName) => {
  contactUsPage.typeLastName(lastName)
})

When('I enter a specific email address {string}', (email) => {
  contactUsPage.typeEmailAdress(email)
})

When('I type a specific phrase {string} and number - {int} - to the comment field', (phrase, number) => {
  cy.get('[placeholder="Comments"]')
    .type(phrase + ' ' + number)
})

When('I type a First Name {word} and I type a Last Name {string}', (firstName, lastName) => {
  contactUsPage.typeFirstName(firstName)
  contactUsPage.typeLastName(lastName)
})

When('I type an {string} and a comment {string}', (email, comment) => {
  contactUsPage.typeEmailAdress(email)
  contactUsPage.typeComment(comment)
})

When('I click on the submit button', () => {
  contactUsPage.clickOnSubmit()
})

Then('I should be presented with header text {string}', (message) => {
  cy.contains(message)
    .should('be.visible')
})

