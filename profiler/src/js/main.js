/// Pegar params da URL -> ?email=email@email.com
const queryString = window.location.search;
/// Parsear os params
const urlParams = new URLSearchParams(queryString);

const currentEmail = urlParams.get('email');
let logged = urlParams.get('isLoggedIn');

let currentUser;
let isLoggedIn;
let usersFrom;

(function() {
    let asdadsas = localStorage.getItem('mocks');

    usersFrom = JSON.parse(asdadsas);
})();

(function() {

    if (logged == "true") {
        isLoggedIn = true

    } else {
        isLoggedIn = false;
    }

    console.log(`LOGGED: ${isLoggedIn}`);
})();

//=========== INIT ===========

getUserByEmail(currentEmail);

function getUserByEmail(email) {
    currentUser = usersFrom.find((element) => element.email == email);

    if (currentUser == undefined) {
        gotoSearchPage()
    }
}

function loadJSON() {
    const users = fetchJSON('./src/db/main.json');

    console.log(users);
}


const mainLoginInfo = document.getElementById('main-loginInfo');

const mainName = document.getElementById('main-name');
const mainJob = document.getElementById('main-job');
const mainImage = document.getElementById('main-image');
const mainYears = document.getElementById('main-experience-year');
const mainYearsText = document.getElementById('main-experience-text');
const mainHighlight1 = document.getElementById('main-highlight1');
const mainHighlight1h3 = document.getElementById("main-highlight1-h3");
const mainHighlight1p = document.getElementById('main-highlight1-p');
const mainHighlight2 = document.getElementById('main-highlight2');
const mainHighlight2h3 = document.getElementById('main-highlight2-h3');
const mainHighlight2p = document.getElementById('main-highlight2-p');
const mainAbout = document.getElementById('main-about');
const mainApps = document.getElementById('main-apps');
const mainCertifications = document.getElementById('certifications');
const mainRepositories = document.getElementById('repositories');
const mainContacts = document.getElementById('contacts');

createAuthButtons();
updateScreen();


//=========== LOGOUT ===========

const loginInfo = document.getElementById('main-loginInfo');

function logout() {
    localStorage.setItem('logged', false);
    isLoggedIn = false;

    createAuthButtons();
}

function createAuthButtons() {

    if (isLoggedIn == false || isLoggedIn == null || isLoggedIn == undefined) { 
        mainLoginInfo.innerHTML = `
        <button onclick="gotoSearchPage()" type="submit"><h4>Search</h4></button>
        <button onclick="gotoLoginPage()" type="submit"><h4>Login</h4></button>
        <button onclick="gotoSignUpPage()" type="submit"><h4>Sign up</h4></button>
        `;
     } else {
        mainLoginInfo.innerHTML = `
        <button onclick="logout()" type="submit"><h4>Logout</h4></button>
        `;
     }
}


function updateScreen() {
    if (currentUser == undefined) {
        gotoSearchPage()
    }

    if (currentUser.image == null || currentUser.image == undefined || currentUser.image == "") {
        currentUser.image = "./resources/placeholder.png";
    }
    if (currentUser.name == null) {
        currentUser.name = "Insert name";
    }

    mainImage.src = currentUser.image;
    mainName.innerHTML = currentUser.name;
    mainJob.innerHTML = currentUser.job;
    mainYears.innerHTML = `${currentUser.experience}+`;

    if (currentUser.experience <= 1) {
        mainYearsText.innerHTML = 'Year Experience';
    } else {
        mainYearsText.innerHTML = 'Years Experience';
    }

    mainHighlight1.innerHTML = createHighlight(currentUser.highlight1.title, currentUser.highlight1.text);
    mainHighlight2.innerHTML = createHighlight(currentUser.highlight2.title, currentUser.highlight2.text);

    mainAbout.innerHTML = currentUser.about;

    mainApps.innerHTML = createMainApps(currentUser.apps);
    
    mainCertifications.innerHTML = createMainCertifications(currentUser.certifications);

    mainContacts.innerHTML = createMainContacts(currentUser.contacts);
}

function createHighlight(title, text) {
    return `<h3>${title}</h3><p>${text}</p>`
}

function createMainApps(apps) {
    let result = `<h1>Top Apps</h1>`;
    
    apps.forEach(element => {
        result += `<div class="card app">
            <img onclick="changeTextFromID('app-img-${element.title}', 'Insert an URL to the App image.')" id="app-img-${element.title}" src="${element.image}" alt="${element.title}">
            <div class="app-content">
                <h3 onclick="changeTextFromID('app-name-${element.title}', 'Insert the name of the App.')" id="app-name-${element.title}">${element.title}</h3>
                <p onclick="changeTextFromID('app-text-${element.title}', 'Insert a small description of the App.')" id="app-text-${element.title}">${element.text}</p>
            </div>
        </div>`;
    });
    return result;
}

function createMainCertifications(certifications) {
    let result = '';

    certifications.forEach(element => {
        result += `<div class="card certification">
        <img onclick="changeTextFromID('certification-img-${element.title}', 'Insert an URL to the Certification image.')" id="certification-img-${element.title}" src="${element.image}" alt="${element.title}">
        <p onclick="changeTextFromID('certification-p-${element.title}', 'Insert name of the course')" id='certification-p-${element.title}'>${element.title}</p>
    </div>`;
    });

    return result;
}


