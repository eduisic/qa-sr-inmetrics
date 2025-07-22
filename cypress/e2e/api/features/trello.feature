Feature: API do Trello

  Scenario: Validar campo name na estrutura list
    Given um actionId válido
    When a requisição for realizada
    Then o status deve ser 200
    And o campo list.name deve existir e não estar vazio
    And o campo list.name deve ser do tipo string
    And exibo o valor de list.name no log

  Scenario: ActionId inexistente retorna 404
    Given um actionId inexistente
    When a requisição for realizada
    Then o status deve ser 404
    And a resposta não deve conter dados da lista

  Scenario: ActionId com formato inválido retorna 400
    Given um actionId inválido
    When a requisição for realizada
    Then o status deve ser 400
    And a resposta não deve conter dados da lista

  Scenario: A requisição deve responder em menos de 2 segundos
    Given um actionId válido
    When a requisição for realizada
    Then o tempo de resposta deve ser menor que 2 segundos
    And o status deve ser 200
    And a resposta não deve estar vazia
