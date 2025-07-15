import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProductsPage from '../../pages/produtoPage/produto.page';
import LoginPage from '../../pages/loginPage/login.page';

const loginPage = new LoginPage();
const produtoPage = new ProductsPage();


Given('que eu estou logado e na pagina inicial', () => {
  cy.visit('https://www.automationexercise.com/login');
  loginPage.preencherEmail('inmetricstest@teste.com.br');
  loginPage.preencherSenha('testeqa');
  loginPage.clicarLogin();
  cy.get('li a').should('contain.text', 'Logged in as Eduardo');
});

When('clico em "Products"', () => {
  produtoPage.clickProductsMenu();
});

When('preencho o campo de busca com {string}', (produto) => {
  produtoPage.fillSearchField(produto);
});

When('clico no botão de pesquisar', () => {
  produtoPage.clickSearchButton();
});

Then('devo visualizar os resultados para {string}', (produto) => {
  produtoPage.shouldSeeResult(produto);
});