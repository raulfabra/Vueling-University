export class WishlistPage {
  // Elements
  wishlistProducts = () => cy.get("#content tbody tr");
  alertBanner = () => cy.get(".alert");

  // Functions
  removeItemFromCartByPosition(position) {
    this.wishlistProducts().should("exist");
    this.wishlistProducts().eq(position).find(".btn.btn-danger").click();
    this.alertBanner().should("contain", "Success: You have modified your wish list!");
  }

  addItemToCartByPosition(position) {
    this.wishlistProducts().should("exist");
    this.wishlistProducts().eq(position).find(".fa-shopping-cart").click();
    this.alertBanner().should("contain", "Success: You have added");
  }
}
