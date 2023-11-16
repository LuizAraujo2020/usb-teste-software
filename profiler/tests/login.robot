*** Settings ***
Documentation   Simple example using SeleniumLibrary.
Library         SeleniumLibrary

*** Variables ***
${LOGIN_URL}        http://127.0.0.1:5500/profiler/index.html
${BROWSER}          Chrome
${INPUT_EMAIL}      luiz@email.com
${INPUT_PASSWORD}   password123


*** Test Cases ***
Dado que fulo precisa fazer o cadastro
    Open Browser To Login Page
    Input Email     ${INPUT_EMAIL}
    Input Password  ${INPUT_PASSWORD}
    Click Login Button


*** Keywords ***
Open Browser To Login Page
    Open Browser    ${LOGIN_URL}    ${BROWSER}

Input Email
    [Arguments]    ${INPUT_EMAIL}
    Input Text    login-email    ${INPUT_EMAIL}

Input Password
    [Arguments]    ${INPUT_PASSWORD}
    Input Text    login-password    ${INPUT_PASSWORD}

Click Login Button
    Click Element	login-button

Input DDI
    Click Element	class:selected-dial-code
    Click Element	xpath: //*[contains(text(), "Brazil (Brasil)")]

input Phone
    [Arguments]    ${inputPhone}
    Input Text     inputPhone    ${inputPhone}