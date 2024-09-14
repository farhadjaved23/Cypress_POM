import { expect } from "chai"
import { getRandNumber, getDate } from "../support/utils"
export class searchProdPage {
    weblocators = {

        searchBar: '#search > input',
        cart: '#content > div:nth-child(8) > div:nth-child(1)',
        cartProd: '#content > form > div > table > tbody',
        checkbox: '#input-option223 > div:nth-child(1) > label',
        textBox: '#input-option208',
        dropdown: '#input-option217',
        textArea: '#input-option209',
        menuBarPhone: '#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(6) > a',
        subTotal: '#content > div.row > div > table > tbody > tr:nth-child(4) > td:nth-child(2)',
        dateBtn: '#product > div:nth-child(11) > div > span > button',
        dateElement: 'body > div.bootstrap-datetimepicker-widget.usetwentyfour.dropdown-menu.picker-open.top.pull-right > ul > li.collapse.in > div > div.datepicker-days > table > tbody > tr:nth-child(4) > td:nth-child(7)',
        calenderPicker: 'body > div.bootstrap-datetimepicker-widget.usetwentyfour.dropdown-menu.picker-open.bottom.pull-right > ul > li.collapse.in > div > div.datepicker-days > table > tbody',
    }

    enterProduct(productName) {
        cy.get(this.weblocators.searchBar).type(productName)
    }
    clickAddToCartBtn() {
        cy.get(this.weblocators.addToCart).click()
    }
    clickDateBtn() {
        cy.get(this.weblocators.dateBtn).click()
    }
    clickPhone() {
        cy.get(this.weblocators.menuBarPhone).click()
    }
    clickCart1() {
        cy.get(this.weblocators.phoneCart).click()
    }
    clickCart2() {
        cy.get(this.weblocators.phoneCart2).click()
    }
    selectFormattedDate() {
        cy.log(`${month}/${day}/${year}`)
        cy.get(this.weblocators.dateBtn).click()
        cy.waitForElement(this.weblocators.calenderPicker)
        cy.get(this.weblocators.calenderPicker)
            .contains(this.getDate()).click()
    }
    assertdropdown()
    {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20')
        cy.get('#input-sort').each(text =>{
            cy.log(text.text())
            let result = text.text()
            let res 
            res = result.split(' ')
            cy.log(res.join(', '));
            if(text.text() == "Name (A - Z)")
            {
                cy.get('#input-sort').select(1)
            }
        })
    }
}




