const signupTips = document.getElementById("signup-tips");

const signupEmail = document.getElementById("signup-email");
const signupConfirmEmail = document.getElementById("signup-confirm-email");
const signupPassword = document.getElementById("signup-password");
const signupConfirmPassword = document.getElementById("signup-confirm-password");

const signupButton = document.getElementById("signup-button");


let signupState = {
    "signup-email": false,
    "signup-confirm-email": false,
    "signup-password": false,
    "signup-confirm-password": false,
    "signup-button": false
}

//=========== INTERACTIONS ===========

function handleEmailInput(id) {
    const valueEmail = document.getElementById(id).value;

    signupState[id] = checkEmailField(valueEmail);

    changeStateInput(id, signupState[id]);

    checkSignupState();
}

function handlePasswordInput(id) {
    const valuePassword = document.getElementById(id).value;

    signupState[id] = checkPasswordField(valuePassword);

    changeStateInput(id, signupState[id]);

    checkSignupState();
}

function signupButtonOnClick() {
    if (signupState["signup-email"] == false || signupState["signup-confirm-email"] == false || signupState["signup-password"] == false || signupState["signup-confirm-password"] == false) {
        return
    }
    
    const enteredEmail = signupEmail.value;
    const enteredPassword = signupPassword.value;

    if (checkDuplicatedUser(enteredEmail) == false) {
        showErrorMessage('\nEmail aready registered.');
        return
    }

    const before = mocks.length;
    console.log(`BEFORE:  ${before}`);
    let usr = mockEmpty;
    
    usr.email = enteredEmail;
    usr.password = enteredPassword;
    
    mocks.push(usr);


    var dictstring = JSON.stringify(mocks);

    console.log(`AFTER:  ${mocks.length}`);

    localStorage.setItem('mocks', dictstring);
    
    if (before < mocks.length) {
        gotoMainPage(signupEmail.value);    
    } 
};

function handleLoseFocus() {
    checkSignupState();
    
    handleEmailInput("signup-email");
    handleEmailInput("signup-confirm-email");
    handlePasswordInput("signup-password");
    handlePasswordInput("signup-confirm-password");
}


function checkEmailCharacatersIsValid(email) {
    if (email.includes('@') && email.includes('.')) {
        showErrorMessage(' ');
        return true
    }

    showErrorMessage('\nEmail should be in the format: \n"abc@email.com". \nOr something like that.');
    return false
}

function checkEmailLengthIsValid(email) {
    if (email.length >= 5) {
        return true
    }

    return false
}

function checkDuplicatedUser(email) {

    for (let index = 0; index < mocks.length; index++) {
        const element = mocks[index];

        if (email == element.email) {
            showErrorMessage('\nEmail already registered, try to login.');

            return false
        }
    }

    return true
}


function checkEmailField(email) {
    if (checkEmailCharacatersIsValid(email) === false) { return false }
    if (checkEmailLengthIsValid(email) === false) { return false }

    return true;
}

//---- PASSWORD ----
function checkPasswordField(email) {
    return checkPasswordLengthIsValid(email);
}

function checkPasswordLengthIsValid(password) {
    if (password.length >= 8) {

        signupTips.innerText = ' ';
        return true
    }

    showErrorMessage('\nPassword should be 8 characters long.');
    return false
}


function checkSignupState() {
    if (signupState["signup-email"] == true && signupState["signup-confirm-email"] == true && signupState["signup-password"] == true && signupState["signup-confirm-password"] == true) {
        
        if (signupPassword.value != signupConfirmPassword.value) {
            signupPassword.classList.add('highlight');
            signupConfirmPassword.classList.add('highlight');
            
            signupState["signup-password"] = false;
            signupState["signup-confirm-password"] = false;

            showErrorMessage('\nThe passwords should be the same.');

            changeStateButton(false);
            return false;
        }

        signupEmail.classList.remove('highlight');
        signupConfirmEmail.classList.remove('highlight');
            
        signupState["signup-email"] = true;
        signupState["signup-confirm-email"] = true;

        signupPassword.classList.remove('highlight');
        signupConfirmPassword.classList.remove('highlight');
            
        signupState["signup-password"] = true;
        signupState["signup-confirm-password"] = true;

        signupTips.innerText = ' ';

        changeStateButton(true);

        return true;
    } else {        
        changeStateButton(false);
        return false;
    }
}



//=========== CHANGE STATES ===========

//---- BUTTON ----
function changeStateButton(enabled) {
    if (enabled === true) {
        signupButton.disabled = false;
        signupButton.classList.remove('disabled');
    } else {
        signupButton.disabled = true;
        signupButton.classList.add('disabled');
    }
}

//---- INPUTS ----
function changeStateInput(id, isValid) {
    const emailInput = document.getElementById(id);

    if (isValid == true) {
        emailInput.classList.remove('highlight');
    } else {
        emailInput.classList.add('highlight');
    }
    
    checkSignupState();
}


//=========== NAVIGATION ===========

function gotoLoginPage() {
    window.location = `../index.html`;
}

function gotoSearchPage() {
    window.location = `./search.html`;
}

function gotoMainPage(email) {
    // localStorage.setItem('logged', true);
    window.location = `./main.html?email=${email}&isLoggedIn=true`;
}


//=========== MESSAGES ===========

function showErrorMessage(msg) {
    signupTips.innerText = msg;
}

function dismissErrorMessage() {
    signupTips.innerText = ' ';
}