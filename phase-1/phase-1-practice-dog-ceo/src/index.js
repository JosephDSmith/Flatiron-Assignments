console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

fetch(imgUrl)
.then((res) => res.json())
.then((dogs) => renderDogs(dogs))


function renderDogs(dogs) {
    const dogContainer = document.querySelector("#dog-image-container")
    dogs.message.forEach(dog => {
        const dogPic = document.createElement("img")
        dogPic.src = dog
        dogContainer.appendChild(dogPic)
    })
}

let foo = [];


fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => res.json())
  .then((breeds) => {
    console.log(breeds)
    foo.push(...Object.keys(breeds.message));
    console.log(foo);
    renderBreeds(breeds);
  })




function renderBreeds(breeds) {
    const breedList = document.querySelector("#dog-breeds");
    for (const breed in breeds.message) {
      const breedName = document.createElement("li");
      breedName.innerText = breed;
      breedList.appendChild(breedName);
    }
  }

  
let breedList = document.querySelector("#dog-breeds")

breedList.addEventListener("click", (e) =>{
    e.target.style.color = "blue"
})

let dropDown = document.querySelector("#breed-dropdown")


dropDown.addEventListener("change", (e) => {
    let firstLetter = e.target.value
    firstList = foo.filter(element => element.charAt(0) === firstLetter)
    const newList = firstList.map((dogBreed) => {
        const breedName = document.createElement("li");
        breedName.textContent = dogBreed
        return breedName
    })
    breedList.innerHTML = " "
    breedList.append(...newList);


})


