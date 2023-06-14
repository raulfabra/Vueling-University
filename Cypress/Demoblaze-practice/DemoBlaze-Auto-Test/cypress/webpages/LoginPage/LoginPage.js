/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class LoginPage {
  // Flight Elements

  // Form Elements
  Username    = () => cy.getId('loginusername');
  Password    = () => cy.getId('loginpassword');
  
  buttonLoggin = () => cy.get('button[onclick="logIn()"]');

  
  //  Service Methods
  verificationPage() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/name");
    cy.title().should("eq", "NamePage");
  }

  //  Methods
  loginUser(name, password){
    this.Username().click().type(name);
    this.Password().click().type(password);
    this.buttonLoggin().click();
  }

  loginEmail(pnr, email) {
    this.inputPNR().clear().type(pnr).should("have.value", pnr);
    this.inputEmail().type(email).should("have.value", email);
    this.btnLogin().click();
  }


}
