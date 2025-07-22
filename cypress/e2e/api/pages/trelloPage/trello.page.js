export default class TrelloPage {
  getActionById(actionId) {
    return cy.request({
      method: 'GET',
      url: `https://api.trello.com/1/actions/${actionId}`,
      failOnStatusCode: false 
    });
  }
}