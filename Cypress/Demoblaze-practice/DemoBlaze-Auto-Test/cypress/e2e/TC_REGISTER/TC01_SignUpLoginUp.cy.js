import { NavBar } from "../../webpages/_Navbar/Navbar";
import { HomePage } from "../../webpages/HomePage/HomePage";
import { LoginPage } from "../../webpages/LoginPage/LoginPage";
import { SignupPage } from "../../webpages/SignupPage/SignupPage";

describe("Complete Register In Demoblaze", () => {
  
  let randomName     = cy.getRandomString();
  let randomPassword = cy.getRandomNumber();
  const navbar   = new NavBar();
  const signUp   = new SignupPage();
  const logIn    = new LoginPage();

  before(() => {});

  beforeEach(() => cy.visit("/") );

  it("TC0 - SignUp and LogIn", () => {
    
    navbar.linkSignUp().click();
    signUp.fillForm(randomName, randomPassword);
    cy.wait(1000);
    navbar.linkLogIn().click();
    logIn.loginUser(randomName, randomPassword);
  });

});
