/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class SignupPage {
  
  // Register Elements
  Username    = () => cy.getId('sign-username');
  Password    = () => cy.getId('sign-password');
  ConfirmPassword  = () => cy;
  Email       = () => cy;
  address     = () => cy;
  
  buttonSignup = () => cy.get('button[onclick="register()"]');
  

  //  Service Methods
  verificationPage() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/checkin");
    cy.title().should("eq", "SmartWebapp");
  }

  //  Methods

  fillForm(name, password){
    this.Username().click().type(name);
    this.Password().click().type(password);
    
    this.buttonSignup().click();
  }
}