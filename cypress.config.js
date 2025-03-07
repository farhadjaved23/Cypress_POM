const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    env:{
      login: {
        URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
      },
      main:{
        URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
      },
      cart: {
        URL: 'https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart'
      }
    },
   
  },
});
