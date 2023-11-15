/// Pegar params da URL -> ?email=email@email.com
const queryString = window.location.search;
/// Parsear os params
const urlParams = new URLSearchParams(queryString);
const currentEmail = urlParams.get('email');

let currentUser;
let isLoggedIn;

(function () {
    if (localStorage.getItem("currentUser") === null) {
        localStorage.setItem('currentUser', -1);
        currentUser = -1;
    } else {
        currentUser = localStorage.getItem("currentUser");
    }

    // if (localStorage.getItem("logged") === null) {
    //     localStorage.setItem('logged', false);
    //     isLoggedIn = false;
    //     getIndexByEmail();
    // } else {
    //     isLoggedIn = localStorage.getItem("logged");
    // }
    if (localStorage.getItem("logged") == true) {
        isLoggedIn = true
    } else {
        localStorage.setItem('logged', false);
        isLoggedIn = false;
        getIndexByEmail();
    }
})();


// (function () {
//     if (isLoggedIn == false) {
//         currentEmail
//     }
// })();


let signupState = {
    "signup-email": false,
    "signup-confirm-email": false,
    "signup-password": false,
    "signup-confirm-password": false,
    "signup-button": false
}
const signupTips = document.getElementById('"signup-tips');

const signupButton = document.getElementById('signup-button')
const signupEmail = document.getElementById('signup-email')
const signupConfirmEmail = document.getElementById('signup-confirm-email')
const signupPassword = document.getElementById('signup-password')
const signupConfirmPassword = document.getElementById('signup-confirm-password')

function loadJSON() {
    const users = fetchJSON('./src/db/main.json');

    console.log(users);
}


//=========== LOGOUT ===========

const loginInfo = document.getElementById('main-loginInfo');

function gotLoginPage() {
    window.location = `../index.html`;
}

function gotSignupPage() {
    window.location = `./signup.html`;
}

function gotSearchPage() {
    window.location = `./search.html`;
}

function logout() {
    localStorage.setItem('currentUser', -1);
    localStorage.setItem('logged', false);

    currentUser = -1;
    isLoggedIn = false;

    createAuthButtons();

    console.log(`isLoggedIn: ${isLoggedIn}`);
    console.log(`currentUser: ${currentUser}`);
}

createAuthButtons();

function createAuthButtons() {

    if (isLoggedIn === false || isLoggedIn === null) { 
        loginInfo.innerHTML = `
        <button onclick="gotSearchPage()" type="submit"><h4>Search</h4></button>
        <button onclick="gotLoginPage()" type="submit"><h4>Login</h4></button>
        <button onclick="gotSignupPage()" type="submit"><h4>Sign up</h4></button>
        `;
     } else {
        // let name;
        // if (mocks[currentUser].name === undefined) {
        //     name = 'Person';
        // } else {
        //     name = mocks[currentUser].name;
        // }

        loginInfo.innerHTML = `
        <button onclick="logout()" type="submit"><h4>Logout</h4></button>
        `;
     }
}

function getIndexByEmail() {
    for (let index = 0; index < mocks.length; index++) {
        console.log("asdasdasdasdasdadasdasd");

        if (currentEmail == mocks[index].email) {
            currentUser = index;
            localStorage.setItem('currentUser', index);
            updateScreen();
        } 
    }
}


//=========== REGISTER ===========

