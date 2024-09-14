export class accountPage {  
    weblocators = {

        accountLink: '#content > ul:nth-child(2) > li:nth-child(1) > a',
        accountEmailField: '#input-email',
        accountMessage: '#content > h1',
    }

    selectAccountPage()
    {
        cy.get(this.weblocators.accountLink).click()
    }
    assertEmail(accEmail)
    {
        cy.assertAttValue(this.weblocators.accountEmailField,accEmail)
    }
    assertAccountMessage(creationMsg)
    {
        cy.get(this.weblocators.accountMessage)
        .invoke('text')
        .then((text) =>{
            expect(text).to.eq(creationMsg)
        })
    }
}