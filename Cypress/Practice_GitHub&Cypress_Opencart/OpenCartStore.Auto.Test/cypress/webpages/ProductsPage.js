export class ProductsPage {
  // Elements
  productsContainer = () => cy.get("#content");
  addedProductSuccesfully = () => cy.get(".fa-check-circle");
  buttonWishlist = () => cy.get('[onclick*="wishlist.add"]');
  products = {
    item: (item) => cy.get(`.product-thumb img[title='${item}']`),
  };

  // Functions
  addToWishlist(position) {
    this.buttonWishlist().eq(position).click();
    this.addedProductSuccesfully().should("be.visible");
  }
  SelectItem(name_item) {
    this.products.item(name_item).should("be.visible").click();
  }
}
