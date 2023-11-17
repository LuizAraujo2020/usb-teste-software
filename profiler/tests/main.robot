*** Settings ***
Documentation   Testes da Tela Sign Up
Library         SeleniumLibrary
Resource        resources.robot

*** Variables ***
${IMG_NOVA}         https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png
${IMG_GITHUB}       https://avatars.githubusercontent.com/u/18700326?s=96&v=4
${NOME_NOVO}        Carlos Silva
${CARGO_NOVO}       FULLSTACK DEVELOPER
${EXP_NOVO}         3
${NOVA_}            Chrome


*** Test Cases ***
Cenário: Login com sucesso
    Given Abre a página de Login
    And Está na tela de Login 
    And Digita um email valido      ${EMAIL_CERTO}
    And Digita uma senha valida     ${PASSWORD_CERTO}
    When Clica no botao Login
    Then Está logado na Pagina Principal

# Cenário: Editar Imagem com sucesso
#     Given Está logado na Pagina Principal 
#     When Clica no campo de Image
#     And Adiciona o texto        ${IMG_NOVA}
#     Then A imagem não é mais a    ${IMG_GITHUB}
#     Then Está logado na Pagina Principal

# Cenário: Editar nome com sucesso
#     Given Está logado na Pagina Principal 
#     And Clica no campo de nome
#     When Adiciona o texto        ${NOME_NOVO}
#     Then Tem o texto             ${NOME_NOVO}

Cenário: Editar cargo com sucesso
    Given Está logado na Pagina Principal 
    And Clica no campo de cargo
    When Adiciona o texto        ${CARGO_NOVO}
    Then Tem o texto             ${CARGO_NOVO}

 
Cenário: Editar anos de experiência com sucesso
    Given Está logado na Pagina Principal 
    And Clica no campo de experiência
    When Adiciona o texto        ${EXP_NOVO}
    Then Tem o texto             ${EXP_NOVO}

 
# Cenário: Editar cards de destaque com sucesso
#     Given Está logado na Pagina Principal 
#     And Clica no título de um card de destaque
#     And Adiciona um título
#     When Clica fora do campo em edição
#     Then a nova informação deve permanecer salva no referido campo.

 
# Cenário: Editar cards de destaque com sucesso
#     Given Está logado na Pagina Principal 
#     And Clica na descrição de um card de destaque
#     And Adiciona uma breve descrição
#     When Clica fora do campo em edição
#     Then a nova informação deve permanecer salva no referido campo.

 
# Cenário: Editar a sessão biografia com sucesso
#     Given Está logado na Pagina Principal 
#     And Clica no texto da biografia
#     And Adiciona texto sobre mim no campo
#     When Clica fora do campo em edição
#     Then a nova informação deve permanecer salva no referido campo.

 
# Cenário: Editar imagem do card horizontal com sucesso
#     Given Está logado na Pagina Principal 
#     And Clica na imagem de um card horizontal
#     And Adiciona uma URL de uma imagem
#     When Clica fora do campo em edição
#     Then a nova informação deve permanecer salva no referido campo.

 
# Cenário: Editar título do card horizontal com sucesso
#     Given Está logado na Pagina Principal 
#     And Clica no título de um card horizontal
#     And Adiciona um novo título
#     When Clica fora do campo em edição
#     Then a nova informação deve permanecer salva no referido campo.

 
# Cenário: Editar descrição do card horizontal com sucesso
#     Given Está logado na Pagina Principal 
#     And Clica na descrição de um card horizontal
#     And Adiciona uma breve descrição
#     When Clica fora do campo em edição
#     Then a nova informação deve permanecer salva no referido campo.

 
# Cenário: Editar imagem do card de Certificado com sucesso
#     Given Está logado na Pagina Principal 
#     And Clica na imagem do card de Certificado
#     And Adiciona uma URL da imagem do certificado
#     When Clica fora do campo em edição
#     Then a nova informação deve permanecer salva no referido campo.

 
# Cenário: Editar texto do card de Certificado com sucesso
#     Given Está logado na Pagina Principal 
#     And Clica no texto do card de Certificado
#     And Adiciona o nome e carca horária do curso feito
#     When Clica fora do campo em edição
#     Then a nova informação deve permanecer salva no referido campo.

 
# Cenário: Editar sessão de repositórios com sucesso
#     Given Está logado na Pagina Principal 
#     And Clica em editar sessão de repositórios
#     And Adiciona uma URL válida
#     When eu clicar em salvar
#     Then a lista deve estar com os repositórios que vieram do perfil do Github

 
# Cenário: Editar sessão de contato com sucesso
#     Given Está logado na Pagina Principal 
#     And Clica em editar sessão de contato
#     And Adiciona uma URL válida e uma descrição 
#     When eu clicar em salvar 
#     Then o card editado deve estar com as alterações sendo mostradas
    # [Teardown]      Close Browser 

