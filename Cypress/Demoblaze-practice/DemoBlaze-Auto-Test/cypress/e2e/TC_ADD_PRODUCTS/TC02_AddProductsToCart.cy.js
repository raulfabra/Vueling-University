import { NavBar } from "../../webpages/_Navbar/Navbar";
import { HomePage } from "../../webpages/HomePage/HomePage";
import { LoginPage } from "../../webpages/LoginPage/LoginPage";
import { ProductPage } from "../../webpages/ProductPage/ProductPage";

describe("Add Products to Cart", () => {
  
  let username    = "groguet1996";
  let password    = "1234asdf";

  let num1 = 6;
  let num2 = 4;
  let num3 = 2;

  const navbar   = new NavBar();
  const logIn    = new LoginPage();
  const homePage = new HomePage();
  const productPage = new ProductPage();


  beforeEach(() => cy.visit("/") );

  it("TC1 - add phones", () => {
  
    navbar.linkLogIn().click();
    logIn.loginUser(username,password);
    homePage.getPhones(num1);
    productPage.AddToCart();

  });

  it("TC2 - add laptops", () => {
    
    navbar.linkLogIn().click();
    logIn.loginUser(username,password);
    homePage.getLaptops(num2);
    productPage.AddToCart();

  })

  it("TC3 - add monitors", () => {
    
    navbar.linkLogIn().click();
    logIn.loginUser(username,password);
    homePage.getMonitors(num3);
    productPage.AddToCart();

  })

  /* afterEach(() => {
    //Like screenshots or something like that.
    cy.screenshot(`Screenshot_PNR_${pnr}`);
    cy.addContext("Screenshot taken. You can see it in ./cypress/screenshots"); 
  }); */

});
