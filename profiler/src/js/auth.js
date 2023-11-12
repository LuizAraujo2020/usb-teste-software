
const loginButton = document.getElementById('login-button')
const loginEmail = document.getElementById('login-email')
const loginPassword = document.getElementById('login-password')

const signupButton = document.getElementById('signup-button')
const signupEmail = document.getElementById('signup-email')
const signupConfirmEmail = document.getElementById('signup-confirm-email')
const signupPassword = document.getElementById('signup-password')
const signupConfirmPassword = document.getElementById('signup-confirm-password')

let currentUser;

function loadJSON() {
    // const users = api.fetchProfileData();
    const users = fetchJSON('./src/db/main.json');

    // console.table(users);
    console.log(users);

    // const parsed = JSON.parse(users);

    // loginButton.innerHTML = users[0].name;
    // console.log(parsed);

}

// loginButton.addEventListener('click', () => {
function loginButtonOnClick() {
    console.log('TODOCOOOOOO');

    const enteredEmail = loginEmail.value;
    const enteredPassword = loginPassword.value;

    for (let index = 0; index < mocks.length; index++) {
        const element = mocks[index];

        if (enteredEmail === element.email && enteredPassword === element.password) {
            currentUser = index;

            window.location = './src/main.html';
        } 
        
        if (enteredEmail !== element.email) {
            loginEmail.classList.add('highlight');
        } 
        
        if (enteredPassword !== element.password) {
            loginPassword.classList.add('highlight');
        }
    }
};

function signupButtonOnClick() {

    if (signupEmail.value === signupConfirmEmail.value && signupPassword.value === signupConfirmPassword.value) {
        let usr = new User()
        usr.email = signupEmail.value;
        usr.password = signupPassword.value;

        mocks.push(usr);

        currentUser = mocks.length - 1;
        window.location = './main.html';
    } 
    
    if (signupEmail.value !== signupConfirmEmail.value) {
        signupEmail.classList.add('highlight');
        signupConfirmEmail.classList.add('highlight');
    } else {
        signupEmail.classList.remove('highlight');
        signupConfirmEmail.classList.remove('highlight');
    }
    
    if (signupPassword.value !== signupConfirmPassword.value) {
        signupPassword.classList.add('highlight');
        signupConfirmPassword.classList.add('highlight');
    } else {
        signupPassword.classList.remove('highlight');
        signupConfirmPassword.classList.remove('highlight');
    }
};