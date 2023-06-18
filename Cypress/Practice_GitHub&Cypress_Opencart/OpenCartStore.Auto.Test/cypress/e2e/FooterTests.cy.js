import { HomePage } from "../webpages/HomePage";

// The "describe" are like test suites, inside you'll keep each test case (it) related
describe("Footer work as expected", () => {
  const homePage = new HomePage();
  before(() => {
    cy.log("TEST SUITE STARTS");
  });

  beforeEach(() => {
    cy.visit("");
  });

  it("TC 0 - Sponsor is found", () => {
    let sponsorSelected = "Nintendo";

    homePage.findSponsor(sponsorSelected);
    //homePage.banner.sponsorName(sponsorSelected).should("be.visible");
  });

  after(() => {
    cy.log("TEST SUITE FINISHED");
  });
});
