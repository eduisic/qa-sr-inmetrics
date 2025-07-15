Feature: Login Automation Exercise

  Scenario: Login com sucesso
    Given que o usuário acessa a página de login
    When ele preenche o e-mail com "inmetricstest@teste.com.br"
    And preenche a senha com "testeqa"
    And clica no botão de login
    Then ele deve visualizar a mensagem "Logged in as Eduardo"

  Scenario: Login com e-mail inválido
    Given que o usuário acessa a página de login
    When ele preenche o e-mail com "invalido@teste.com"
    And preenche a senha com "teste"
    And clica no botão de login
    Then deve ser exibida a mensagem de erro "Your email or password is incorrect!"

  Scenario: Login com senha incorreta
    Given que o usuário acessa a página de login
    When ele preenche o e-mail com "teste2021@teste.com.br"
    And preenche a senha com "senhaerrada"
    And clica no botão de login
    Then deve ser exibida a mensagem de erro "Your email or password is incorrect!"
