export default class TrelloGetActionsService {
  getActionById(actionId) {
    return cy.request({
      method: 'GET',
      url: `https://api.trello.com/1/actions/${actionId}`,
      failOnStatusCode: false 
    });
  }
}