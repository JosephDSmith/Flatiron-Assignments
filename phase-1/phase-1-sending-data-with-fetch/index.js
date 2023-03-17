const submitData = function(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
       
    }).then(function(response){
        return response.json();
    })
    .then(function(object){
        const id = object.id;
        const newElement = document.createElement('div');
        newElement.textContent = id;
        document.body.appendChild(newElement);

    })
    .catch(function(error){
        const message = document.createElement('div')
        message.textContent = error.message
        document.body.appendChild(message);

    })
}

