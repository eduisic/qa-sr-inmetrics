export default class CarrinhoPage {
  goToCart() {
    cy.get('[data-cy=cart]').click();
  }

  verifyProductInCart(produto) {
     cy.get('#cart_info_table .cart_description')
      .should('contain.text', produto);
  }

  removeProductFromCart(produto) {
    cy.get('#cart_info_table tbody tr').contains(produto)
      .parents('tr')
      .find('.cart_quantity_delete')
      .click();
  }

  goToCheckout() {
    cy.contains('a.btn.check_out', 'Proceed To Checkout').click();
  }

  verifyProductInCheckout(produto) {
    cy.get('.cart_description').should('contain.text', produto);
  }

  verifyTotalAmount() {
    cy.contains('h4', 'Total Amount').should('be.visible');
    cy.get('tr')
      .contains('Total Amount')
  }
  verifyProductQuantity(produto, quantidade) {
    cy.get('#cart_info_table tbody tr').contains(produto)
      .parents('tr')
      .find('.cart_quantity_input')
      .should('have.value', quantidade);
  }

  verifyCartIsEmpty() {
    cy.contains('Seu carrinho está vazio').should('be.visible');
  }

  verifyCheckoutErrorMessage() {
    cy.contains('Adicione produtos ao carrinho antes de finalizar a compra').should('be.visible');
  }
}