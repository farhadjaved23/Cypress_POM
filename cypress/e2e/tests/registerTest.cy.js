import { registerPage } from "../../pages/registerPage"
import { accountPage } from "../../pages/accountPage"
import { getRandfrom1To100 }  from "../../support/utils"
import registerData from "../../fixtures/registerData.json"
import message from "../../fixtures/messages.json"

const registerObj = new registerPage()
const accountObj = new accountPage()

describe ('Test Automation', () =>{

    it('Successful Register Flow', () => {
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(`megatester${getRandfrom1To100()}@mailinator.com`)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.enterConfirmPwd(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickContinue()

        accountObj.assertAccountMessage(message.errorMessages.accountCreationMsg)
    })

    it('Register with same Email Flow', () => {
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterSameEmail(registerData.loginData.emailAddress)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.enterConfirmPwd(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickContinue()
        registerObj.assertSameEmailMsg(message.errorMessages.alreadyRegisteredMsg)
    })
})