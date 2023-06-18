
export class CheckoutPage {

    // Elements

    step1 = {
        container : () => cy.get("div#collapse-checkout-option"),
        inputEmail : () => cy.getID("input-email"),
        inputPassword : () => cy.getID("input-password"),
        btnLogIn : () => cy.get("input#button-login")
    }

    step2 = {   
        container : () => cy.get("div#collapse-payment-address"),     
        btnPaymentAdress : () => cy.get("input#button-payment-address")
    }

    step3 = {   
        container : () => cy.get("div#collapse-shipping-address"),     
        btnShippingAdress : () => cy.get("input#button-shipping-address")
    }

    step4 = {   
        container : () => cy.get("div#collapse-shipping-method"),     
        btnShippingMethod : () => cy.get("input#button-shipping-method")
    }

    step5 = {   
        container : () => cy.get("div#collapse-payment-method"),
        checkbox : () => cy.get("[type=checkbox]"),     
        btnPaymentMethod : () => cy.get("input#button-payment-method")
    }

    step6 = {   
        container : () => cy.get("div#collapse-checkout-confirm"),     
        btnConfirm : () => cy.get("input#button-confirm")
    }

    confirmation = {
        title : () => cy.get("#content h1"),
        btn : () => cy.get(".btn.btn-primary")
    }


    // Functions

    LogIn(email, password) {
        this.step1.container().should('be.visible');
        this.step1.inputEmail().type(email);
        this.step1.inputPassword().type(password);
        this.step1.btnLogIn().click();
    }

    BillingDetails() {
        this.step2.container().should('be.visible');
        this.step2.btnPaymentAdress().click();
    }

    DeliveryDetails() {
        this.step3.container().should('be.visible');
        this.step3.btnShippingAdress().click();
    }

    DeliveryMethods() {
        this.step4.container().should('be.visible');
        this.step4.btnShippingMethod().click();
    }

    PaymentMethods() {
        this.step5.container().should('be.visible');
        this.step5.checkbox().check();
        this.step5.btnPaymentMethod().click();
    }

    ConfirmOrder() {
        this.step6.container().should('be.visible');
        this.step6.btnConfirm().click();
        this.confirmation.title().should('have.text', "Your order has been placed!");
        this.confirmation.btn().click();

    }

}