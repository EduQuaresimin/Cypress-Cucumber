# Cypress-Cucumber
 Cypress with Cucumber BDD Course Repository

# Run specific tests in headed mode

yarn cypress run -e TAGS='@login' --headed
yarn cypress run -e TAGS='@contact-us' --headed
yarn cypress run -e TAGS='@smoke' --headed
yarn cypress run -e TAGS='@regression' --headed