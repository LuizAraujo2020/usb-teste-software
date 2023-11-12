
const loginButton = document.getElementById('login-button')
const loginEmail = document.getElementById('login-email')
const loginPassword = document.getElementById('login-password')


function loadJSON() {
    // const users = api.fetchProfileData();
    const users = fetchJSON('./src/db/main.json');

    // console.table(users);
    console.log(users);

    // const parsed = JSON.parse(users);

    // loginButton.innerHTML = users[0].name;
    // console.log(parsed);

}

loginButton.addEventListener('click', () => {

    const enteredEmail = loginEmail.value;
    const enteredPassword = loginPassword.value;

    if (enteredEmail === mock.email && enteredPassword === mock.password) {
        window.location = './src/main.html';

    } 
    
    if (enteredEmail !== mock.email) {
        loginEmail.classList.add('highlight');
    } 
    
    if (enteredPassword !== mock.password) {
        loginPassword.classList.add('highlight');
    } 
});

