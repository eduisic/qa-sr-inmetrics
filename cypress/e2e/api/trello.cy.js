describe('Trello API', () => {

  const actionId = '592f11060f95a3d3d46a987a';

  it('deve retornar o campo "name" da estrutura "list" e validar o status code', () => {
    cy.getTrelloAction(actionId).then((response) => {
      expect(response.status).to.eq(200);
      cy.log('Nome da lista:', response.body.data.list.name);
      expect(response.body.data.list).to.have.property('name').and.to.not.be.empty;
    });
  });

  it('deve retornar 404 para um actionId inexistente', () => {
    const invalidActionId = '000000000000000000000000';
    
    cy.getTrelloAction(invalidActionId).then((response) => {
      expect(response.status).to.eq(404);
      cy.log('Mensagem de erro:', response.body.message || JSON.stringify(response.body));
    });
  });

  it('deve lidar com ausência do campo "list" na resposta', () => {
    cy.getTrelloAction(actionId).then((response) => {
      if (!response.body.data.list) {
        cy.log('Campo "list" não encontrado na resposta');
        expect(response.body.data).to.not.have.property('list');
      } else {
        expect(response.body.data.list).to.have.property('name');
      }
    });
  });

  it('deve responder em menos de 2 segundos', () => {
    const start = Date.now();
    cy.getTrelloAction(actionId).then((response) => {
      const duration = Date.now() - start;
      expect(duration).to.be.lessThan(2000);
      expect(response.status).to.eq(200);
    });
  });

  it('deve garantir que o campo "name" é uma string', () => {
    cy.getTrelloAction(actionId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.list.name).to.be.a('string');
    });
  });
});