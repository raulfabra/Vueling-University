/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class CartPage {
  
  // Elements
  tableBody     = () => cy.get("#tbodyid");
  btnPlaceOrder = () => cy.get("[data-target='#orderModal']");
  formName      = () => cy.get("#name");
  formCard      = () => cy.get("#card");
  btnPurchase   = () => cy.get("[onclick ='purchaseOrder()']");


  //  Methods
  placeOrder() {
    this.tableBody().should("not.to.be.empty");
    this.btnPlaceOrder().click();
  }

  fillForm_(randomName, randomCard){
    this.formName().click().type(randomName);
    this.formCard().click().type(randomCard);
    this.btnPurchase().click();
  }
}
