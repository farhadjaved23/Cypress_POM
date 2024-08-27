export class loginPage {

    weblocators = {

        emailField: 'input[name="email"]',
        passwordField: 'input[name="password"]',
        loginBtn: 'input[value="Login"]',
        accountLink: '#content > ul:nth-child(2) > li:nth-child(1) > a',
        accountEmailField: '#input-email',
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
    selectAccountPage()
    {
        cy.get(this.weblocators.accountLink).click()
    }
    assertEmail(accEmail)
    {
        cy.get(this.weblocators.accountEmailField).invoke('attr','value')
        .then(expectedEmail => {
            expect(expectedEmail).to.eq(accEmail)
        })
    }
    assertWrongPwd(accEmail)
    {
        cy.get(this.weblocators.accountEmailField).invoke('attr','value')
        .then(expectedEmail => {
            expect(expectedEmail).to.eq(accEmail)
        })
    }
    assertErrorMessage(errorMsg)
    {
        cy.get(this.weblocators.errorMsg).invoke('text')
        .then(expectedError => {
            expect(expectedError).to.eq(errorMsg)
        })
    }

}