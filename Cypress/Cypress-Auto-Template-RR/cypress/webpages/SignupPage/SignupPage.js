/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class SignupPage {
  
  // Register Elements
  Username    = () => cy;
  Password    = () => cy;
  ConfirmPassword  = () => cy;
  Email       = () => cy;
  address     = () => cy;
  
  buttonSignup = () => cy;
  

  //  Service Methods
  verificationPage() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/checkin");
    cy.title().should("eq", "SmartWebapp");
  }

  //  Methods

  fillForm(){
    this.Username();
    this.Password();
    this.ConfirmPassword();
    this.Email();
  }
}