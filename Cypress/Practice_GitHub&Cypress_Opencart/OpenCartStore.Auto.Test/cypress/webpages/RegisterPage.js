export class RegisterPage {
  // Elements
  register = {
    firstName: () => cy.get("input[name='firstname']"),
    lastName: () => cy.get("input[name='lastname']"),
    email: () => cy.get("#input-email"),
    telephone: () => cy.get("#input-telephone"),
    password: () => cy.get("#input-password"),
    passwordConfirm: () => cy.get("#input-confirm"),
    acceptAgreenment: () => cy.get("input[type='checkbox']"),
    btnContinue: () => cy.get("input[value='Continue']"),
  };

  validateElements = {
    textCongratulations: () => cy.get("#content").contains("p", "Congratulations!"),
    textSuccess: () => cy.get("li > a").contains("a", "Success"),
  };

  // Functions
  fillFormRegister(firstNameRandom, lastNameRandom, emailRandom, telephoneRandom, password) {
    this.register.firstName(firstNameRandom).click().type(`${firstNameRandom}`);
    this.register.lastName(lastNameRandom).click().type(`${lastNameRandom}`);
    this.register.email(emailRandom).click().type(`${emailRandom}`);
    this.register.telephone(telephoneRandom).click().type(`${telephoneRandom}`);
    this.register.password(password).click().type(`${password}`);
    this.register.passwordConfirm(password).click().type(`${password}`);
    this.register.acceptAgreenment().click();
    this.register.btnContinue().click();
  }

  validateRegisterForm() {
    this.validateElements.textCongratulations().should("be.visible", "have.text");
    this.validateElements.textSuccess().should("be.visible", "have.text");
  }
}
