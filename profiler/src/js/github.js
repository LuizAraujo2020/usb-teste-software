const githubUser = {
    login: String,
    name: String,
    bio: String,
    avatar_url: String,
    public_repos: Number,
    followers: Number,
    following: Number,
    repos: Array,
  };
//   const query = document.querySelector(".query");
  
  async function getUser(user) {
    getRepos(user);


    const url = `https://api.github.com/users/LuizAraujo2020`;
    // const url = `https://api.github.com/users/${user}`;
    const data = await fetch(url);
    const userData = await data.json();
  
    if (userData.message === "Not Found") {
      alert("User not found");
      return;
    }
  
    githubUser.login = userData.login;
    githubUser.name = userData.name;
    githubUser.bio = userData.bio;
    githubUser.avatar_url = `https://github.com/${userData.login}.png`;
    githubUser.public_repos = userData.public_repos;
    githubUser.followers = userData.followers;
    githubUser.following = userData.following;
  
    // getAllData();
  }
  
  async function getRepos(user) {
    
    const url = `https://api.github.com/users/LuizAraujo2020/repos`;
    // const url = `https://api.github.com/users/${user}/repos`;
    const data = await fetch(url);
    const repos = await data.json();
    githubUser.repos = repos;
  }
  
//   function getAllData() {
//     const userInfo = document.getElementById("user-info");
  
//     userInfo.setAttribute("style", "display: block");
//     userInfo.innerHTML = `
//       <div class="user-info">
//         <div class="user-avatar">
//             <h2 class="user-name">${githubUser.name == null ? githubUser.name = "No username" : githubUser.name}</h2>
//             <h3 class="user-login">${githubUser.login}</h3>
//             <img class="avatar_img" src="${githubUser.avatar_url}" alt="${githubUser.login}">
//             <p class="bio">${
//               githubUser.bio == null ? (githubUser.bio = "No bio") : githubUser.bio
//             }</p>
//         </div>
//         <div class="user-stats">
//             <h2>Info</h2>
//             <p>Repos: ${githubUser.public_repos}</p>
//             <p>Followers: ${githubUser.followers}</p>
//             <p>Following: ${githubUser.following}</p>
//         </div>
//       </div>
//       ${githubUser.repos
//         .map(
//           (repo) => `<div class="repo">
//         <h3 class="repo-name">${repo.name}</h3>
//         <p class="repo-description">${
//           repo.description == null
//             ? (repo.description = "No description")
//             : repo.description
//         }</p>
//         <p class="repo-language">${repo.language == null ? repo.language = "No language found" : repo.language}</p>
//         <div class="repo-stats">
//           <span>
//             ⭐ ${repo.stargazers_count}
//           </span>
//           <span>
//             💬 ${repo.watchers_count}
//           </span>
//           <span>
//             📦 ${repo.forks_count}
//           </span>
//           <span>
//             📅 ${new Date(repo.updated_at).toLocaleDateString('pt-br')}
//           </span>
//         </div>
//         <a href="${repo.html_url}" target="_blank">
//         <span>
//         🔗${repo.html_url}
//         </span>
//         </a>
//       </div>`
//         )
//         .join("")}
//     `;
//   }
  