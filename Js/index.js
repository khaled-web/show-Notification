const button = document.getElementById('button')
const toasts = document.getElementById('toasts');

const messages = [
 'Message One',
 'Message Two',
 'Message Three',
 'Message Four'
]

button.addEventListener('click', () => createNotification())

function createNotification() {
 const creatingEle = document.createElement('div')
 creatingEle.classList.add('toast')
 creatingEle.innerText = getRandomMessage()
 toasts.appendChild(creatingEle)
}

function getRandomMessage() {
 return messages[Math.floor(Math.random() * messages.length)]
}