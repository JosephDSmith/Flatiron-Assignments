let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

fetch("http://localhost:3000/toys")
.then((res) => res.json())
.then((toys) => handleToys(toys))

function handleToys(toys) {
  toys.map(toy => {
    let toyCollection = document.querySelector("#toy-collection")
    let card = document.createElement("div")
    card.className = "card"
    let name = document.createElement("h2")
    name.textContent = toy.name
    let img = document.createElement("img")
    img.src = toy.image
    img.className = "toy-avatar"
    let likes = document.createElement("p")
    likes.textContent = `${toy.likes} Likes`
    let button = document.createElement("button")
    button.className = "like-btn"
    button.id = toy.id
    button.textContent = "like"
    toyCollection.appendChild(card)
    card.appendChild(name)
    card.appendChild(img)
    card.appendChild(likes)
    card.appendChild(button)

    button.addEventListener("click", (e) =>{
     
      fetch(`http://localhost:3000/toys/${toy.id}` , {
method: "PATCH",
headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
},

body: JSON.stringify({
  "likes": toy.likes + 1
})
})
.then((res) => res.json())
.then((updatedToy) => likes.textContent = `${updatedToy.likes} Likes`)
  
    })
  })
}


let submitButton = document.getElementsByName("submit")[0]

console.log(submitButton)

submitButton.addEventListener("click", (e) =>{

e.preventDefault()

console.log("click")

let nameInput = document.getElementsByName("name")[0]
let imageInput = document.getElementsByName("image")[0]

console.log(nameInput.value)
console.log(imageInput.value)


fetch("http://localhost:3000/toys" , {
method: "POST",
headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
},

body: JSON.stringify({
  "name": nameInput.value,
  "image": imageInput.value,
  "likes": 0
})
})

})

