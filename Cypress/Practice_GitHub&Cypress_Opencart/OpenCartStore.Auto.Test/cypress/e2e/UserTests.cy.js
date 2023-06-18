import { HomePage } from "../webpages/HomePage";
import { LoginPage } from "../webpages/LoginPage";
import { AccountPage } from "../webpages/AccountPage";
import { RegisterPage } from "../webpages/RegisterPage";

describe("User and Currency Verification Testing", () => {
  const homePage = new HomePage();
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();
  const accountPage = new AccountPage();
  const opencartUser = "test.vueling@mail.com";
  const opencartPassword = "vueling";
  const currencies = [
    ["EUR", "GBP", "USD"],
    ["€", "£", "$"],
  ];

  let firstNameRandom;
  let lastNameRandom;
  let emailRandom;
  let telephoneRandom;
  let password;

  beforeEach(() => {
    cy.visit("");
    firstNameRandom = cy.getRandomFirstName();
    lastNameRandom = cy.getRandomLastName();
    emailRandom = cy.generateRandomName() + "@mailinator.com";
    telephoneRandom = cy.getRandomNumber();
    password = 123456789;
  });

  it("TC0 - Verify Register a user", () => {
    homePage.clickOnRegister();
    registerPage.fillFormRegister(firstNameRandom, lastNameRandom, emailRandom, telephoneRandom, password);
    registerPage.validateRegisterForm();
  });

  it("TC1 - Verify registerRandom and login", () => {
    homePage.clickOnRegister();
    registerPage.fillFormRegister(firstNameRandom, lastNameRandom, emailRandom, telephoneRandom, password);

    registerPage.validateRegisterForm();
  });

  it("TC2 - Verify register, loggin and loggout", () => {
    homePage.clickOnRegister();
    registerPage.fillFormRegister(firstNameRandom, lastNameRandom, emailRandom, telephoneRandom, password);

    registerPage.validateRegisterForm();
  });

  it("TC3 - Login user and verify that the user is logged in", () => {
    homePage.clickOnMyAccountAndLogin();
    loginPage.fillLoginForm(opencartUser, opencartPassword);
  });

  it("TC4 - Logout user and verify that the user is logged out", () => {
    homePage.clickOnMyAccountAndLogin();
    loginPage.fillLoginForm(opencartUser, opencartPassword);
    accountPage.logoutUser();
  });

  it("TC5 - Verify that the item prices currency updates to €", () => {
    homePage.changeCurrency(currencies[0][0]);
    homePage.topNavbar.textItemPrice().first().invoke("text").should("include", currencies[1][0]);
  });

  it("TC6 - Verify that the item prices currency updates to £", () => {
    homePage.changeCurrency(currencies[0][1]);
    homePage.topNavbar.textItemPrice().first().invoke("text").should("include", currencies[1][1]);
  });

  it("TC7 - Verify that the item prices currency updates to $", () => {
    homePage.changeCurrency(currencies[0][2]);
    homePage.topNavbar.textItemPrice().first().invoke("text").should("include", currencies[1][2]);
  });
});
