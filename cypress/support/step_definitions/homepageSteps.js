import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import homepagePO from '../page_objects/homepagePO'

const homePage = new homepagePO()

Given('I navigate to the WebdriverUniversity homepage', () => {
  homePage.navigate('')
})

When('I click on the Contact Us button', () => {
  homePage.clickOnContactUs()
})

When('I click on the Login Portal button', () => {
  homePage.clickOnLoginPortal()
})