export class HomePage {
  // Elements
  shoppingCart = {
    dropDown: () => cy.getID("cart"),
    body: () => cy.get(".dropdown-menu p"),
  };

  topNavbar = {
    btnCurrency: () => cy.get(".btn.btn-link.dropdown-toggle"),
    btnSelectCurrency: (currencyCode) => cy.get("[name='" + currencyCode + "']"),
    textItemPrice: () => cy.get(".price-tax"),
    iMyAccount: () => cy.get(".fa-user"),
    aLogin: () => cy.contains("a", "Login"),
    btnAccount: () => cy.get("a[title='My Account']"),
    btnRegister: () => cy.get("a").contains("Register"),
  };

  banner = {
    sponsorName: (sponsor) => cy.get(`[alt='${sponsor}']`),
    btnNext: () => cy.get(".swiper-button-next"),
  };

  navbar = {
    container: () => cy.getID("menu"),
    category: () => cy.get("ul.nav.navbar-nav a"),
    btnCartPage: () => cy.get(`[title="Shopping Cart"]`),
    btnMyAccount: () => cy.get(`[title="My Account"]`),
    btnLogIn: () => cy.xpath(`//a[text()="Login"]`),
  };

  titleYourStore = () => cy.getID(`logo`);

  btnaddToCartItem = (item) => cy.xpath(`//a[text()='${item}']/../../..//button[@onclick="cart.add('40');"]`);

  btnGoToWishList = () => cy.get("#wishlist-total");


  // Functions

  NavigateToCategory(category) {
    this.navbar.container().should("be.visible");
    this.navbar.category().contains(category).click();
  }

  AssertCartISEmpty() {
    this.shoppingCart.dropDown().click();
    this.shoppingCart.body().should("have.text", "Your shopping cart is empty!");
  }

  clickOnNavbar(button) {
    button.should("exist").and("be.visible"); // Before clicking on the element, assert if it exists and it's visible
    button.click();
  }

  selectFeaturedItem(item) {
    this.titleYourStore().should("be.visible");
    this.btnaddToCartItem(item).click();
  }

  goToCartPage() {
    cy.scrollTo("top");
    this.navbar.btnCartPage().click();
  }

  findSponsor(sponsorSelected) {
    this.banner
      .sponsorName(sponsorSelected)
      .last()
      .then((mySponsor) => {
        if (Cypress.dom.isVisible(mySponsor)) {
          this.banner.btnNext().last().click();
          this.banner.sponsorName(sponsorSelected).last().should("be.visible");
        } else if (!Cypress.dom.isVisible(mySponsor)) {
          this.banner.btnNext().last().click();
          this.findSponsor(sponsorSelected);
        }
      });
  }

  clickOnMyAccountAndLogin() {
    this.topNavbar.iMyAccount().should("exist").and("be.visible");
    this.topNavbar.iMyAccount().click();
    this.topNavbar.aLogin().should("exist").and("be.visible");
    this.topNavbar.aLogin().click();
  }

  clickOnNavbar(button) {
    button.should("exist").and("be.visible"); // Before clicking on the element, assert if it exists and it's visible
    button.click();
  }

  NavigateToCategory(category) {
    this.navbar.category().contains(category).click();
  }

  changeCurrency(currencyCode) {
    this.topNavbar.btnCurrency().click();
    this.topNavbar.btnSelectCurrency(currencyCode).click();
  }

  clickOnRegister() {
    this.topNavbar.btnAccount().click();
    this.topNavbar.btnRegister().click();
  }
  findSponsor(sponsorSelected) {
    this.banner
      .sponsorName(sponsorSelected)
      .last()
      .then((mySponsor) => {
        if (Cypress.dom.isVisible(mySponsor)) {
          this.banner.btnNext().last().click();
          this.banner.sponsorName(sponsorSelected).last().should("be.visible");
        } else if (!Cypress.dom.isVisible(mySponsor)) {
          this.banner.btnNext().last().click();
          this.findSponsor(sponsorSelected);
        }
      });
  }

  clickOnMyAccountAndLogin() {
    this.topNavbar.iMyAccount().should("exist").and("be.visible");
    this.topNavbar.iMyAccount().click();
    this.topNavbar.aLogin().should("exist").and("be.visible");
    this.topNavbar.aLogin().click();
  }

  changeCurrency(currencyCode) {
    this.topNavbar.btnCurrency().click();
    this.topNavbar.btnSelectCurrency(currencyCode).click();
  }

  clickOnRegister() {
    this.topNavbar.btnAccount().click();
    this.topNavbar.btnRegister().click();
  }
  GoToWishList() {
    this.btnGoToWishList().click();
  }
}
