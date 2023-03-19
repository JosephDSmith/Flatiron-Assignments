//fetch request to API
fetch("https://api.thedogapi.com/v1/breeds")
  .then((res) => res.json())
  .then((res) => handleDogs(res));

//reference main HTML container
let dogContainer = document.querySelector("#dogContainer");

//define main function to take all data from API and render HTML elements for all dog data
function handleDogs(dogs) {
console.log(dogs)
 
//set a title and subtitle for the page
  document.querySelector("h1").innerHTML = "Dog Breeds";
  document.querySelector("h3").innerHTML = "Double-Click to see breed details!";

//loop over all dogs and create HTML elements for each
  dogs.forEach((dog) => {

//create HTML elements for main page
    let dogList = document.createElement("div");
    let newDog = document.createElement("div");
    let icon = document.createElement("img");
    let dogName = document.createElement("p");

//assign class names and content for elements
    newDog.className = "dogDiv";
    icon.className = "icon";
    dogName.className = "dogName";
    dogName.innerText = dog.name.toUpperCase();
    icon.src = dog.image.url;

//append all elements in order    
    dogList.appendChild(newDog);
    dogContainer.appendChild(dogList);
    newDog.appendChild(icon);
    newDog.appendChild(dogName);

//add an event listener for each dog on the main page to change cursor style    
    newDog.addEventListener("mouseover", (e) => {
      e.target.style.cursor = "pointer";
    });

//add an event listener - when dog is double clicked, page is cleared and specific information given 
//about individual dog breeds
    newDog.addEventListener("dblclick", () => {

//clear page of HTML
      document.querySelector("h3").innerHTML = " ";
      document.querySelector("h1").innerHTML = " ";
      dogContainer.innerHTML = " ";

//create new HTML elements
      let backButton = document.createElement("button");
      let dogWrapper = document.createElement("div");
      let dogPic = document.createElement("img");
      let dogName = document.createElement("h3");
      let dogBredFor = document.createElement("p");
      let breedGroup = document.createElement("p");

//assign class names and content for elements
      backButton.className = "btn";
      dogPic.className = "pictures";
      dogWrapper.className = "dogWrapper";
      backButton.innerText = "Go Back";
      dogPic.src = dog.image.url;   
      dogName.innerText = `My breed name : ${dog.name}`;
      breedGroup.innerText = `My breed group is ${dog.breed_group}`;
      
//assign "if" statement to deal with certain dogs that had no bred_for key
      if (dog.bred_for === undefined) {
      dogBredFor.innerText = "Bred for unknown purposes";
      } else {
      dogBredFor.innerText = `I'm bred for: ${dog.bred_for}!`;
      }   

//append all elements in order
      dogContainer.appendChild(dogWrapper);
      dogWrapper.appendChild(dogPic);
      dogWrapper.appendChild(dogName);
      dogWrapper.appendChild(dogBredFor);
      dogWrapper.appendChild(backButton);

//add final event listener, which clears the entire HTML of dogContainer and starts over
      backButton.addEventListener("click", () => {
        dogContainer.innerHTML = " ";
        handleDogs(dogs);
      });
    });
  });
}
