/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class NavBar {
  
  // Menu
  
  linkHome = () => cy.get('[href="index.html"]');
  linkContact = () => cy.get('[data-target="#exampleModal"]');
  linkAboutUs = () => cy.get('[data-target="#videoModal"]');
  linkCart = () => cy.getId('cartur');
  linkLogIn = () => cy.getId('login2');
  linkSignUp = () => cy.getId('signin2');


}
