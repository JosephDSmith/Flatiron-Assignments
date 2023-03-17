document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target['new-task-description'].value)
    form.reset()
  })
});

function buildToDo(todo){
  let p = document.createElement("p")
  let deletebtn = document.createElement("button")
  let editbtn = document.createElement("button")
  deletebtn.addEventListener('click', handleDelete)
  deletebtn.textContent = 'X'
  editbtn.addEventListener('click', handleEdit)
  editbtn.textContent = 'EDIT'
  p.textContent = `${todo}`
  p.appendChild(deletebtn)
  p.appendChild(editbtn)
  document.querySelector('#tasks').appendChild(p)

}

function handleDelete(e){
  e.target.parentNode.remove()
}


