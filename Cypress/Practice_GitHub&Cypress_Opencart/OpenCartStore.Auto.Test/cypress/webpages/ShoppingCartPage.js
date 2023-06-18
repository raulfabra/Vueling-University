
export class ShoppingCartPage {

    // Elements

    btnCheckout = () => cy.get("a.btn.btn-primary")

    shoppingCartTable = {
        body : () => cy.get("#content .table-responsive tbody")
    }

    // Functions

    GoToCheckout() {
        this.shoppingCartTable.body().should('not.be.empty');
        this.btnCheckout().click();
    }

}