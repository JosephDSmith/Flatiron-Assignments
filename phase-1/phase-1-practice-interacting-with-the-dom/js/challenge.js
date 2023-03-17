let counter = document.getElementById("counter")

let numCount = setInterval(() =>{
    let numberCount = counter.innerText
    let newNumberCount = parseInt(numberCount) + 1
    counter.innerText = newNumberCount
}, 1000)

let minus = document.getElementById("minus")
let plus = document.getElementById("plus")

const decreaseCount = () => {
   let numberCount =  counter.innerText
   let newNumberCount = parseInt(numberCount) - 1
   counter.innerText = newNumberCount
}
const increaseCount = () => {
   let numberCount = counter.innerText
   let newNumberCount = parseInt(numberCount) + 1
   counter.innerText = newNumberCount
}

minus.addEventListener('click', decreaseCount)
plus.addEventListener('click', increaseCount)

 let heart = document.querySelector("#heart");
 let likes = document.querySelector(".likes");
 let counterObj = {};
 
 heart.addEventListener("click", () => {
   if (counter.innerText in counterObj) {
     counterObj[counter.innerText] += 1;
   } else {
     counterObj[counter.innerText] = 1;
   }
 
   const list = document.createElement("li");
   if (counterObj[counter.innerText] === 1) {
      list.innerText = `${counter.innerText} was liked ${counterObj[counter.innerText]} time`;
   } else {
      list.innerText = `${counter.innerText} was liked ${counterObj[counter.innerText]} times`;
   }
   
   likes.appendChild(list);
   console.log(counterObj);
 });
 
 
 let pause = document.querySelector("#pause")

 

 pause.addEventListener("click", () =>{
   if (pause.innerText === "pause") {
      clearInterval(numCount)
      plus.removeEventListener('click', increaseCount)
      minus.removeEventListener('click', decreaseCount)
   pause.innerText = "restart"
   } else {
      numCount = setInterval(() =>{
         let numberCount = counter.innerText
         let newNumberCount = parseInt(numberCount) + 1
         counter.innerText = newNumberCount
      }, 1000)
      minus.addEventListener('click', decreaseCount)
      plus.addEventListener('click', increaseCount)
      pause.innerText = "pause"
   }
   
 })

 let form = document.querySelector("#comment-form")

 form.addEventListener("submit", (e) =>{
   e.preventDefault();
   let comment = document.querySelector("#comment-input").value
   let newDiv = document.createElement('div')
   document.querySelector("#list").appendChild(newDiv)
   let newComment = document.createElement("p")
   newComment.innerText = comment
   newDiv.appendChild(newComment)
 })



 
 


 
 
