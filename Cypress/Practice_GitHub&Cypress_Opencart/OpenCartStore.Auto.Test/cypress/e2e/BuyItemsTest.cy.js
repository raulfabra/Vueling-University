import { HomePage } from "../webpages/HomePage";
import { ProductsPage } from "../webpages/ProductsPage";
import { ItemsPage } from "../webpages/ItemsPage";
import { ShoppingCartPage } from "../webpages/ShoppingCartPage";
import { CheckoutPage } from "../webpages/CheckoutPage";

describe("Buy items Test", () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const itemsPage = new ItemsPage();
  const shoppingCartPage = new ShoppingCartPage();
  const checkoutPage = new CheckoutPage();
  let data = {};

  before(() => {
    cy.fixture("purchaseData").then((purchaseData) => {
      data = purchaseData;
    });
  });

  beforeEach(() => {
    cy.visit("http://opencart.abstracta.us/");
  });

  it("TC 0 - Buy Phone", () => {
    homePage.NavigateToCategory(data.category);
    productsPage.SelectItem(data.item);
    itemsPage.AssertItemName(data.item);
    itemsPage.AddToCart();
    itemsPage.NavigateToCart();
    shoppingCartPage.GoToCheckout();
    checkoutPage.LogIn(data.email, data.password);
    checkoutPage.BillingDetails();
    checkoutPage.DeliveryDetails();
    checkoutPage.DeliveryMethods();
    checkoutPage.PaymentMethods();
    checkoutPage.ConfirmOrder();
    homePage.AssertCartISEmpty();
  });
});
