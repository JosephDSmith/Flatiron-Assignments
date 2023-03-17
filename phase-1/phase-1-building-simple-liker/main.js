// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


  let hearts = document.getElementsByClassName("like-glyph");
  Array.from(hearts).forEach((heart) => {
    heart.addEventListener("click", (e) => {
      mimicServerCall()
      .then((data) => {
        const heartUpdate = e.target
        if (e.target.innerText === EMPTY_HEART){
          heartUpdate.innerText = FULL_HEART;
          heartUpdate.className = "activated-heart"
        } else {
          heartUpdate.innerText = EMPTY_HEART;
          heartUpdate.className = "like-glyph"
        }
        

      })
      .catch((err) => {
        const errorBar = document.getElementById("modal")
        errorBar.className = " "
        setTimeout(()=>{
          errorBar.className = "hidden"
        }, 3000)
      })
      
    });
  });






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