*** Keywords ***
Digita um email valido
    [Arguments]    ${EMAIL_CERTO}
    Input Text    login-email    ${EMAIL_CERTO}

Digita uma senha valida
    [Arguments]    ${PASSWORD_CERTO}
    Input Text    login-password    ${PASSWORD_CERTO}

Clica no botao Login
    Click Element	login-button

Há um alert
    Alert Should Be Present        Insert an URL for an image

Adiciona o texto
    [Arguments]              ${TEXT}
    Input Text Into Alert    ${TEXT}    action=ACCEPT

Pressiona Enter
    SeleniumLibrary.Press Keys  None  RETURN
    
A imagem não é mais a
    [Arguments]    ${IMG}
    Page Should Not Contain Image           ${IMG}
    
Tem o texto
    [Arguments]    ${TEXT}
    Page Should Contain           ${TEXT}
    
Não tem mais o texto
    [Arguments]    ${TEXT}
    Page Should Not Contain           ${TEXT}


# ========== IMAGE
Clica no campo de Image
    Click Element    main-image


# ========== NOME
Clica no campo de Nome
    Click Element    main-name


# ========== CARGO
Clica no campo de Cargo
    Click Element    main-job


# ========== 
Clica no campo de Experiência
    Click Element    main-experience-year


# ========== 
Clica no campo de Highlight1
    Click Element    main-highlight1


# ========== 
Clica no campo de Highlight2
    Click Element    main-highlight2


# ========== 
Clica no campo de Bio
    Click Element    main-about


# ========== 
Clica no campo de Nome do App
    Click Element    app-name-Quest: UP!


# ========== 
Clica no campo de Descrição do App
    Click Element    app-text-Quest: UP!


# ========== 
Clica no campo de Imagem do App
    Click Element    app-img-Quest: UP!


# ========== 
Clica no campo de Image do Certificado Scrum
    Click Element    certification-img-Scrum Certified


# ========== 
Clica no campo de Nome do Curso do Certificado
    Click Element    certification-p-Scrum Certified


# ========== 
Clica no campo de título do Contato
    Click Element    contact-h3-luizcarlos_bsb2006@hotmail.com


# ========== 
Clica no campo de Descrição do Contato
    Click Element    contact-p-luizcarlos_bsb2006@hotmail.com





# Cenário: Cadastro com sucesso
#     Given Abre a página de Sign Up
#     And Está na tela de Sign Up
#     And Digita um email válido
#     And Digita uma confirmação de email válida
#     And Digita uma senha válida
#     And Digita uma confirmação de senha válida
#     When Clica no botao Sign Up
#     Then Está logado na Pagina Principal com argumentos      ${EMAIL_NOVO}

# Cenário: Cadastro sem email
#     Given Vai até tela de Sign Up
#     # Given Abre a página de Sign Up
#     And Está na tela de Sign Up    
#     And Digita uma confirmação de email válida
#     And Digita uma senha válida
#     And Digita uma confirmação de senha válida
#     When Clica no botao Sign Up
#     Then Campo email está destacado
#     And Está na tela de Sign Up  

# Cenário: Cadastro sem senha
#     # Given Vai até tela de Sign Up
#     Given Abre a página de Sign Up
#     And Está na tela de Sign Up
#     And Digita um email válido
#     And Digita uma confirmação de email válida
#     And Digita uma confirmação de senha válida
#     When Clica no botao Sign Up
#     Then Campo senha está destacado
#     And Está na tela de Sign Up  

