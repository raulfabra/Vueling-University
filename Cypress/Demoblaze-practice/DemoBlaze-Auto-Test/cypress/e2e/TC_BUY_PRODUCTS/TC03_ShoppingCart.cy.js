import { NavBar } from "../../webpages/_Navbar/Navbar";
import { CartPage } from "../../webpages/CartPage/CartPage";
import { HomePage } from "../../webpages/HomePage/HomePage";
import { LoginPage } from "../../webpages/LoginPage/LoginPage";
import { ProductPage } from "../../webpages/ProductPage/ProductPage";

describe("Realize shopping cart", () => {
  
  let username    = "groguet1996";
  let password    = "1234asdf";
  let randomName  = cy.getRandomString();
  let randomCard  = cy.getRandomNumber();

  let num1 = 6;
  let num2 = 4;
  let num3 = 2;

  const navbar   = new NavBar();
  const logIn    = new LoginPage();
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();


  beforeEach(() => cy.visit("/") );

  it("TC1 - buy all cart", () => {
  
    navbar    .linkLogIn().click({ multiple: true });
    logIn     .loginUser(username,password);
    homePage  .getPhones(num1);
    productPage.AddToCart();
    navbar    .linkHome().click({ multiple: true });
    homePage  .getLaptops(num2);
    productPage.AddToCart();
    navbar    .linkHome().click({ multiple: true });
    homePage  .getMonitors(num3);
    productPage.AddToCart();
    navbar    .linkCart().click({ multiple: true });
    cartPage  .placeOrder();
    cartPage  .fillForm_(randomName, randomCard);

    /* cartPage.tickCompletePurchase().should('exist');
    expect(cartPage.tickCompletePurchase()).to.exist; */
    

  });


  /* afterEach(() => {
    //Like screenshots or something like that.
    cy.screenshot(`Screenshot_PNR_${pnr}`);
    cy.addContext("Screenshot taken. You can see it in ./cypress/screenshots"); 
  }); */

});
