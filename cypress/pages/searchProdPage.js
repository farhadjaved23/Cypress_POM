import { expect } from "chai"
import { getRandNumber } from "../support/utils"
export class searchProdPage {
    weblocators = {

        searchBar: '#search > input',
        searchedResult: '#content > div:nth-child(8) > div:nth-child(1) > div > div:nth-child(2) > div.caption > h4 > a',
        currencyBtn: '#form-currency > div > button',
        selectCurrency: `#form-currency > div > ul > li:nth-child(${getRandNumber(3,1)}) > button`,
        cardCurrency: '#content > div:nth-child(8) > div:nth-child(1) > div > div:nth-child(2) > div.caption > p.price',
        cart: '#content > div:nth-child(8) > div:nth-child(1)',
        compareBtn: `#content > div:nth-child(8) > div:nth-child(${getRandNumber(3,1)}) > div > div:nth-child(2) > div.button-group > button:nth-child(3)`,
        compareBtn2: `#content > div:nth-child(8) > div:nth-child(${getRandNumber(3,1) + 1}) > div > div:nth-child(2) > div.button-group > button:nth-child(3)`,
        compareLink: `#product-search > div.alert.alert-success.alert-dismissible > a:nth-child(3)`,
        cartBtn: '#cart > button',
        viewCard: '#cart > ul > li:nth-child(2) > div > p > a:nth-child(1) > strong',
        cartProd: '#content > form > div > table > tbody',
        checkbox: '#input-option223 > div:nth-child(1) > label',
        textBox: '#input-option208',
        dropdown: '#input-option217',
        textArea: '#input-option209',
        menuBarPhone: '#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(6) > a',
        phoneCart: '#content > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > div.button-group > button:nth-child(1)',
        phoneCart2: '#content > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2) > div.button-group > button:nth-child(1)',
        price1: '#content > form > div > table > tbody > tr:nth-child(1) > td:nth-child(6)',
        price2: '#content > form > div > table > tbody > tr:nth-child(2) > td:nth-child(6)',
        subTotal: '#content > div.row > div > table > tbody > tr:nth-child(4) > td:nth-child(2)',
        totalPriceText: '#content > div.row > div > table > tbody > tr:nth-child(4) > td:nth-child(2)',
        dateBtn: '#product > div:nth-child(11) > div > span > button',
        dateElement: 'body > div.bootstrap-datetimepicker-widget.usetwentyfour.dropdown-menu.picker-open.top.pull-right > ul > li.collapse.in > div > div.datepicker-days > table > tbody > tr:nth-child(4) > td:nth-child(7)'

    }

    enterProduct(productName) {
        cy.get(this.weblocators.searchBar).type(productName)
    }
    clickCart() {
        cy.get(this.weblocators.cartBtn).click()
    }
    clickAddToCartBtn() {
        cy.get(this.weblocators.addToCart).click()
    }
    clickCurrencyBtn() {
        cy.get(this.weblocators.currencyBtn).click()
    }
    selectCurrency() {
        cy.get(this.weblocators.selectCurrency).click()
    }
    clickRandCompareBtn() {
        cy.get(this.weblocators.compareBtn).click()
    }
    clickRandCompareBtn2() {
        cy.wait(2000)
        cy.get(this.weblocators.compareBtn2).click()
    }
    clickViewCart() {
        cy.get(this.weblocators.viewCard).click()
    }
    clickDateBtn() {
        cy.get(this.weblocators.dateBtn).click()
    }
    clickCompareLink() {
        cy.get(this.weblocators.compareLink).click()
    }
    assertSearchedText(actual) {
        cy.get(this.weblocators.searchedResult)
            .invoke('text')
            .then((text) => {
                let expectSearchText = text.substr(1)
                expect(expectSearchText).to.eq(actual)
            })
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
    getTotal() {
        return cy.get(this.weblocators.totalPriceText).invoke('text')
            .then(text => {
                return text
            })
    }
    assertTotalPrice() {
        cy.get(this.weblocators.price1).invoke('text')
            .then((text1) => {
                cy.get(this.weblocators.price2).invoke('text').then(text2 => {
                    const price1 = parseFloat(text1.substr(1)); // Extract the numeric part of the first price
                    const price2 = parseFloat(text2.substr(1));
                    const total = price1 + price2
                    this.getTotal().then((actualTotal) => {
                        // Compare the calculated total with the actual total
                        expect(total).to.eq(parseFloat(actualTotal.substr(1, 5)))
                    });
                })
            });
    }

    assertCartProd() {
        cy.get('#content > form > div > table > tbody')
            .should('be.visible')
    }
    assertComparedProd() {
        cy.get('#content > table > tbody:nth-child(2)').each(($el, index) => {
            cy.wrap($el).should('be.visible')
        })
    }
    addToCartProd() {
        for (let i = 2; i <= 3; i++) {
            cy.get(`#content > table > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(${i})`).invoke('text').then((text) => {
                cy.log(text)
                if (text == 'In Stock') {
                    cy.get(1000)
                    cy.get(`#content > table > tbody:nth-child(3) > tr > td:nth-child(${i}) > input`).click()
                    cy.log('BtnClick')
                }
            })
        }
    }
    assertCurrency() {
        var texxt = ''
        this.clickCurrencyBtn()
        cy.wait(2000)
        cy.get(this.weblocators.selectCurrency).invoke('text')
            .then(text => {
                texxt = text.substr(0, 1)
            })
        this.selectCurrency()
        cy.get(this.weblocators.cardCurrency).invoke('text')
            .then(text => {
                expect(texxt).to.eq(text.includes('€') ? text.trim().substr(5, 1) : text.trim().substr(0, 1));
            })
    }

    getCardCount() {
        var count = 0
        cy.get('#content > div.row').each(($el, index) => {
            cy.wrap($el).invoke('text').then(text => {
                cy.log(`Element ${index} text: ${text}`);
                count++;
                cy.log("Incremented count inside loop: " + count);

            });
        }).then(() => {
            cy.log("Final count after loop: " + count);
            const randomIndex = getRandNumber(3,1);
            cy.get(`#content > div.row > div:nth-child(${randomIndex}) > div > div.image > a > img`).click();
            expect(count).to.eq(4)
        });
    }
    selectFormattedDate() {
        const date = new Date();

        date.setDate(date.getDate() + 1);
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        cy.log(`${month}/${day}/${year}`)
        cy.get(this.weblocators.dateBtn).click()
        cy.wait(1000)
        cy.get('body > div.bootstrap-datetimepicker-widget.usetwentyfour.dropdown-menu.picker-open.bottom.pull-right > ul > li.collapse.in > div > div.datepicker-days > table > tbody')
            .contains(day).click()
    }
    checkText() {
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(8) > a').click();
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li.dropdown.open > div > div').find('li').should('have.length', 18).then(($menuItems) => {
            let count = $menuItems.length;
            cy.log("Total menu items: " + count);
            cy.get(`#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li.dropdown.open > div > div > ul:nth-child(1) > li:nth-child(${getRandNumber(5,1)}) > a`)
            .click()
            cy.get('#content > h2').should('be.visible')   
        });
    }
}




