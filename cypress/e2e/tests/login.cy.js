import { loginPage } from "../../pages/loginPage"
import { accountPage } from "../../pages/accountPage"
import registerData from "../../fixtures/registerData.json"
import message from "../../fixtures/messages.json"

const loginObj = new loginPage()
const accountObj = new accountPage()

describe ('Test Automation', () =>{
    it('Verify the LoggedIn user', () => {
        loginObj.openURL()
        loginObj.enterEmail(registerData.loginData.emailAddress)
        loginObj.enterPassword(registerData.loginData.password)
        loginObj.submitLoginBtn()
        
        accountObj.selectAccountPage()
        accountObj.assertEmail(registerData.loginData.emailAddress)
    })

    it('Verify the wrong password scenario', () => {
        loginObj.openURL()
        loginObj.enterEmail(registerData.loginData.emailAddress)
        loginObj.enterPassword(registerData.loginData.wrongPassword)
        loginObj.submitLoginBtn()
        loginObj.assertErrorMessage(message.errorMessages.wrongPwdMsg)   
    })
})