function createMainContacts(conts) {
    let result = `<h1>Ways To Contact Me</h1>
    <p>Here are some of my  contact info, social and professional network</p>`;

    conts.forEach(element => {
        result += `<div class="card contact">
            <h3 onclick="changeTextFromID('contact-h3-${element.title}', 'Insert an email, link, phone number...')" id="contact-h3-${element.title}">${element.title}</h3>
            <p onclick="changeTextFromID('contact-p-${element.title}', 'Insert an description.')" id="contact-p-${element.title}">${element.text}</p>
        </div>`;
    });
    return result;
}

function getGitHubUser(user) {
    getUser(user);
}


/*========== EDIT FIELDS ==========*/

function isTextInvalid(text) {
    const input = text.trim()

    if (input == null || input === null || input == '' || input == ' ' || input.length <= 1) {
        return true
    }

    return false
}

mainName.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert your name');
    if (isTextInvalid(input)) {
        return
    }

    usersFrom[currentUser].name = input;
    mainName.innerText = usersFrom[currentUser].name;
});

mainJob.addEventListener("click", () => {
    if (isLoggedIn != true) { return }
    
    const input = prompt('Insert your job title');
    if (isTextInvalid(input)) {
        return
    }

    usersFrom[currentUser].job = input;
    mainJob.innerText = usersFrom[currentUser].job;
});

mainImage.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert an URL for an image');
    if (isTextInvalid(input)) {
        return
    }

    usersFrom[currentUser].image = input;
    mainImage.src = usersFrom[currentUser].image;
});

mainYears.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert how many years you have been working');
    if (input < 0 || input > 60) {
        return
    }

    usersFrom[currentUser].experience = input;
    mainYears.innerText = usersFrom[currentUser].experience;

    if (usersFrom[currentUser].experience <= 1) {
        mainYearsText.innerHTML = 'Year Experience';
    } else {
        mainYearsText.innerHTML = 'Years Experience';
    }
});

mainHighlight1.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert title to highlight.');
    if (isTextInvalid(input)) {
        return
    }
    usersFrom[currentUser].highlight1.title = input;

    const input2 = prompt('Insert a description of the highlight');
    if (isTextInvalid(input2)) {
        return
    }
    mousersFromcks[currentUser].highlight1.text = input2;

    mainHighlight1.innerHTML = `<h3>${usersFrom[currentUser].highlight1.title}</h3>
    <p>${usersFrom[currentUser].highlight1.text}</p>`;
});

mainHighlight2.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert title to highlight.');
    if (isTextInvalid(input)) {
        return
    }
    usersFrom[currentUser].highlight2.title = input;

    const input2 = prompt('Insert a description of the highlight');
    if (isTextInvalid(input2)) {
        return
    }
    usersFrom[currentUser].highlight2.text = input2;

    mainHighlight2.innerHTML = `<h3>${usersFrom[currentUser].highlight2.title}</h3>
    <p>${usersFrom[currentUser].highlight2.text}</p>`;
});

mainAbout.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert a small text to describe yourself.');
    if (isTextInvalid(input)) {
        return
    }

    usersFrom[currentUser].about = input;
    mainAbout.innerText = usersFrom[currentUser].about;
});

function addNewApp(id) {
    if (isLoggedIn != true) { return }

    let obj = {
        "image": "",
        "title": "",
        "text": "",
    }

    const input = prompt('Insert an URL to the App image');
    if (isTextInvalid(input)) {
        return
    }
    obj.image = input;

    const input2 = prompt('Insert the name of the App');
    if (isTextInvalid(input2)) {
        return
    }
    obj.title = input2;

    const input3 = prompt('Insert description of the App');
    if (isTextInvalid(input3)) {
        return
    }

    obj.text = input3;

    usr.apps.push(obj);

    mainApps.innerHTML = createMainApps(usr.apps);
};

const carAppExample = document.getElementById('card-app-example');
const appImg = document.getElementById('app-img');
const appName = document.getElementById('app-name');
const appText = document.getElementById('app-text');

carAppExample.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert an URL to the App image');
    if (isTextInvalid(input)) {
        return
    }
    appImg.innerText = input;

    const input2 = prompt('Insert the name of the App');
    if (isTextInvalid(input2)) {
        return
    }
    appName.innerText = input2;

    const input3 = prompt('Insert description of the App');
    if (isTextInvalid(input3)) {
        return
    }

    appText.innerText = input3;
});

function changeTextFromID(id, text) {
    if (isLoggedIn != true) { return }

    const element = document.getElementById(id);

    const input = prompt(text);
    if (isTextInvalid(input)) {
        return
    }

    element.innerText = input;
};

//=========== NAVIGATION ===========

function gotoLoginPage() {
    window.location = `../index.html`;
}

function gotoSignUpPage() {
    window.location = `./signup.html`;
}

function gotoSearchPage() {
    window.location = `./search.html`;
}