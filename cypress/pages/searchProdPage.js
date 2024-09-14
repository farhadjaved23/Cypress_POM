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
        cartIcon: '#content > div:nth-child(8) > div:nth-child(1) > div > div:nth-child(2) > div.button-group > button:nth-child(1)',
        menuBar: '#menu > div.collapse.navbar-collapse.navbar-ex1-collapse',
        cartBtn: '#content > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > div.button-group > button:nth-child(1)',
        componentsMenu: '#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(3) > a',
        componentsSubMenu: '#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li.dropdown.open > div > div > ul'
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
    clickAddtoCardIcon()
    {
        cy.get(this.weblocators.cartIcon).click()
    }
    clickMobileMenu()
    {
        cy.get(this.weblocators.menuBar).contains('Phones & PDAs')
        .click()
    }
    clickCartBtn()
    {
        cy.get(this.weblocators.cartBtn).click()
    }
    clickComponentsManuBar()
    {
        cy.get(this.weblocators.componentsMenu).click()
    }
    getComponentsText()
    {
        const products = []
        cy.get(this.weblocators.componentsSubMenu).find('li').each(($row,) => {
            const cellText = $row.text().trim();
            products.push(cellText)
        })
        .then(() => {
            products.forEach(function(product)
            {
               if(product.includes('2'))
               {
                cy.get(`#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li.dropdown.open > div > div > ul > li`)
                .contains(product)
                .click()
               }
            })
        })
    }
    assertProductCount()
    {
        var count = 0
        cy.get('#content > div:nth-child(5) > div').each(($col) =>{
            count++
        }).then(() =>{
            expect(count).to.eql(2)
        })
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




