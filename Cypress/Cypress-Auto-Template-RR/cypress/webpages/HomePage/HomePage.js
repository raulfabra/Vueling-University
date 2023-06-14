/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class HomePage {
  // Service Elements
  cookiesButton   = () => cy.getId("");
  alertBanner     = () => cy.get("");

  // Home Elements


  //  Service Methods
  acceptCookies() {
    this.cookiesButton().should("be.visible");
    this.cookiesButton.click();
  }

  verificationPage() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/name");
    cy.title().should("eq", "NamePage");
  }

  verifyAlertBanner() {
    this.alertBanner().should("be.visible", "have.text");
  }

  //    Methods


  
}

/* 
  loginDate(pnr, airport, date) {
    this.btnFlight().click();
    this.btnFlightPNR().clear().type(pnr).should("have.value", pnr);
    this.inputSelectAirport().clear().type(airport).should("have.value", airport);
    this.buttonSelectAirport(airport).click();
    this.selectDate().clear().type(date).should("have.value", date);
    this.btnLogin().click();
  } 
  */
