import { getRandNumber, getDate } from "../support/utils"
export class productPage {
    weblocators = {
        searchedResult: '#content > div:nth-child(8) > div:nth-child(1) > div > div:nth-child(2) > div.caption > h4 > a',
        currencyBtn: '#form-currency > div > button',
        selectCurrency: `#form-currency > div > ul > li:nth-child(${getRandNumber(3,1)}) > button`,
        cardCurrency: '#content > div:nth-child(8) > div:nth-child(1) > div > div:nth-child(2) > div.caption > p.price',
        cardElemet: '#content > div.row',
        compareBtn: `#content > div:nth-child(8) > div:nth-child(${getRandNumber(3,1)}) > div > div:nth-child(2) > div.button-group > button:nth-child(3)`,
        compareBtn2: `#content > div:nth-child(8) > div:nth-child(${getRandNumber(3,1) + 1}) > div > div:nth-child(2) > div.button-group > button:nth-child(3)`,
        compareLink: `#product-search > div.alert.alert-success.alert-dismissible > a:nth-child(3)`,
        productsElement: '#content > table > tbody:nth-child(2)',
        phoneCart: '#content > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > div.button-group > button:nth-child(1)',
        phoneCart2: '#content > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2) > div.button-group > button:nth-child(1)',
        mp3Menu: '#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(8) > a',
        mp3SubMenu: `#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li.dropdown.open > div > div > ul:nth-child(1) > li:nth-child(${getRandNumber(5,1)}) > a`,
        headingElement: '#content > h2',
        subMenu: '#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li.dropdown.open > div > div'
    }

    assertSearchedText(actual) {
        cy.get(this.weblocators.searchedResult)
            .invoke('text')
            .then((text) => {
                let expectSearchText = text.substr(1)
                expect(expectSearchText).to.eq(actual)
            })
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
        cy.waitForElement(this.weblocators.compareBtn2)
        cy.get(this.weblocators.compareBtn2).click()
    }
    clickCompareLink() {
        cy.get(this.weblocators.compareLink).click()
    }
    clickCart1() {
        cy.get(this.weblocators.phoneCart).click()
    }
    clickCart2() {
        cy.get(this.weblocators.phoneCart2).click()
    }
    clickMp3Menu()
    {
        cy.get(this.weblocators.mp3Menu).click();
    }
    clickRandomSubMenu()
    {
        cy.get(this.weblocators.mp3SubMenu)
        .click()
    }
    assertCurrency() {
        var texxt = ''
        this.clickCurrencyBtn()
        cy.waitForElement(this.weblocators.selectCurrency)
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
        cy.get(this.weblocators.cardElemet).each(($el, index) => {
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
    checkText() {
        this.clickMp3Menu()
        cy.get(this.weblocators.subMenu)
        .find('li')
        .should('have.length', 18)
        .then(($menuItems) => {
            let count = $menuItems.length;
            cy.log("Total menu items: " + count);
            this.clickRandomSubMenu()
            cy.shouldBeVisible(this.weblocators.headingElement)   
        });
    }
}
