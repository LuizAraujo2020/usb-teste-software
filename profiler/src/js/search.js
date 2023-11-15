const searchMainTitle = document.getElementById("search-main-title");
const searchInput = document.getElementById("search-input");
const searchList = document.getElementById("search-list");

function updateList() {
    const value = searchInput.value;
    console.log(value);

    const filteredUsers = mocks.filter((user) => user.email.includes(value));

    let content = "";

    if (filteredUsers.length <= 0) {
        content = `<p>No users found`;
        // showMainTitle();
    } else {
        filteredUsers.forEach(element => {
            content += createSingleRow(element.email);
            // hideMainTitle();
        });
    }

    searchList.innerHTML = content;
}

function createSingleRow(email) {
    return `<a href="./main.html?${email}" rel="noopener noreferrer">
        <p>${email}</p>
    </a>`;
}

// function hideMainTitle() {
//     searchMainTitle.classList.add("hide");
// }

// function showMainTitle() {
//     searchMainTitle.classList.remove("hide");
// }