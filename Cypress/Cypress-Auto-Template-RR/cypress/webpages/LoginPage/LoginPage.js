/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class LoginPage {
  // Flight Elements

  // Form Elements
  Username    = () => cy;
  Password    = () => cy;
  

  buttonLoggin = () => cy;

  
  //  Service Methods
  verificationPage() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/name");
    cy.title().should("eq", "NamePage");
  }

  //  Methods
  loginEmail(pnr, email) {
    this.inputPNR().clear().type(pnr).should("have.value", pnr);
    this.inputEmail().type(email).should("have.value", email);
    this.btnLogin().click();
  }


}
