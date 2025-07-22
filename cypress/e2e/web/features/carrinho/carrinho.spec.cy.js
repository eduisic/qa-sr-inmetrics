import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProdutoPage from '../../pages/produtoPage/produto.page';
import LoginPage from '../../pages/loginPage/login.page';
import CarrinhoPage from '../../pages/carrinhoPage/carrinho.page';

const loginPage = new LoginPage();
const produtoPage = new ProdutoPage();
const carrinhoPage = new CarrinhoPage();

const usuario = {
  email: Cypress.env('USER_EMAIL') || 'inmetricstest@teste.com.br',
  senha: Cypress.env('USER_PASSWORD') || 'testeqa',
  nome: Cypress.env('USER_NAME') || 'Eduardo'
};

Given('que eu estou logado e na pagina inicial', () => {
  cy.visit('https://www.automationexercise.com/login');
  loginPage.preencherEmail(usuario.email);
  loginPage.preencherSenha(usuario.senha);
  loginPage.clicarLogin();
  cy.url().should('include', '/');
  cy.get('li a', { timeout: 10000 }).should('contain.text', `Logged in as ${usuario.nome}`);
  carrinhoPage.limparCarrinho?.();
});

Given('realizo uma busca por {string}', (produto) => {
  produtoPage.clickProductsMenu();
  produtoPage.fillSearchField(produto);
  produtoPage.clickSearchButton();
  produtoPage.shouldSeeResult(produto);
});

When('adiciono o produto {string} ao carrinho', (produto) => {
  carrinhoPage.limparCarrinho?.();
  produtoPage.addProductToCart(produto);
  produtoPage.clickViewCartInModal();
});

Then('o produto {string} deve estar no carrinho', (produto) => {
  carrinhoPage.verifyProductInCart(produto);
  carrinhoPage.removeProductFromCart(produto);
});

Given('que o produto {string} está no carrinho', (produto) => {
  carrinhoPage.limparCarrinho?.();
  produtoPage.addProductToCart(produto);
  produtoPage.clickViewCartInModal();
  carrinhoPage.verifyProductInCart(produto);
});

When('vou para a tela de pagamento', () => {
  carrinhoPage.goToCheckout();
  cy.url().should('include', '/checkout');
});

Then('devo ver o produto {string} listado para pagamento', (produto) => {
  carrinhoPage.verifyProductInCheckout(produto);
  carrinhoPage.verifyTotalAmount();
});