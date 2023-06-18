
export class PassengersPage {

    //ELEMENTS
    formPassengers = {
        firstName: (numberOfAdult) => cy.getId(`ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxFirstName_${numberOfAdult}`),
        lastName : (numberOfAdult) => cy.getId(`ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxLastName_${numberOfAdult}`),
        birthdayDate: () => cy.getId('birthDate1_1'),
        btnReady: (position) => cy.get(`.booking-contact_form_button[position='${position}']`),
        resumePrice: () => cy.getId('ContactViewSBSidebarContactView_atAGlanceContainer'),
        infoPassangers: () => cy.getId('passengerInformation'),
        btnContinue: () => cy.getId('stvContinueButton')
    }

    personalContact = {
        firstName: () => cy.getId('ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_TextBoxFirstName'),
        lastName: () => cy.getId('ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_TextBoxLastName'),
        country: () => cy.getId('ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_DropDownListCountry'),
        prefix: () => cy.getId('ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_DropDownListPrefix'),
        numberPhone: () => cy.getId('ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_TextBoxHomePhone'),
        email: () => cy.getId('ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_TextBoxEmailAddress')
    }

    //METHODS

    validatePassengersPage (){
        this.formPassengers.infoPassangers().should('be.visible');
        this.formPassengers.resumePrice().should("be.visible")
    }

    fillFormPassengers(passenger, randomString, randomNumber){
        this.formPassengers.firstName(passenger[0]).type(`${randomString}`);
        this.formPassengers.lastName(passenger[0]).type(`${randomString}`);
        this.formPassengers.firstName(passenger[0] + "_0").type(`${randomString}`);
        this.formPassengers.lastName(passenger[0] + "_0").type(`${randomString}`);
        this.formPassengers.birthdayDate().type("01012023");
        this.formPassengers.btnReady(passenger[1]).click();

        this.formPassengers.firstName(passenger[1]).type(`${randomString}`);
        this.formPassengers.lastName(passenger[1]).type(`${randomString}`);
        this.formPassengers.btnReady(passenger[2]).click();

        this.personalContact.country().select("España");
        this.personalContact.numberPhone().type(`${randomNumber}`);
        this.personalContact.email().type(`${randomString + "@mailinator.com"}`);

    }
    
    pressContinue(){
        this.stvPage.resumePrice().should('be.visible')
        this.stvPage.btnContinue().click();
    }
    
}