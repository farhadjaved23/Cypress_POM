import { registerPage } from "../../pages/registerPage"
import { searchProdPage } from "../../pages/searchProdPage"
import registerData from "../../fixtures/registerData.json"

const registerObj = new registerPage()
const searchObj = new searchProdPage()

describe ('Test Automation', () =>{
    // it('Verify the searched text', () => {
    //     registerObj.openURL()
    //     searchObj.enterProduct(registerData.searchProduct+"{enter}")
    //     searchObj.assertSearchedText(registerData.searchProduct)
    // })

    // it('Verify the random selected currency', () => {
    //     registerObj.openURL()
    //     searchObj.enterProduct(registerData.searchProduct+"{enter}")
    //     searchObj.assertCurrency()
    // })

    // it('Verify the count of the products after searching', () => {
    //     registerObj.openURL()
    //     searchObj.enterProduct(registerData.searchProduct+"{enter}")
    //     searchObj.getCardCount()
    // })

    // it('Verify the comparison of the products', () => {
    //     registerObj.openURL()
    //     searchObj.enterProduct(registerData.searchProduct+"{enter}")
    //     searchObj.clickRandCompareBtn()
    //     searchObj.clickRandCompareBtn2()
    //     searchObj.clickCompareLink()
    //     searchObj.assertComparedProd()
    // })

    it('Verify the comparison of the products', () => {
        registerObj.openURL()
        searchObj.enterProduct(registerData.searchProduct+"{enter}")
        searchObj.clickRandCompareBtn()
        searchObj.clickRandCompareBtn2()
        searchObj.clickCompareLink()
        searchObj.addToCartProd()
        searchObj.clickCart()
        searchObj.clickViewCart()
        searchObj.assertCartProd()
    })

    // it('Verify the comparison of the products', () => {
    //         registerObj.openURL()
    //         searchObj.clickPhone()
    //         searchObj.clickCart1()
    //         searchObj.clickCart2()
    //         searchObj.clickCart()
    //         searchObj.clickViewCart()
    //         searchObj.assertTotalPrice()
            
    //     })
    // it('Verify the comparison of the products', () => {
    //     registerObj.openURL()
    //     searchObj.checkText() 
    // })

})