# Cenário: Cadastro com confirmação email inválido
#     # Given Vai até tela de Sign Up
#     Given Abre a página de Sign Up
#     And Está na tela de Sign Up
#     And Digita um email válido
#     And Digita uma confirmação de email inválida
#     And Digita uma senha válida
#     And Digita uma confirmação de senha válida
#     When Clica no botao Sign Up
#     Then Campo confirmação de email está destacado
#     And Está na tela de Sign Up  

# Cenário: Cadastro com confirmação de senha inválida
#     Given Vai até tela de Sign Up
#     # Given Abre a página de Sign Up
#     And Está na tela de Sign Up
#     And Digita um email válido
#     And Digita uma confirmação de email válida
#     And Digita uma senha válida
#     And Digita uma confirmação de senha inválida
#     When Clica no botao Sign Up
#     Then Campo confirmação de senha está destacado
#     And Está na tela de Sign Up

# Cenário: Usuário toque no botão Login
#     # Given Vai até tela de Sign Up
#     Given Abre a página de Sign Up
#     And Está na tela de Sign Up
#     When Clica no botao Login
#     Then Está na tela de Login

# Cenário: Cadastro com email já cadastrado
#     Given Vai até tela de Sign Up
#     # Given Abre a página de Sign Up
#     And Está na tela de Sign Up
#     And Digita um email já cadastrado
#     And Digita uma confirmação de email já cadastrado
#     And Digita uma senha válida
#     And Digita uma confirmação de senha válida
#     When Clica no botao Sign Up
#     Then Campo confirmação de senha está destacado
#     And Tem um texto informando que já está registrado
#     [Teardown]      Close Browser 

# *** Keywords ***
# Digita um email válido
#     Input Text    signup-email    ${EMAIL_NOVO}

# Digita um email inválido
#     Input Text    signup-email    ${EMAIL_INVALIDO}

# Digita um email já cadastrado
#     Input Text    signup-email    ${EMAIL_CERTO}

# Digita uma confirmação de email já cadastrado
#     Input Text    signup-email    ${EMAIL_CERTO}

# Digita uma confirmação de email válida
#     Input Text    signup-confirm-email    ${EMAIL_NOVO}

# Digita uma confirmação de email inválida
#     Input Text    signup-confirm-email    ${EMAIL_INVALIDO}

# Digita uma senha válida
#     Input Text    signup-password    ${PASSWORD_CERTO}

# Digita uma senha inválida
#     Input Text    signup-password    ${PASSWORD_INVALIDO}

# Digita uma confirmação de senha válida
#     Input Text    signup-confirm-password    ${PASSWORD_CERTO}

# Digita uma confirmação de senha inválida
#     Input Text    signup-confirm-password    ${PASSWORD_INVALIDO}


# Clica no botao Sign Up
#     Click Element	signup-button

# Clica no botao Login
#     Click Element	signup-login

# Campo email está destacado
#     ${isHighlighted}=       Run Keyword And Return Status  Wait Until Page Contains Element  //div[@id="signup-email" and contains(@class,'highlight')]  ${TIMEOUT AJAX}
#     Run Keyword If          ${isHighlighted}        is ${TRUE}

# Campo confirmação de email está destacado
#     ${isHighlighted}=       Run Keyword And Return Status  Wait Until Page Contains Element  //div[@id="signup-confirm-email" and contains(@class,'highlight')]  ${TIMEOUT AJAX}
#     Run Keyword If          ${isHighlighted}        is ${TRUE}
    
# Campo senha está destacado
#     ${isHighlighted}=       Run Keyword And Return Status  Wait Until Page Contains Element  //div[@id="signup-password" and contains(@class,'highlight')]  ${TIMEOUT AJAX}
#     Run Keyword If          ${isHighlighted}        is ${TRUE}
    
# Campo confirmação de senha está destacado
#     ${isHighlighted}=       Run Keyword And Return Status  Wait Until Page Contains Element  //div[@id="signup-confirm-password" and contains(@class,'highlight')]  ${TIMEOUT AJAX}
#     Run Keyword If          ${isHighlighted}        is ${TRUE}

# Tem um texto informando que já está registrado
#     Page Should Contain Element     signup-tips
