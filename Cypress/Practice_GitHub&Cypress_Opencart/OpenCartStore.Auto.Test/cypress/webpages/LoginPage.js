export class LoginPage {
  // Elements
  topNavbar = {
    iMyAccount: () => cy.get(".fa-user"),
    inputEmail: () => cy.getID("input-email"),
    inputPassword: () => cy.getID("input-password"),
    btnLogin: () => cy.get("[type='submit']"),
    aLogin: () => cy.contains("a", "Login"),
    aRegister: () => cy.contains("a", "Register"),
  };

  // Functions
  clickOnMyAccountAndLogin() {
    this.topNavbar.iMyAccount().should("exist").and("be.visible");
    this.topNavbar.iMyAccount().click();
    this.topNavbar.aLogin().should("exist").and("be.visible");
    this.topNavbar.aLogin().click();
  }

  clickOnMyAccountAndRegister() {
    this.topNavbar.iMyAccount().should("exist").and("be.visible");
    this.topNavbar.iMyAccount().click();
    this.topNavbar.aRegister().should("exist").and("be.visible");
    this.topNavbar.aRegister().click();
  }

  fillLoginForm(user, password) {
    this.topNavbar.inputEmail().should("exist").and("be.visible");
    this.topNavbar.inputEmail().type(user);
    this.topNavbar.inputPassword().should("exist").and("be.visible");
    this.topNavbar.inputPassword().type(password);
    this.topNavbar.btnLogin().should("exist").and("be.visible");
    this.topNavbar.btnLogin().click();
  }
}
