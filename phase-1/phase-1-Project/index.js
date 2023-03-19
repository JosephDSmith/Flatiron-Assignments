fetch("https://api.thedogapi.com/v1/breeds")
  .then((res) => res.json())
  .then((res) => handleDogs(res));

let dogContainer = document.querySelector("#dogContainer");

function handleDogs(dogs) {
  console.log(dogs)

  
  document.querySelector("h1").innerHTML = "Dog Breeds";
  document.querySelector("h3").innerHTML = "Double-Click to see breed details!";
  
  dogs.forEach((dog) => {
    
    let dogList = document.createElement("div");
    let newDog = document.createElement("div");
    newDog.className = "dogDiv"
    let dogName = document.createElement("p")
    dogName.className = "dogName"
    dogName.innerText = dog.name.toUpperCase();
    let icon = document.createElement("img")
    icon.className = "icon"
    icon.src = dog.image.url
    dogList.appendChild(newDog);
    dogContainer.appendChild(dogList);
    newDog.appendChild(icon)
    newDog.appendChild(dogName)
    newDog.addEventListener("mouseover", (e) => {
      e.target.style.cursor = "pointer";
    });

    newDog.addEventListener("dblclick", () => {
      
      document.querySelector("h3").innerHTML = " ";
      document.querySelector("h1").innerHTML = " ";
      dogContainer.innerHTML = " ";
      let backButton = document.createElement("button");
      backButton.className = "btn";
      let dogWrapper = document.createElement("div")
      dogWrapper.className = "dogWrapper"
      let dogPic = document.createElement("img");
      let dogName = document.createElement("h3");
      let dogBredFor = document.createElement("p");
      let breedGroup = document.createElement("p")
      backButton.innerText = "Go Back";
      dogPic.src = dog.image.url;
      dogPic.className = "pictures";
      dogBredFor.innerText = `I'm bred for : ${dog.bred_for}!`;
      dogName.innerText = `My breed name : ${dog.name}`;
      breedGroup.innerText = `My breed group is ${dog.breed_group}`
      dogContainer.appendChild(dogWrapper)
      dogWrapper.appendChild(dogPic);
      dogWrapper.appendChild(dogName);
      dogWrapper.appendChild(dogBredFor);
      dogWrapper.appendChild(backButton);

      backButton.addEventListener("click", () => {
        dogContainer.innerHTML = " ";
        handleDogs(dogs);
      });
    });
  });
}
