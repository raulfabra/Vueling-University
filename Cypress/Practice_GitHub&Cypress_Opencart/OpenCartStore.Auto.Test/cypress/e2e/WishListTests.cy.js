import { HomePage } from "../webpages/HomePage";
import { LoginPage } from "../webpages/LoginPage";
import { ProductsPage } from "../webpages/ProductsPage";
import { WishlistPage } from "../webpages/WishlistPage";

describe("Wishlist tests", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const wishlistPage = new WishlistPage();
  let testData;

  before(() => {
    cy.fixture("wishlistData").then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.visit("");
  });

  it("TC 0 - Add item to wishlist and cart", () => {
    loginPage.clickOnMyAccountAndLogin();
    loginPage.fillLoginForm(testData.userData.email, testData.userData.password);
    homePage.NavigateToCategory(testData.category1);
    homePage.NavigateToCategory(testData.category2);
    productsPage.addToWishlist(0);
    homePage.GoToWishList();
    wishlistPage.addItemToCartByPosition(0);
  });

  it("TC 1 - Add and remove and item from wishlist", () => {
    loginPage.clickOnMyAccountAndLogin();
    loginPage.fillLoginForm(testData.userData.email, testData.userData.password);
    homePage.NavigateToCategory(testData.category1);
    homePage.NavigateToCategory(testData.category2);
    productsPage.addToWishlist(0);
    homePage.GoToWishList();
    wishlistPage.removeItemFromCartByPosition(0);
  });
});
