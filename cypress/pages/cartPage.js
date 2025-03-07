import { getRandNumber, getDate } from "../support/utils"
export class cartPage {
    
    weblocators = {
        cartBtn: '#cart > button',
        viewCard: '#cart > ul > li:nth-child(2) > div > p > a:nth-child(1) > strong',
        price1: '#content > form > div > table > tbody > tr:nth-child(1) > td:nth-child(6)',
        price2: '#content > form > div > table > tbody > tr:nth-child(2) > td:nth-child(6)',
        totalPriceText: '#content > div.row > div > table > tbody > tr:nth-child(4) > td:nth-child(2)',
        cartProd: '#content > form > div > table > tbody',
        cartTable: '#content > form > div > table',
        productText: '#content > form > div > table > tbody > tr > td:nth-child(2) > a'
    }
    openCart(){
        cy.visit(Cypress.env('cart').URL)
    }
    clickCart() {
        cy.get(this.weblocators.cartBtn).click()
    }
    clickViewCart() {
        cy.get(this.weblocators.viewCard).click()
    }
    assertCartProd() {
        cy.shouldBeVisible(this.weblocators.cartProd);
    }
    getTotal() {
        return cy.get(this.weblocators.totalPriceText).invoke('text')
            .then(text => {
                return text
            })
    }
    getCartText()
    {
        this.openCart()
        let ProductTable = []
        cy.get(this.weblocators.cartTable).find('tbody tr').each(($row, index,) => {
            cy.log('Roww '+$row.text())
                const cellText = $row.text().trim();
                ProductTable.push(cellText); 
        }).then(() => {
            ProductTable.forEach(function(product)
            {
                if(!product.includes('***'))
                {  
                    const index = ProductTable.indexOf(product)
                    cy.get(`#content > form > div > table > tbody > tr:nth-child(${index}) > td:nth-child(4) > div > span > button.btn.btn-danger`).click()
                    cy.get('#content > form > div > table > tbody > tr > td:nth-child(2) > a').should('not.contain', '***');
                }
            })
        });
    }
    assertTotalPrice() {
        cy.get(this.weblocators.price1).invoke('text')
            .then((text1) => {
                cy.get(this.weblocators.price2).invoke('text').then(text2 => {
                    const price1 = parseFloat(text1.substr(1)); 
                    const price2 = parseFloat(text2.substr(1));
                    const total = price1 + price2
                    this.getTotal().then((actualTotal) => {
                        expect(total).to.eq(parseFloat(actualTotal.substr(1, 5)))
                    });
                })
            });
    }
    addToCartProd() {
        for (let i = 2; i <= 3; i++) {
            cy.get(`#content > table > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(${i})`).invoke('text').then((text) => {
                cy.log(text)
                if (text == 'In Stock') {
                    cy.get(`#content > table > tbody:nth-child(3) > tr > td:nth-child(${i}) > input`)
                    cy.get(`#content > table > tbody:nth-child(3) > tr > td:nth-child(${i}) > input`).click()
                }
            })
        }
    }
}
