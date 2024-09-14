import { registerPage } from "../../pages/registerPage"
import { productPage } from "../../pages/productPage"
import { loginPage } from "../../pages/loginPage"
import { cartPage } from "../../pages/cartPage"
import { compareProdPage } from "../../pages/compareProdPage"
import { searchProdPage } from "../../pages/searchProdPage"
import registerData from "../../fixtures/registerData.json"

const registerObj = new registerPage()
const searchObj = new searchProdPage()
const productObj = new productPage()
const compareProdObj = new compareProdPage()
const cartObj = new cartPage()
const loginObj = new loginPage()

describe ('Test Automation', () =>{
    it('Verify the searched text', () => {
        registerObj.openURL()

        searchObj.enterProduct(registerData.searchProduct+"{enter}")

        productObj.assertSearchedText(registerData.searchProduct)
    })

    it('Verify the random selected currency', () => {
        registerObj.openURL()

        searchObj.enterProduct(registerData.searchProduct+"{enter}")
        
        productObj.assertCurrency()
    })

    it('Verify the count of the products after searching', () => {
        registerObj.openURL()

        searchObj.enterProduct(registerData.searchProduct+"{enter}")
        
        productObj.getCardCount()
    })

    it('Verify the comparison of the products', () => {
        registerObj.openURL()

        searchObj.enterProduct(registerData.searchProduct+"{enter}")
        
        productObj.clickRandCompareBtn()
        productObj.clickRandCompareBtn2()
        productObj.clickCompareLink()
        
        compareProdObj.assertComparedProd()
    })

    it('Verify the comparison of the products', () => {
        registerObj.openURL()

        searchObj.enterProduct(registerData.searchProduct+"{enter}")
        
        productObj.clickRandCompareBtn()
        productObj.clickRandCompareBtn2()
        productObj.clickCompareLink()
        
        cartObj.addToCartProd()
        cartObj.clickCart()
        cartObj.clickViewCart()
        cartObj.assertCartProd()
    })

    it('Verify the comparison of the products', () => {
            registerObj.openURL()

            searchObj.clickPhone()

            productObj.clickCart1()
            productObj.clickCart2()
            
            cartObj.clickCart()
            cartObj.clickViewCart()
            cartObj.assertTotalPrice()      
        })

    it('Verify the comparison of the products', () => {
        registerObj.openURL()
        
        productObj.checkText() 
    })

    it('Verify the asterisk products', () => {
        loginObj.openURL()

        loginObj.enterEmail(registerData.loginData.emailAddress)
        loginObj.enterPassword(registerData.loginData.password)
        loginObj.submitLoginBtn()

        searchObj.enterProduct(registerData.searchProduct2+"{enter}")
        searchObj.clickAddtoCardIcon()
        searchObj.clickMobileMenu()
        searchObj.clickCartBtn()

        cartObj.getCartText()
    })

})