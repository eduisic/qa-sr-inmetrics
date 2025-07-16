export default class LoginPage {
  preencherEmail(email) {
    cy.get('[data-qa="login-email"]').clear().type(email);
  }

  preencherSenha(senha) {
    cy.get('[data-qa="login-password"]').clear().type(senha);
  }

  clicarLogin() {
    cy.get('[data-qa="login-button"]').click();
  }
}
