let form = document.getElementById("github-form")

form.addEventListener("submit", (e)=> {
  e.preventDefault()
  userList.innerHTML = " "
  let search = form.search.value
    fetch(`https://api.github.com/search/users?q=${search}`, {
        method: "GET",
        headers:
        {
          "Content-Type": "application/json",
          Accept: "application/vnd.github.v3+json"
        },   
        })
        .then((res) => res.json())
        //object returned has an additional need to access "items"
        .then((users) => handleSubmit(users.items))
})

let userList = document.getElementById("user-list")

function handleSubmit(users) {

users.map((user) => {
  let gitHubAcct = document.createElement("p")
  let userName = document.createElement("p")
  userName.textContent = user.login
  let userPic = document.createElement("img")
  userPic.src = user.avatar_url
  let userLink = document.createElement("p")
  userLink.textContent = user.url
  userList.appendChild(gitHubAcct)
  gitHubAcct.appendChild(userName)
  gitHubAcct.appendChild(userPic)
  gitHubAcct.appendChild(userLink)

  //allower user to click on photo, which populates repository info on acct

  userPic.addEventListener("click", () =>{
    fetch(`https://api.github.com/users/${user.login}/repos`, {
      method: "GET",
      headers:
      {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json"
      },   
      })
      .then((res) => res.json())
      .then((data) => {
        data.map((repo) =>{
          let repoInfo = document.createElement("p")
          repoInfo.textContent = repo.name
          gitHubAcct.appendChild(repoInfo)
        })
      })
  })
})

}
    