function signupButtonOnClick() {

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

function checkEmailField(id) {
    const field = document.getElementById(id);

    if (field.value.includes('@') && field.value.includes('.')) {
        signupState[id] = true;
        field.classList.remove('highlight');
    } else {
        field.classList.add('highlight')
        signupState[id] = false;
        return
    }

    if (field.value.length < 5) {
        signupState[id] = false;
        field.classList.add('highlight');
        return
    }
    
    field.classList.remove('highlight');
    signupState[id] = true;

    checkSignupButton();
}

function checkPasswordField(id) {
    const field = document.getElementById(id);

    if (field.value.length < 8) {
        field.classList.add('highlight');
        signupState[id] = false;
        return
    } else {
        field.classList.remove('highlight');
        signupState[id] = true;

        checkSignupButton();
    }
}

function checkSignupButton() {

    if (signupState["signup-email"] == true && signupState["signup-confirm-email"] == true && signupState["signup-password"] == true && signupState["signup-confirm-password"] == true ) {
        signupButton.disabled = false;
        signupButton.classList.remove('disabled');
    }
}
//=========== MAIN PAGE ===========

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


// (function () {

//     // const cur = localStorage.getItem('currentUser');
//     // if (cur >= 0 && typeof cur !== 'undefined'){
//     //     console.log(`CUR: ${cur}`);
//     // }  else {
//     //     getIndexByEmail();
//     //     return
//     // }

//     const index = findUserIndex;

//     if (index == -2) {
//         const mainBody = document.getElementById("main-body");
//         mainBody.innerHTML = `
//             <h1>No user found, change the email in the URL or try to login</h1>
//         `;

//         return
//     }
//     let usr = mocks[index];

//     // if (usr.name === null || typeof usr.name !== 'undefined') {
//     //     return
//     // }

//     if (usr.image == null) {
//         return
//     }
//     mainImage.src = usr.image;
//     mainName.innerHTML = usr.name;
//     mainJob.innerHTML = usr.job;
//     mainYears.innerHTML = `${usr.experience}+`;

//     if (usr.experience <= 1) {
//         mainYearsText.innerHTML = 'Year Experience';
//     } else {
//         mainYearsText.innerHTML = 'Years Experience';
//     }

//     mainHighlight1.innerHTML = createHighlight(usr.highlight1.title, usr.highlight1.text);
//     mainHighlight2.innerHTML = createHighlight(usr.highlight2.title, usr.highlight2.text);

//     mainAbout.innerHTML = usr.about;

//     mainApps.innerHTML = createMainApps(usr.apps);
    
//     mainCertifications.innerHTML = createMainCertifications(usr.certifications);

//     mainContacts.innerHTML = createMainContacts(usr.contacts);
// })();
updateScreen();
function updateScreen() {

    // const cur = localStorage.getItem('currentUser');
    // if (cur >= 0 && typeof cur !== 'undefined'){
    //     console.log(`CUR: ${cur}`);
    // }  else {
    //     return
    // }
    // let usr = mocks[currentUser];

    // // if (usr.name === null || typeof usr.name !== 'undefined') {
    // //     return
    // // }

    // if (usr.image === undefined) {
    //     return
    // }

    let kkkk;

    console.log(`email: ${currentEmail}`);

    for (let index = 0; index < mocks.length; index++) {

        if (currentEmail == mocks[index].email) {
            kkkk = index;
        } 
    }

    if (kkkk < 0) {
        const mainBody = document.getElementById("main-body");
        mainBody.innerHTML = `
            <h1>No user found, change the email in the URL or try to login</h1>
        `;

        return
    }

    console.log(`KKKKKKK: ${kkkk}`);
    let usr = mocks[kkkk];

    console.table(usr)

    if (usr.image == null) {
        usr.image = "./resources/placeholder.png";
    }
    if (usr.name == null) {
        usr.name = "Insert name";
    }

    mainImage.src = usr.image;
    mainName.innerHTML = usr.name;
    mainJob.innerHTML = usr.job;
    mainYears.innerHTML = `${usr.experience}+`;

    if (usr.experience <= 1) {
        mainYearsText.innerHTML = 'Year Experience';
    } else {
        mainYearsText.innerHTML = 'Years Experience';
    }

    mainHighlight1.innerHTML = createHighlight(usr.highlight1.title, usr.highlight1.text);
    mainHighlight2.innerHTML = createHighlight(usr.highlight2.title, usr.highlight2.text);

    mainAbout.innerHTML = usr.about;

    mainApps.innerHTML = createMainApps(usr.apps);
    
    mainCertifications.innerHTML = createMainCertifications(usr.certifications);

    mainContacts.innerHTML = createMainContacts(usr.contacts);
}

function createHighlight(title, text) {
    return `<h3>${title}</h3><p>${text}</p>`
}

function createMainApps(apps) {
    // let result = `<h1 id="topApps-example" onclick="addNewApp('topApps-example')">Top Apps</h1>`;
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

// function createMainRepositories() {
//     let result = '';

//     console.table(githubUser);
//     githubUser.repos.forEach(element => {
//         result += `<div class="card repository">
//             <img src="./resources/placeholder.png" alt="Click here to change image">
//             <p>${element.name}</p>
//         </div>`;
//     });
//     return result;
// }

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

    mocks[currentUser].name = input;
    mainName.innerText = mocks[currentUser].name;
});

mainJob.addEventListener("click", () => {
    if (isLoggedIn != true) { return }
    
    const input = prompt('Insert your job title');
    if (isTextInvalid(input)) {
        return
    }

    mocks[currentUser].job = input;
    mainJob.innerText = mocks[currentUser].job;
});

mainImage.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert an URL for an image');
    if (isTextInvalid(input)) {
        return
    }

    mocks[currentUser].image = input;
    mainImage.src = mocks[currentUser].image;
});

mainYears.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert how many years you have been working');
    if (input < 0 || input > 60) {
        return
    }

    mocks[currentUser].experience = input;
    mainYears.innerText = mocks[currentUser].experience;

    if (mocks[currentUser].experience <= 1) {
        mainYearsText.innerHTML = 'Year Experience';
    } else {
        mainYearsText.innerHTML = 'Years Experience';
    }
});

// mainYearsText.addEventListener("click", () => {

//     mocks[currentUser].experience = prompt('Insert how many years you have been working');
//     mainYearsText.innerText = mocks[currentUser].experience;
// });

mainHighlight1.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert title to highlight.');
    if (isTextInvalid(input)) {
        return
    }
    mocks[currentUser].highlight1.title = input;

    const input2 = prompt('Insert a description of the highlight');
    if (isTextInvalid(input2)) {
        return
    }
    mocks[currentUser].highlight1.text = input2;

    mainHighlight1.innerHTML = `<h3>${mocks[currentUser].highlight1.title}</h3>
    <p>${mocks[currentUser].highlight1.text}</p>`;
});

mainHighlight2.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert title to highlight.');
    if (isTextInvalid(input)) {
        return
    }
    mocks[currentUser].highlight2.title = input;

    const input2 = prompt('Insert a description of the highlight');
    if (isTextInvalid(input2)) {
        return
    }
    mocks[currentUser].highlight2.text = input2;

    mainHighlight2.innerHTML = `<h3>${mocks[currentUser].highlight2.title}</h3>
    <p>${mocks[currentUser].highlight2.text}</p>`;
});

mainAbout.addEventListener("click", () => {
    if (isLoggedIn != true) { return }

    const input = prompt('Insert a small text to describe yourself.');
    if (isTextInvalid(input)) {
        return
    }

    mocks[currentUser].about = input;
    mainAbout.innerText = mocks[currentUser].about;
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

// mainCertifications.addEventListener("click", () => {

// });

// mainRepositories.addEventListener("click", () => {

// });

// mainContacts.addEventListener("click", () => {

// });