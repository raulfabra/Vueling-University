
export class ItemsPage {

    // Elements

    item = {
        title : () => cy.get("#content h1"),
        btnAddCart : () => cy.get("#product #button-cart")
    }

    alert = {
        container : () => cy.get("div.alert"),
        btnShoppingCart : () => cy.get("div.alert a").contains("shopping cart")

    }

    // Functions

    AssertItemName(item_name) {
        this.item.title().should('have.text', item_name);
    }

    AddToCart() {
        this.item.btnAddCart().should('be.visible').click();
    }

    NavigateToCart() {
        this.alert.container().should('be.visible');
        this.alert.btnShoppingCart().click();
    }
}