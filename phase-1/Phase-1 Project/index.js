fetch("https://api.thedogapi.com/v1/breeds")
  .then((res) => res.json())
  .then((res) => handleDogs(res));

let dogContainer = document.querySelector("#dogContainer");

function handleDogs(dogs) {

  
  document.querySelector("h1").innerHTML = "Dog Breeds";
  document.querySelector("h3").innerHTML = "Double-Click to see breed details!";
  
  dogs.forEach((dog) => {
    
    let dogList = document.createElement("div");
    let newDog = document.createElement("div");
    newDog.className = "dogDiv"
    newDog.innerText = dog.name;
    dogList.appendChild(newDog);
    dogContainer.appendChild(dogList);

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
      let dogTemperment = document.createElement("p");
      backButton.innerText = "Go Back";
      dogPic.src = dog.image.url;
      dogPic.className = "pictures";
      dogTemperment.innerText = `Dog bred for : ${dog.bred_for}`;
      dogName.innerText = `Dog Breed Name : ${dog.name}`;
      dogContainer.appendChild(dogWrapper)
      dogWrapper.appendChild(dogPic);
      dogWrapper.appendChild(dogName);
      dogWrapper.appendChild(dogTemperment);
      dogWrapper.appendChild(backButton);

      backButton.addEventListener("click", () => {
        dogContainer.innerHTML = " ";
        handleDogs(dogs);
      });
    });
  });
}
