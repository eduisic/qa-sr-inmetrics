import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProdutoPage from '../../pages/produtoPage/produto.page';
import LoginPage from '../../pages/loginPage/login.page';
import CarrinhoPage from '../../pages/carrinhoPage/carrinho.page';

const loginPage = new LoginPage();
const produtoPage = new ProdutoPage();
const carrinhoPage = new CarrinhoPage();

Given('que eu estou logado e na pagina inicial', () => {
  cy.visit('https://www.automationexercise.com/login');
  loginPage.preencherEmail('inmetricstest@teste.com.br');
  loginPage.preencherSenha('testeqa');
  loginPage.clicarLogin();
  cy.get('li a').should('contain.text', 'Logged in as Eduardo');
});

Given('realizo uma busca por {string}', (produto) => {
  produtoPage.clickProductsMenu();
  produtoPage.fillSearchField(produto);
  produtoPage.clickSearchButton();
  produtoPage.shouldSeeResult(produto);
});

When('adiciono o produto {string} ao carrinho', (produto) => {
  produtoPage.addProductToCart(produto);
  produtoPage.clickViewCartInModal();
});

Then('o produto {string} deve estar no carrinho', (produto) => {
  carrinhoPage.verifyProductInCart('Tshirt');
  carrinhoPage.removeProductFromCart(produto);
});

Given('que o produto {string} está no carrinho', (produto) => {
  produtoPage.addProductToCart(produto);
  produtoPage.clickViewCartInModal();
  carrinhoPage.verifyProductInCart(produto);
});

When('vou para a tela de pagamento', () => {
  carrinhoPage.goToCheckout();
});

Then('devo ver o produto {string} listado para pagamento', (produto) => {
  carrinhoPage.verifyProductInCheckout(produto);
  carrinhoPage.verifyTotalAmount();
});