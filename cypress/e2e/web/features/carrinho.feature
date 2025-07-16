Feature: Carrinho de compras

  Background:
    Given que eu estou logado e na pagina inicial
    And realizo uma busca por "Tshirt"

  Scenario: Incluir produto no carrinho
    When adiciono o produto "Tshirt" ao carrinho
    Then o produto "Tshirt" deve estar no carrinho

  Scenario: Validar produtos no carrinho na tela de pagamento
    Given que o produto "Tshirt" está no carrinho
    When vou para a tela de pagamento
    Then devo ver o produto "Tshirt" listado para pagamento

  Scenario: Incluir múltiplos produtos no carrinho
    When adiciono o produto "Tshirt" ao carrinho
    And adiciono o produto "Jeans" ao carrinho
    Then os produtos "Tshirt" e "Jeans" devem estar no carrinho
