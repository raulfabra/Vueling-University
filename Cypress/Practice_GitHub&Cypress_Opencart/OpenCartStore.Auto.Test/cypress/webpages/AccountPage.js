export class AccountPage {
  // Elements
  topNavbar = {
    iMyAccount: () => cy.get(".fa-user"),
    inputEmail: () => cy.getID("input-email"),
    inputPassword: () => cy.getID("input-password"),
    btnLogin: () => cy.get("[type='submit']"),
    aLogin: () => cy.contains("a", "Login"),
  };
  btnYourStore = () => cy.contains(`a`, `Your Store`);
  aLogout = () => cy.get(".list-group-item").contains("Logout");
  btnContinue = () => cy.get(".btn-primary").contains("Continue");
  // Functions

  logoutUser() {
    this.aLogout().should("exist").and("be.visible");
    this.aLogout().click();
    this.btnContinue().should("exist").and("be.visible");
    this.btnContinue().click();
  }

  goToHomePage() {
    this.btnYourStore().click();
  }
}
