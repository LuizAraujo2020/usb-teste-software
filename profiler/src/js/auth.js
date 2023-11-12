
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
    const users = fetchJSON('./src/db/main.json');

    console.log(users);
}

function loginButtonOnClick() {
    const enteredEmail = loginEmail.value;
    const enteredPassword = loginPassword.value;

    for (let index = 0; index < mocks.length; index++) {
        const element = mocks[index];

        
        if (enteredEmail.includes("@" == false) || enteredEmail.includes("." == false)) {
            loginEmail.classList.add('highlight');
            return
        }
        
        if (enteredPassword.length < 8) {
            loginPassword.classList.add('highlight');
            return
        }


        if (enteredEmail === element.email && enteredPassword === element.password) {
            currentUser = index;
            localStorage.setItem('currentUser', index);
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


//===========

const mainName = document.getElementById('main-name');
const mainJob = document.getElementById('main-job');
const mainImage = document.getElementById('main-image');
const mainYears = document.getElementById('main-experience-year');
const mainYearsText = document.getElementById('main-experience-text');
const mainHighlight1 = document.getElementById('main-highlight1');
const mainHighlight2 = document.getElementById('main-highlight2');
const mainAbout = document.getElementById('main-about');
const mainApps = document.getElementById('main-apps');
const mainCertifications = document.getElementById('certifications');
const mainRepositories = document.getElementById('repositories');
const mainContacts = document.getElementById('contacts');

(function () {

    const cur = localStorage.getItem('currentUser');

    let usr = mocks[cur];
    console.log(mocks.length);
    console.log(usr);

    if (usr.name === null || usr.name === undefined) {
        return
    }

    mainImage.src = usr.image;
    mainName.innerHTML = usr.name;
    mainJob.innerHTML = usr.job;
    mainYears.innerHTML = `${usr.experience}+`;

    if (usr.experience <= 1) {
        mainYearsText.innerHTML = 'Year Experience';
    }

    mainHighlight1.innerHTML = createHighlight(usr.highlight1.title, usr.highlight1.text);
    mainHighlight2.innerHTML = createHighlight(usr.highlight2.title, usr.highlight2.text);

    mainAbout.innerHTML = usr.about;

    mainApps.innerHTML = createMainApps(usr.apps);
    
    mainCertifications.innerHTML = createMainCertifications(usr.certifications);
    
    // getGitHubUser(usr.github);
    // getUser(usr.github);
    // mainRepositories.innerHTML = createMainRepositories();

    mainContacts.innerHTML = createMainContacts(usr.contacts);
})();

function createHighlight(title, text) {
    return `<h3>${title}</h3><p>${text}</p>`
}

function createMainApps(apps) {
    let result = '<h1>Top Apps</h1>';

    apps.forEach(element => {
        result += `<div class="card app">
            <img src="${element.image}" alt="${element.title}">
            <div class="app-content">
                <h3>${element.title}</h3>
                <p>${element.text}</p>
            </div>
        </div>`;
    });
    return result;
}

function createMainCertifications(certifications) {
    let result = '';

    certifications.forEach(element => {
        result += `<div class="card certification">
        <img src="${element.image}" alt="${element.title}">
        <p>${element.title}</p>
    </div>`;
    });
    return result;
}

function createMainRepositories() {
    let result = '';

    console.table(githubUser);
    githubUser.repos.forEach(element => {
        result += `<div class="card repository">
            <img src="./resources/placeholder.png" alt="Click here to change image">
            <p>${element.name}</p>
        </div>`;
    });
    return result;
}

function createMainContacts(conts) {
    let result = `<h1>Ways To Contact Me</h1>
    <p>Here are some of my  contact info, social and professional network</p>`;

    conts.forEach(element => {
        result += `<div class="card contact">
            <h3>${element.title}</h3>
            <p>${element.text}</p>
        </div>`;
    });
    return result;
}

function getGitHubUser(user) {
    getUser(user);
}