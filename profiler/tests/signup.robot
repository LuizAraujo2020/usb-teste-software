*** Settings ***
Documentation   Testes da Tela Sign Up
Library         SeleniumLibrary
Resource        resources.robot

*** Variables ***

*** Test Cases ***
Cenário: Cadastro com sucesso
    Given Abre a página de Sign Up
    And Está na tela de Sign Up
    And Digita um email válido
    And Digita uma confirmação de email válida
    And Digita uma senha válida
    And Digita uma confirmação de senha válida
    When Clica no botao Sign Up
    Then Está logado na Pagina Principal com argumentos      ${EMAIL_NOVO}

Cenário: Cadastro sem email
    Given Vai até tela de Sign Up
    # Given Abre a página de Sign Up
    And Está na tela de Sign Up    
    And Digita uma confirmação de email válida
    And Digita uma senha válida
    And Digita uma confirmação de senha válida
    When Clica no botao Sign Up
    Then Campo email está destacado
    And Está na tela de Sign Up  

Cenário: Cadastro sem senha
    # Given Vai até tela de Sign Up
    Given Abre a página de Sign Up
    And Está na tela de Sign Up
    And Digita um email válido
    And Digita uma confirmação de email válida
    And Digita uma confirmação de senha válida
    When Clica no botao Sign Up
    Then Campo senha está destacado
    And Está na tela de Sign Up  

Cenário: Cadastro com confirmação email inválido
    # Given Vai até tela de Sign Up
    Given Abre a página de Sign Up
    And Está na tela de Sign Up
    And Digita um email válido
    And Digita uma confirmação de email inválida
    And Digita uma senha válida
    And Digita uma confirmação de senha válida
    When Clica no botao Sign Up
    Then Campo confirmação de email está destacado
    And Está na tela de Sign Up  

Cenário: Cadastro com confirmação de senha inválida
    Given Vai até tela de Sign Up
    # Given Abre a página de Sign Up
    And Está na tela de Sign Up
    And Digita um email válido
    And Digita uma confirmação de email válida
    And Digita uma senha válida
    And Digita uma confirmação de senha inválida
    When Clica no botao Sign Up
    Then Campo confirmação de senha está destacado
    And Está na tela de Sign Up

Cenário: Usuário toque no botão Login
    # Given Vai até tela de Sign Up
    Given Abre a página de Sign Up
    And Está na tela de Sign Up
    When Clica no botao Login
    Then Está na tela de Login

Cenário: Cadastro com email já cadastrado
    Given Vai até tela de Sign Up
    # Given Abre a página de Sign Up
    And Está na tela de Sign Up
    And Digita um email já cadastrado
    And Digita uma confirmação de email já cadastrado
    And Digita uma senha válida
    And Digita uma confirmação de senha válida
    When Clica no botao Sign Up
    Then Campo confirmação de senha está destacado
    And Tem um texto informando que já está registrado
    [Teardown]      Close Browser 

*** Keywords ***
Digita um email válido
    Input Text    signup-email    ${EMAIL_NOVO}

Digita um email inválido
    Input Text    signup-email    ${EMAIL_INVALIDO}

Digita um email já cadastrado
    Input Text    signup-email    ${EMAIL_CERTO}

Digita uma confirmação de email já cadastrado
    Input Text    signup-email    ${EMAIL_CERTO}

Digita uma confirmação de email válida
    Input Text    signup-confirm-email    ${EMAIL_NOVO}

Digita uma confirmação de email inválida
    Input Text    signup-confirm-email    ${EMAIL_INVALIDO}

Digita uma senha válida
    Input Text    signup-password    ${PASSWORD_CERTO}

Digita uma senha inválida
    Input Text    signup-password    ${PASSWORD_INVALIDO}

Digita uma confirmação de senha válida
    Input Text    signup-confirm-password    ${PASSWORD_CERTO}

Digita uma confirmação de senha inválida
    Input Text    signup-confirm-password    ${PASSWORD_INVALIDO}


Clica no botao Sign Up
    Click Element	signup-button

Clica no botao Login
    Click Element	signup-login

Campo email está destacado
    ${isHighlighted}=       Run Keyword And Return Status  Wait Until Page Contains Element  //div[@id="signup-email" and contains(@class,'highlight')]  ${TIMEOUT AJAX}
    Run Keyword If          ${isHighlighted}        is ${TRUE}

Campo confirmação de email está destacado
    ${isHighlighted}=       Run Keyword And Return Status  Wait Until Page Contains Element  //div[@id="signup-confirm-email" and contains(@class,'highlight')]  ${TIMEOUT AJAX}
    Run Keyword If          ${isHighlighted}        is ${TRUE}
    
Campo senha está destacado
    ${isHighlighted}=       Run Keyword And Return Status  Wait Until Page Contains Element  //div[@id="signup-password" and contains(@class,'highlight')]  ${TIMEOUT AJAX}
    Run Keyword If          ${isHighlighted}        is ${TRUE}
    
Campo confirmação de senha está destacado
    ${isHighlighted}=       Run Keyword And Return Status  Wait Until Page Contains Element  //div[@id="signup-confirm-password" and contains(@class,'highlight')]  ${TIMEOUT AJAX}
    Run Keyword If          ${isHighlighted}        is ${TRUE}

Tem um texto informando que já está registrado
    Page Should Contain Element     signup-tips
