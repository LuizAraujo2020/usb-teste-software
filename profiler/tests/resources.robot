*** Settings ***
Documentation   Resources que serão utilizados em testes várias partes da Aplicação
Library         SeleniumLibrary

*** Variables ***
${BROWSER}              Chrome
${SERVER}               http://127.0.0.1:5500/profiler

${URL_LOGIN}            ${SERVER}/index.html
${URL_SIGNUP}           ${SERVER}/src/signup.html
${URL_SEARCH}           ${SERVER}/src/search.html
${MAIN_LOGGED}          ${SERVER}/src/main.html?email=${EMAIL_CERTO}&isLoggedIn=true
${MAIN_UNLOGGED}        ${SERVER}/src/main.html?email=${EMAIL_CERTO}

${EMAIL_CERTO}          luiz@email.com
${EMAIL_NOVO}           carlos@email.com
${EMAIL_INVALIDO}       erradoemail.com
${PASSWORD_CERTO}       password123
${PASSWORD_INVALIDO}    123

*** Keywords ***

# ========== Login ====================
Abre a página de Login
    Open Browser    ${URL_LOGIN}    ${BROWSER}

Vai até tela de Login 
    Go To    ${URL_LOGIN}

Está na tela de Login 
    Location Should Be    ${URL_LOGIN}

# ========== Sign Up ====================
Abre a página de Sign Up
    Open Browser    ${URL_SIGNUP}    ${BROWSER}

Vai até tela de Sign Up
    Go To    ${URL_SIGNUP}

Está na tela de Sign Up
    Location Should Be    ${URL_SIGNUP}

# ========== Tela de Pesquisa ====================
Abre a página de Pesquisa 
    Open Browser    ${URL_SEARCH}    ${BROWSER}

Vai até tela de Pesquisa 
    Go To    ${URL_SEARCH}

Está na tela de Pesquisa 
    Location Should Be    ${URL_SEARCH}

# ========== Página Principal ====================
Está logado na Pagina Principal 
    Location Should Be    ${MAIN_LOGGED}

Está logado na Pagina Principal com argumentos
    [Arguments]   ${EMAIL_PASSED}
    Location Should Be    ${SERVER}/src/main.html?email=${EMAIL_PASSED}&isLoggedIn=true

Está deslogado na Pagina Principal 
    Location Should Be    ${MAIN_UNLOGGED}




