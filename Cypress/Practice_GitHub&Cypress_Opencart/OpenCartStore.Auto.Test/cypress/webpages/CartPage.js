export class CartPage {
    // Elements

    btnCheckout = () => cy.contains("a","Checkout");
    itemInCart = (item) => cy.get('.table-responsive tbody > tr').contains(item);
    btnUpdateQuantity = () => cy.get("[data-original-title='Update']");
    alertUpdateSuccess = () => cy.get(".alert-success");
    itemRow = (item) => cy.contains(".table-responsive tr", item);
    inputUpdateQuantity = (item) => this.itemRow(item).find("input");
    btnRemoveItem = (item) => this.itemRow(item).find("[data-original-title='Remove']");
    

    // Functions quantity[221006]

    updateQuantity(newQuantity, item) {
        this.inputUpdateQuantity(item).should("be.visible");
        this.inputUpdateQuantity(item).clear().type(newQuantity);
        this.btnUpdateQuantity().should("be.visible");
        this.btnUpdateQuantity().click();
    }

    deleteItem(item) {
        this.btnRemoveItem(item).should("be.visible");
        this.btnRemoveItem(item).click();
    }
}  