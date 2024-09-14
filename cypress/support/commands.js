// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('shouldBeVisible', (selector) => {
    cy.get(selector).should('be.visible');
  });

Cypress.Commands.add('shouldBeVisibleForElements', (selector) => {
    cy.get(selector).each(($el) => {
             cy.wrap($el).should('be.visible')
    })
  });

  Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
    cy.get(selector, { timeout }).should('be.visible');
  });

  Cypress.Commands.add('assertAttValue', (selector, accEmail) => {
    cy.get(selector).invoke('attr','value')
    .then(expectedEmail => {
        expect(expectedEmail).to.eq(accEmail)
    })
  });

import 'cypress-file-upload';