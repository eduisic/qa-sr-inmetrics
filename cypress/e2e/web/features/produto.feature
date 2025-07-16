Feature: Busca de produtos

  Background:
    Given que eu estou logado e na pagina inicial

  Scenario: Buscar por um produto existente
    When clico em "Products"
    And preencho o campo de busca com "Tshirt"
    And clico no botão de pesquisar
    Then devo visualizar os resultados para "Tshirt"