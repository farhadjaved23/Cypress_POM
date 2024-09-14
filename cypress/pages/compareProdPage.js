import { getRandNumber, getDate } from "../support/utils"
export class compareProdPage {
    
    weblocators = {
        searchedResult: '#content > div:nth-child(8) > div:nth-child(1) > div > div:nth-child(2) > div.caption > h4 > a',
        currencyBtn: '#form-currency > div > button',
        selectCurrency: `#form-currency > div > ul > li:nth-child(${getRandNumber(3,1)}) > button`,
        cardCurrency: '#content > div:nth-child(8) > div:nth-child(1) > div > div:nth-child(2) > div.caption > p.price',
        cardElemet: '#content > div.row',
        compareBtn: `#content > div:nth-child(8) > div:nth-child(${getRandNumber(3,1)}) > div > div:nth-child(2) > div.button-group > button:nth-child(3)`,
        compareBtn2: `#content > div:nth-child(8) > div:nth-child(${getRandNumber(3,1) + 1}) > div > div:nth-child(2) > div.button-group > button:nth-child(3)`,
        compareLink: `#product-search > div.alert.alert-success.alert-dismissible > a:nth-child(3)`,
        productsElement: '#content > table > tbody:nth-child(2)'
    }

    assertComparedProd() {
        cy.shouldBeVisibleForElements(this.weblocators.productsElement);
    }
}
