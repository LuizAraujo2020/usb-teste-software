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

    const enteredEmail = loginEmail.value;
    const enteredPassword = loginPassword.value;

    if (checkCredentialsAreRight(enteredEmail, enteredPassword) == true) {
        gotoMainPage(email);    
    }

    if (signupEmail.value == signupConfirmEmail.value && signupPassword.value == signupConfirmPassword.value) {
        let usr = new User()
        usr.email = signupEmail.value;
        usr.password = signupPassword.value;

        mocks.push(usr);

        // signupTips.innerText = ' ';

        console.log('OPAAAAAAA');

        currentUser = mocks.length - 1;

        localStorage.setItem('currentUser', currentUser);
        localStorage.setItem('logged', true);
        isLoggedIn = true;
        window.location = `./main.html?email=${signupEmail.value}`;
    } 

    // if (signupEmail.value === '' || signupConfirmEmail.value === '' || signupPassword.value === '' || signupConfirmPassword.value === '') {
    //     signupTips.innerText = 'Warning, fill all the fields!';
    //     return
    // }
    
    if (signupEmail.value !== signupConfirmEmail.value) {
        signupEmail.classList.add('highlight');
        signupConfirmEmail.classList.add('highlight');
        signupTips.innerText = 'Hey, the emails must be equal!';
    } else {
        signupEmail.classList.remove('highlight');
        signupConfirmEmail.classList.remove('highlight');
    }
    
    if (signupPassword.value !== signupConfirmPassword.value) {
        signupPassword.classList.add('highlight');
        signupConfirmPassword.classList.add('highlight');
        signupTips.innerText = 'Oops, both passwords must match!';
    } else {
        signupPassword.classList.remove('highlight');
        signupConfirmPassword.classList.remove('highlight');
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


function checkSignupState() {
    if (signupState["signup-email"] == true && signupState["signup-confirm-email"] == true && signupState["signup-password"] == true && signupState["signup-confirm-password"] == true) {
        if (signupEmail.value != signupConfirmEmail.value) {
            signupEmail.classList.add('highlight');
            signupConfirmEmail.classList.add('highlight');

            signupState["signup-email"] = false;
            signupState["signup-confirm-email"] = false;

            signupTips.innerText = '\nEntered emails should match.';

            changeStateButton(false);
            return false;
        }
        
        if (signupPassword.value != signupConfirmPassword.value) {
            signupPassword.classList.add('highlight');
            signupConfirmPassword.classList.add('highlight');
            
            signupState["signup-password"] = false;
            signupState["signup-confirm-password"] = false;

            signupTips.innerText = '\nThe passwords should be the same.';

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

//---- EMAIL ----
function gotoLoginPage() {
    window.location = `../index.html`;
}

function gotSearchPage() {
    window.location = `./search.html`;
}

function gotoMainPage(email) {
    localStorage.setItem('logged', true);
    window.location = `./src/main.html?email=${email}`;
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

//=========== MESSAGES ===========
function showErrorMessage(msg) {
    loginTips.innerText = msg;
}

function dismissErrorMessage() {
    loginTips.innerText = ' ';
}