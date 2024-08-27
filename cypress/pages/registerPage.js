export class registerPage {

    weblocators = {

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        confirmPwd: '#input-confirm',
        policyCheckbox: '#content > form > div > div > input[type=checkbox]:nth-child(2)',
        continue: '#content > form > div > div > input.btn.btn-primary',
        accountMessage: '#content > h1',
        errorMessage: '#account-register > div.alert.alert-danger.alert-dismissible'
    }

    openURL(){
        cy.visit(Cypress.env('main').URL)
    }
    enterFirstName(fName)
    {
        cy.get(this.weblocators.firstName).type(fName)
    }
    enterLastName(lName)
    {
        cy.get(this.weblocators.lastName).type(lName)
    }
    enterEmail(email)
    {
        cy.get(this.weblocators.email).type(email)
    }
    enterSameEmail(email)
    {
        cy.get(this.weblocators.email).type(email)
    }
    enterTelephone(telephone)
    {
        cy.get(this.weblocators.telephone).type(telephone)
    }
    enterPassword(password)
    {
        cy.get(this.weblocators.password).type(password)
    }
    enterConfirmPwd(confirmPwd)
    {
        cy.get(this.weblocators.confirmPwd).type(confirmPwd)
    }
    selectCheckbox()
    {
        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickContinue()
    {
        cy.get(this.weblocators.continue).click()
    }
    assertAccountMessage(creationMsg)
    {
        cy.get(this.weblocators.accountMessage).invoke('text')
        .then((text) =>{
            expect(text).to.eq(creationMsg)
        })
    }
    assertSameEmailMsg(errorMsg)
    {
        cy.get(this.weblocators.errorMessage).invoke('text')
        .then((text) =>{
            expect(text).to.eq(errorMsg)
        })
    }

}