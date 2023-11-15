const loginTips = document.getElementById('login-tips');

const loginEmail = document.getElementById('login-email')
const loginPassword = document.getElementById('login-password')

const loginButton = document.getElementById('login-button')

let isEmailValid = false;
let isPasswordValid = false;


//=========== INTERACTIONS ===========

function handleEmailInput() {
    const valueEmail = loginEmail.value;

    isEmailValid = checkEmailField(valueEmail);

    changeStateEmail(isEmailValid);

    if (isEmailValid == true && isPasswordValid == true) {
        changeStateButton(true);
        loginTips.innerText = ' ';
    } else {
        changeStateButton(false);
    }
}

function handlePasswordInput() {
    const valuePassword = loginPassword.value;
    

    isPasswordValid = checkPasswordField(valuePassword);

    changeStatePassword(isPasswordValid);

    if (isEmailValid == true && isPasswordValid == true) {
        changeStateButton(true);
        loginTips.innerText = ' ';
    } else {
        changeStateButton(false);
    }
}

function loginButtonOnClick() {
    if (isEmailValid != true || isPasswordValid != true) { return }

    const enteredEmail = loginEmail.value;
    const enteredPassword = loginPassword.value;

    if (checkCredentialsAreRight(enteredEmail, enteredPassword) == true) {
        gotoMainPage(enteredEmail);    
    }
};


//=========== VALIDATION ===========

//---- Email ----

function checkEmailCharacatersIsValid(email) {
    if (email.includes('@') && email.includes('.')) {
        return true
    }

    return false
}

function checkEmailLengthIsValid(email) {
    if (email.length >= 5) {
        return true
    }

    return false
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
        return true
    }

    return false
}


//---- USER ----
function checkCredentialsAreRight(email, password) {
    let wrongEmail = true;
    let wrongPassword = true;

    for (let index = 0; index < mocks.length; index++) {
        const element = mocks[index];

        if (email == element.email) {
            wrongEmail = false

            if (password === element.password) {
                return true;
            }
        } 
    }

    if (wrongEmail == true) {
        loginEmail.classList.add('highlight');
        loginTips.innerText = 'Email not registered yet!\nClick in Sign up.';
    }
    
    if (wrongPassword == true) {
        loginEmail.classList.remove('highlight');
        loginPassword.classList.add('highlight');
        loginTips.innerText = 'Something went wrong!\nCheck the inserted password.';
    }
    return false;
}

//=========== CHANGE STATES ===========

//---- BUTTON ----
function changeStateButton(enabled) {
    if (enabled === true) {
        loginButton.classList.remove("disabled");
    } else {
        loginButton.classList.add("disabled");
    }
}

//---- EMAIL ----
function changeStateEmail(isValid) {
    if (isValid === true) {
        loginEmail.classList.remove('highlight');

        if (checkPasswordField === true) {
            loginButton.classList.remove("disabled");
            return
        }
        return
    }
    loginButton.classList.add("disabled");
    loginEmail.classList.add('highlight');
}

//---- PASSWORD ----
function changeStatePassword(isValid) {
    if (isValid === true) {
        loginPassword.classList.remove('highlight');

        if (checkEmailField === true) {
            loginButton.classList.remove("disabled");
            return
        }
        return
    }
    loginButton.classList.add("disabled");
    loginPassword.classList.add('highlight');
}

//=========== MESSAGES ===========
function showErrorMessage(msg) {
    loginTips.innerText = msg;
}

function dismissErrorMessage() {
    loginTips.innerText = ' ';
}

//=========== NAVIGATION ===========

function gotoSignupPage() {
    window.location = `./signup.html`;
}

function gotoSearchPage() {
    window.location = `./search.html`;
}

function gotoMainPage(email) {
    localStorage.setItem("logged", true);
    window.location = `./src/main.html?email=${email}&isLoggedIn=true`;
}