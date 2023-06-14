/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class ProductPage {

    // Element
    btnAdd = () => cy.get('a.btn-success');

    //  Method
    AddToCart(){
        this.btnAdd().click();
    }
}