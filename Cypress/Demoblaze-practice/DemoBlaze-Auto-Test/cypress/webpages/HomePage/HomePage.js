/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class HomePage {
  // Service Elements
  cookiesButton   = () => cy.getId("");
  alertBanner     = () => cy.get("");

  // Home Elements
  btnPhones   = () => cy.get(`a[onclick="byCat('phone')"]`);
  btnLaptops  = () => cy.get(`a[onclick="byCat('notebook')"]`);
  btnMonitors = () => cy.get(`a[onclick="byCat('monitor')"]`);

  selectItem = (num) => cy.get(`a.hrefch[href="prod.html?idp_=${num}"]`);

  //  Service Methods

  verificationPage() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/index");
    cy.title().should("eq", "demoblaze");
  }

  //    Methods

  getPhones(num){
    this.btnPhones().click();
    this.selectItem(num).click();
  }

  getLaptops(num){
    this.btnLaptops().click();
    this.selectItem(num).click();
  }
  
  getMonitors(num){
    this.btnMonitors().click();
    this.selectItem(num).click();
  }

}
