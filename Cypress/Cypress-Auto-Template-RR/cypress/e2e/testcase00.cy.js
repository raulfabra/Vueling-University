import {} from "../webpages/";

describe("Test Case", () => {
  //VARIABLES, CONST
  let exemple = "test";

  const classPage = new ClassPage();

  before(() => {});

  beforeEach(() => {
    //Here we can write a specific URL
    //Add personality commands like addContext
    //Accept cookies and verification
    cy.visit("/login");
    cy.addContext(`The PNRs used are:`);
  });

  it("Describe test case", () => {
    //homePage.function();
    //homePage.element and you can write a expect or assert
  });

  after(() => {});

  afterEach(() => {
    //Like screenshots or something like that.
    /*cy.screenshot(`Screenshot_PNR_${pnr}`);
    cy.addContext("Screenshot taken. You can see it in ./cypress/screenshots"); */
  });
});
