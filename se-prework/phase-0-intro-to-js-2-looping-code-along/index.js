const messages = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        const name = names[i]
      const message = `Thank you, ${name}, for the wonderful ${event} gift!`
      messages.push(message)
    }
    return messages
}

function countDown(num) {
    while (num >= 0) {
    console.log(num)
    num--
    }
}

countDown(4)

