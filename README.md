# Testes Automatizados com Cypress

Este repositório contém testes automatizados para as funcionalidades web e API do projeto, utilizando o framework [Cypress](https://www.cypress.io/).

## Estrutura dos Testes

- **web/features/carrinho.feature**: Testes de funcionalidades do carrinho de compras (BDD/Gherkin).
- **web/features/login.feature**: Testes de autenticação e login (BDD/Gherkin).
- **web/features/produto.feature**: Testes de funcionalidades relacionadas a produtos (BDD/Gherkin).
- **api/trello.cy.js**: Testes automatizados para a API do Trello.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/eduisic/qa-sr-inmetrics.git
    cd qa-sr-inmetrics
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```

3. Instale o Cypress (caso não esteja listado nas dependências):
    ```bash
    npm install cypress --save-dev
    ```
    ou
    ```bash
    yarn add cypress --dev
    ```

## Execução dos Testes

### Abrir o Cypress em modo interativo

```bash
npx cypress open
```

- Uma interface gráfica será aberta, permitindo selecionar e executar os testes manualmente.

### Executar todos os testes em modo headless (linha de comando)

```bash
npx cypress run
```

### Executar testes específicos

```bash
npx cypress run --spec "cypress/e2e/web/features/carrinho.feature,cypress/e2e/web/features/login.feature,cypress/e2e/web/features/produto.feature,cypress/e2e/api/trello.cy.js"
```

## Configuração do Cypress

O arquivo `cypress.config.js` está configurado para suportar testes em BDD (Gherkin) e JavaScript, utilizando o [
Cypress Cucumber Preprocessor
](https://github.com/badeball/cypress-cucumber-preprocessor) e o [
esbuild
](https://github.com/evanw/esbuild) para processamento dos arquivos de teste.

### Explicação da configuração

- **
@bahmutov/cypress-esbuild-preprocessor
**: Utiliza o esbuild para processar arquivos de teste rapidamente, suportando recursos modernos do JavaScript.
- **
@badeball/cypress-cucumber-preprocessor
**: Permite escrever testes no formato Gherkin (`.feature`) e integrá-los ao Cypress.
- **
setupNodeEvents
**: Função assíncrona que configura o preprocessor do esbuild e adiciona o plugin do Cucumber ao Cypress.
- **
specPattern
**: Define os padrões de arquivos de teste que o Cypress irá executar (`.feature` para web e `.cy.js` para API).
- **
supportFile
**: Arquivo de suporte global para configuração e comandos customizados do Cypress.

## Observações

- Certifique-se de que todos os plugins necessários estão instalados:
  ```bash
  npm install @bahmutov/cypress-esbuild-preprocessor @badeball/cypress-cucumber-preprocessor
  ```
- Consulte a documentação dos plugins para configurações avançadas.

## Referências

- [
Documentação oficial do Cypress
](https://docs.cypress.io/)
- [
Cypress Cucumber Preprocessor
](https://github.com/badeball/cypress-cucumber-preprocessor)
- [
esbuild
](https://github.com/evanw/esbuild)

---

Em caso de dúvidas, consulte a documentação ou entre em contato com o time responsável.