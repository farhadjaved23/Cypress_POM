import { registerPage } from "../../pages/registerPage"
import { getRandfrom1To100 }  from "../../support/utils"
import registerData from "../../fixtures/registerData.json"
import message from "../../fixtures/messages.json"

const registerObj = new registerPage()

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
        registerObj.assertAccountMessage(message.errorMessages.accountCreationMsg)
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