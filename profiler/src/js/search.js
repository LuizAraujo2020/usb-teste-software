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
    } else {
        filteredUsers.forEach(element => {
            content += createSingleRow(element.email);
        });
    }

    searchList.innerHTML = content;
}

function createSingleRow(email) {
    return `<a href="./main.html?email=${email}">
        <p>${email}</p>
    </a>`;
}