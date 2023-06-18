import { AccountPage } from "../webpages/AccountPage";
import { HomePage } from "../webpages/HomePage";
import { LoginPage } from "../webpages/LoginPage";
import { CartPage } from "../webpages/CartPage";

describe("Shopping cart tests", () => {
  const accountPage = new AccountPage();
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const cartPage = new CartPage();

  let data = {};
  let item = "iPhone";

  before(() => {
    cy.log("TEST SUITE STARTS");
    cy.fixture("dataLoginShoppingCart").then((loginData) => {
      data = loginData;
    });
  });

  beforeEach(() => {
    cy.visit("");
  });

  it("TC 0 - Verify if item is in cart", () => {
    homePage.clickOnMyAccountAndLogin();
    loginPage.fillLoginForm(data.opencartUser, data.opencartPassword);
    accountPage.goToHomePage();

    homePage.selectFeaturedItem(item);
    homePage.goToCartPage();

    cartPage.btnCheckout().should("be.visible");
    cartPage.itemInCart(item).should("have.text", item);
  });

  it("TC 1 - Update item quantity in cart", () => {
    homePage.clickOnMyAccountAndLogin();
    loginPage.fillLoginForm(data.opencartUser, data.opencartPassword);
    accountPage.goToHomePage();

    homePage.selectFeaturedItem(item);
    homePage.goToCartPage();

    cartPage.btnCheckout().should("be.visible");
    cartPage.itemInCart(item).should("have.text", item);
    cartPage.updateQuantity("2", item);
    cartPage.inputUpdateQuantity(item).should("have.value", "2")
    cartPage.alertUpdateSuccess().should("be.visible");
  });

  it("TC 2 - Delete item from cart", () => {
    homePage.clickOnMyAccountAndLogin();
    loginPage.fillLoginForm(data.opencartUser, data.opencartPassword);
    accountPage.goToHomePage();

    homePage.selectFeaturedItem(item);
    homePage.goToCartPage();

    cartPage.btnCheckout().should("be.visible");
    cartPage.itemInCart(item).should("have.text", item);

    cartPage.deleteItem(item);
  });

  /*
  afterEach(() => {
    let screenshotName = "NavbarTests"
    cy.screenshot(`${screenshotName}`);
    cy.addContext("Screenshot taken. You can see it in ./cypress/screenshots");
  });
  */

  after(() => {
    cy.log("TEST SUITE FINISHED");
  });
});
