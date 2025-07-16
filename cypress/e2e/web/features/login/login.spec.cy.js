import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/loginPage/login.page';

const loginPage = new LoginPage();

Given('que o usuário acessa a página de login', () => {
  cy.visit('https://www.automationexercise.com/login');
});

When('ele preenche o e-mail com {string}', (email) => {
  loginPage.preencherEmail(email);
});

When('preenche a senha com {string}', (senha) => {
  loginPage.preencherSenha(senha);
});

When('clica no botão de login', () => {
  loginPage.clicarLogin();
});

Then('ele deve visualizar a mensagem {string}', (mensagem) => {
  cy.get('li a').should('contain.text', mensagem);
});

Then('deve ser exibida a mensagem de erro {string}', (mensagemErro) => {
  cy.contains(mensagemErro).should('be.visible');
});

Then('o sistema não deve permitir o envio do formulário', () => {
  cy.url().should('include', '/login');
});
