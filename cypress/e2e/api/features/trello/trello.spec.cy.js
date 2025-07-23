import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import TrelloGetActionsService from '../../pages/trelloPage/trello.page';

let response;
let actionId;
const trelloPage = new TrelloGetActionsService();

Given('um actionId válido', () => {
  actionId = '592f11060f95a3d3d46a987a';
});

Given('um actionId inválido', () => {
  actionId = '0000000000000';
});

Given('um actionId inexistente', () => {
  actionId = '000000000000000000000000';
});

When('a requisição for realizada', () => {
  const start = Date.now();
  trelloPage.getActionById(actionId).then((res) => {
    res.duration = Date.now() - start;
    response = res;
  });
});

Then('o status deve ser 200', () => {
  expect(response.status).to.eq(200);
});

Then('o status deve ser 404', () => {
  expect(response.status).to.eq(404);
});

Then('o status deve ser 400', () => {
  expect(response.status).to.eq(400);
});

Then('o campo list.name deve existir e não estar vazio', () => {
  expect(response.body.data.list).to.have.property('name').and.to.not.be.empty;
});

Then('o campo list.name deve ser do tipo string', () => {
  expect(response.body.data.list.name).to.be.a('string');
});

Then('exibo o valor de list.name no log', () => {
  cy.log('list.name:', response.body.data.list.name);
});

Then('a resposta não deve conter dados da lista', () => {
  expect(response.body?.data?.list).to.be.undefined;
});

Then('o tempo de resposta deve ser menor que 2 segundos', () => {
  expect(response.duration).to.be.lessThan(2000);
});

Then('a resposta não deve estar vazia', () => {
  expect(response.body).to.not.be.empty;
});