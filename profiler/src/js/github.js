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
  
  async function getUser(user) {
    getRepos(user);


    const url = `https://api.github.com/users/LuizAraujo2020`;

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
  }
  
  async function getRepos(user) {
    
    const url = `https://api.github.com/users/LuizAraujo2020/repos`;
    const data = await fetch(url);
    const repos = await data.json();
    githubUser.repos = repos;
  }
