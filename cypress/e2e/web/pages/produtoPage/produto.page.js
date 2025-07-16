export default class ProdutoPage {
  clickProductsMenu() {
    cy.get('a[href="/products"]').click();
  }
  fillSearchField(produto) {
    cy.get('#search_product').clear().type(produto);
  }
  clickSearchButton() {
    cy.get('#submit_search').click();
  }
  shouldSeeResult(produto) {
    cy.get('.product-image-wrapper').should(($div) => {
      const text = $div.text();
      expect(text.toLowerCase()).to.match(new RegExp(produto.replace('-', '\\-'), 'i'));
    });
  }
  addProductToCart(produto) {
    cy.contains('.productinfo', produto)
      .parent()
      .find('a.add-to-cart')
      .first()
      .click();
  }
  clickViewCartInModal() {
  cy.get('.modal-content')
    .should('be.visible')
    .find('a[href="/view_cart"]')
    .click();
  } 
}
