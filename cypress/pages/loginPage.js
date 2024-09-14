export class loginPage {

    weblocators = {

        emailField: 'input[name="email"]',
        passwordField: 'input[name="password"]',
        loginBtn: 'input[value="Login"]',
        errorMsg: '#account-login > div.alert.alert-danger.alert-dismissible'
    }

    openURL(){
        cy.visit(Cypress.env('login').URL);
    }
    enterEmail(email)
    {
        cy.get(this.weblocators.emailField).type(email)
    }
    enterPassword(password)
    {
        cy.get(this.weblocators.passwordField).type(password)
    }
    submitLoginBtn()
    {
        cy.get(this.weblocators.loginBtn).click()
    }
    assertWrongPwd(accEmail)
    {
        cy.assertAttValue(this.weblocators.accountEmailField,accEmail)
    }
    assertErrorMessage(errorMsg)
    {
        cy.get(this.weblocators.errorMsg).invoke('text')
        .then(expectedError => {
            expect(expectedError).to.eq(errorMsg)
        })
    }

}