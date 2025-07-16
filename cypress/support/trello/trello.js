Cypress.Commands.add('getTrelloAction', (actionId) => {
  cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/actions/${actionId}`,
    failOnStatusCode: false 
  });
});