export default class ProductsPage {
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
}
