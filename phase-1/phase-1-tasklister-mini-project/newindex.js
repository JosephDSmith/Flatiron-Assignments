const toDoText = document.getElementById("new-task-description")

const submitButton = document.getElementById("submitButton")

const list = document.getElementById("list")

function addANewToDo (){
    let toDoTextvalue = toDoText.value
    let newItem = document.createElement("div")
    let toDo = document.createElement("input")
    let editButton = document.createElement("button")
    let deleteButton = document.createElement("button")

    list.appendChild(newItem)
    newItem.appenedChild(toDo)
    newItem.setAttribute("value", toDoTextvalue)
    newItem.appendChild(editButton)
    newItem.appendChild(deleteButton)

}

submitButton.addEventListener("click", () =>{
    addANewToDo()
})


  