import { it } from "mocha";
import { HomePage } from "../webpages/HomePage";
import { STVpage } from "../webpages/STVPage";
import { PassengersPage } from "../webpages/PassengersPage";

describe("TC0 => search flight", () => {

  const homePage = new HomePage();
  const stvPage = new STVpage();
  const passengerPage = new PassengersPage();
  let obj = {};

  before(() => {
    cy.fixture("data").then((elem) => {
      obj = elem
    })
  })

  beforeEach(() => {
    cy.visit("/");

    homePage.cookiesButton().should('be.visible');
    homePage.cookiesButton().click();
  });

  it("search flight in Vueling", () => {

    homePage.select_RoadTrip();
    homePage.searcherScreen().screenshot('Screenshot_PNR_');
    homePage.select_OriginDestination(obj.origin, obj.destination);
    
    homePage.select_Calendar(obj.month);
    
    homePage.select_passangers(obj["num.passengers"]);
    
    homePage.searchFlight();

    stvPage.validateSTVpage();
    stvPage.getFlightRandom(obj.companyType);
    stvPage.getTypeFare(obj.fare);
    stvPage.pressContinue();

    passengerPage.validatePassengersPage();
    passengerPage.fillFormPassengers(obj.position, cy.getRandomString(), cy.getRandomNumber())
    
  });

  after(() => {
    /* cy.screenshot(`Screenshot_PNR_`);
    cy.addContext("Screenshot taken. You can see it in ./cypress/screenshots"); */
  });

});
