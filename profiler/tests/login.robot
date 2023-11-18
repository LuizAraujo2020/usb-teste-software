*** Settings ***
Documentation   Testes da Tela de Login
Library         SeleniumLibrary
Resource        resources.robot


*** Test Cases ***
Cenário: Login com sucesso
    Abre a página de Login
    Está na tela de Login 
    Digita um email valido      ${EMAIL_CERTO}
    Digita uma senha valida     ${PASSWORD_CERTO}
    Clica no botao Login
    Está logado na Pagina Principal

Cenário: Login sem email 
    # Abre a página de Login
    Vai até tela de Login 
    Está na tela de Login 
    Digita uma senha valida     ${PASSWORD_CERTO}
    Clica no botao Login
    Campo email está destacado
    Está na tela de Login 

Cenário: Login sem senha
    # Abre a página de Login
    Vai até tela de Login 
    Está na tela de Login 
    Digita um email valido      ${EMAIL_CERTO}
    Clica no botao Login
    Campo senha está destacado
    Está na tela de Login 
    
Cenário: Login com email invalido
    # Abre a página de Login
    Vai até tela de Login 
    Está na tela de Login 
    Digita um email invalido    ${EMAIL_INVALIDO}
    Digita uma senha valida     ${PASSWORD_CERTO}
    Clica no botao Login
    Campo email está destacado
    Está na tela de Login  

Cenário: Login com senha inválida
    Abre a página de Login
    Vai até tela de Login
    Está na tela de Login 
    Digita um email valido      ${EMAIL_CERTO}
    Digita uma senha invalida     ${PASSWORD_INVALIDO}
    Clica no botao Login
    Campo senha está destacado
    Está na tela de Login  

Cenário: Usuário clica em "Sign Up"
    # Abre a página de Login
    Vai até tela de Login 
    Está na tela de Login 
    Clica no botao Sign Up
    Abre a página de Sign Up
    Está na tela de Sign Up
    [Teardown]      Close Browser 
    
*** Keywords ***
Digita um email valido
    [Arguments]    ${EMAIL_CERTO}
    Input Text    login-email    ${EMAIL_CERTO}

Digita um email invalido
    [Arguments]    ${EMAIL_INVALIDO}
    Input Text    login-email    ${EMAIL_INVALIDO}

Digita uma senha valida
    [Arguments]    ${PASSWORD_CERTO}
    Input Text    login-password    ${PASSWORD_CERTO}

Digita uma senha invalida
    [Arguments]    ${PASSWORD_INVALIDO}
    Input Text    login-password    ${PASSWORD_INVALIDO}

Campo email está destacado
    ${isHighlighted}=       Run Keyword And Return Status  Wait Until Page Contains Element  //div[@id="login-email" and contains(@class,'highlight')]  ${TIMEOUT AJAX}
    Run Keyword If          ${isHighlighted}        is ${TRUE}
    
Campo senha está destacado
    ${isHighlighted}=       Run Keyword And Return Status  Wait Until Page Contains Element  //div[@id="login-password" and contains(@class,'highlight')]  ${TIMEOUT AJAX}
    Run Keyword If          ${isHighlighted}        is ${TRUE}
    
Clica no botao Login
    Click Element	login-button

Clica no botao Sign Up
    Click Element	login-signup