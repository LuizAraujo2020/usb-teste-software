/// Pegar params da URL -> ?email=email@email.com
const queryString = window.location.search;
/// Parsear os params
const urlParams = new URLSearchParams(queryString);

const currentEmail = urlParams.get('email');
let logged = urlParams.get('isLoggedIn');

let currentIndex;
let isLoggedIn;
let usersFrom;

(function() {
    let asdadsas = localStorage.getItem('mocks');
    usersFrom = JSON.parse(asdadsas);
})();

(function() {

    if (logged == "true" || logged == true) {
        isLoggedIn = true

    } else {
        isLoggedIn = false;
    }
})();


//=========== INIT ===========

getUserByEmail(currentEmail);

function getUserByEmail(email) {
    // usersFrom[currentIndex] = usersFrom.find((element) => element.email == email);

    for (let index = 0; index < usersFrom.length; index++) {
        const element = usersFrom[index];

        if (element.email == email) {
            currentIndex = index;
        }
    }

    if (currentIndex == null || currentIndex == undefined) {
        gotoSearchPage()
    }
}


const mainLoginInfo = document.getElementById('main-loginInfo');

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

createAuthButtons();
updateScreen();


//=========== LOGOUT ===========

const loginInfo = document.getElementById('main-loginInfo');

function logout() {
    // localStorage.setItem('logged', false);
    isLoggedIn = false;

    createAuthButtons();
}

function createAuthButtons() {
    storageLoadUsers();

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
    storageLoadUsers();

    if (usersFrom[currentIndex] == undefined || usersFrom[currentIndex] == null) {
        gotoSearchPage()
    }

    if (usersFrom[currentIndex].image == null || usersFrom[currentIndex].image == undefined || usersFrom[currentIndex].image == "") {
        usersFrom[currentIndex].image = "./resources/placeholder.png";
    }
    if (usersFrom[currentIndex].name == null) {
        usersFrom[currentIndex].name = "Insert name";
    }

    mainImage.src = usersFrom[currentIndex].image;
    mainName.innerHTML = usersFrom[currentIndex].name;
    mainJob.innerHTML = usersFrom[currentIndex].job;
    mainYears.innerHTML = `${usersFrom[currentIndex].experience}+`;

    if (usersFrom[currentIndex].experience <= 1) {
        mainYearsText.innerHTML = 'Year Experience';
    } else {
        mainYearsText.innerHTML = 'Years Experience';
    }

    mainHighlight1.innerHTML = createHighlight(usersFrom[currentIndex].highlight1.title, usersFrom[currentIndex].highlight1.text);
    mainHighlight2.innerHTML = createHighlight(usersFrom[currentIndex].highlight2.title, usersFrom[currentIndex].highlight2.text);

    mainAbout.innerHTML = usersFrom[currentIndex].about;

    mainApps.innerHTML = createMainApps(usersFrom[currentIndex].apps);
    
    mainCertifications.innerHTML = createMainCertifications(usersFrom[currentIndex].certifications);

    mainContacts.innerHTML = createMainContacts(usersFrom[currentIndex].contacts);
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
        <img onclick="changeURLFromID('certification-img-${element.title}', 'Insert an URL to the Certification image.')" id="certification-img-${element.title}" src="${element.image}" alt="${element.title}">
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

// function getGitHubUser(user) {
//     getUser(user);
// }


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
    
    usersFrom[currentIndex].name = input;
    mainName.innerText = usersFrom[currentIndex].name;

    storageSet(usersFrom, 'mocks');
});

mainJob.addEventListener("click", () => {
    if (isLoggedIn != true) { return }
    
    const input = prompt('Insert your job title');
    if (isTextInvalid(input)) {
        return
    }

    usersFrom[currentIndex].job = input;
    mainJob.innerText = usersFrom[currentIndex].job;

    storageSet(usersFrom, 'mocks');
});

mainImage.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert an URL for an image');
    if (isTextInvalid(input)) {
        return
    }

    usersFrom[currentIndex].image = input;
    mainImage.src = usersFrom[currentIndex].image;

    storageSet(usersFrom, 'mocks');
});

mainYears.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert how many years you have been working');
    if (input < 0 || input > 60) {
        return
    }

    usersFrom[currentIndex].experience = input;
    mainYears.innerText = usersFrom[currentIndex].experience;

    if (usersFrom[currentIndex].experience <= 1) {
        mainYearsText.innerHTML = 'Year Experience';
    } else {
        mainYearsText.innerHTML = 'Years Experience';
    }

    storageSet(usersFrom, 'mocks');
});

mainHighlight1.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert title to highlight.');
    if (isTextInvalid(input)) {
        return
    }
    usersFrom[currentIndex].highlight1.title = input;

    const input2 = prompt('Insert a description of the highlight');
    if (isTextInvalid(input2)) {
        return
    }
    usersFrom[currentIndex].highlight1.text = input2;

    mainHighlight1.innerHTML = `<h3>${usersFrom[currentIndex].highlight1.title}</h3>
    <p>${usersFrom[currentIndex].highlight1.text}</p>`;

    storageSet(usersFrom, 'mocks');
});

mainHighlight2.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert title to highlight.');
    if (isTextInvalid(input)) {
        return
    }
    usersFrom[currentIndex].highlight2.title = input;

    const input2 = prompt('Insert a description of the highlight');
    if (isTextInvalid(input2)) {
        return
    }
    usersFrom[currentIndex].highlight2.text = input2;

    mainHighlight2.innerHTML = `<h3>${usersFrom[currentIndex].highlight2.title}</h3>
    <p>${usersFrom[currentIndex].highlight2.text}</p>`;

    storageSet(usersFrom, 'mocks');
});

mainAbout.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert a small text to describe yourself.');
    if (isTextInvalid(input)) {
        return
    }

    usersFrom[currentIndex].about = input;
    mainAbout.innerText = usersFrom[currentIndex].about;

    storageSet(usersFrom, 'mocks');
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

    usersFrom[currentIndex].apps.push(obj);

    mainApps.innerHTML = createMainApps(usersFrom[currentIndex].apps);

    storageSet(usersFrom, 'mocks');
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

    storageSet(usersFrom, 'mocks');
});

function changeURLFromID(id, url) {
    if (isLoggedIn != true) { return }

    const element = document.getElementById(id);

    const input = prompt(text);
    if (isTextInvalid(input)) {
        return
    }

    element.src = input;
};


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
    window.location = '../index.html';
}

function gotoSignUpPage() {
    window.location = './signup.html';
}

function gotoSearchPage() {
    window.location = './search.html';
}

//=========== PERSISTENCE ===========

function storageSet() {
    const stringfied = JSON.stringify(usersFrom);
    localStorage.setItem('mocks', stringfied);
}

function storageLoadUsers() {
    const stringfied = localStorage.getItem('mocks');
    usersFrom = JSON.parse(stringfied);
}