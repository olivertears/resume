const inputName = document.getElementById('name')
const inputPhone = document.getElementById('phone')
const inputMessage = document.getElementById('message')
const button = document.getElementById('button')

const token = '5253193550:AAGy5JpMxWpCEM-TqN2esOv5hg4cgz9qxgQ'
const id = '-1001683621096'
const url = `https://api.telegram.org/bot${token}/sendMessage`

inputName.onmousedown = () => {
  inputName.style.outline = 'none'
}

inputPhone.onmousedown = () => {
  inputPhone.style.outline = 'none'
}

inputMessage.onmousedown = () => {
  inputMessage.style.outline = 'none'
}

const validation = () => {
  let noMistakes = true

  if (inputName.value === '') {
    inputName.style.outline = '3px solid darkred'
    noMistakes = false
  }
  if (inputPhone.value === '') {
    inputPhone.style.outline = '3px solid darkred'
    noMistakes = false
  }
  if (inputMessage.value === '') {
    inputMessage.style.outline = '3px solid darkred'
    noMistakes = false
  }

  return noMistakes
}

button.onclick = () => {
  const noMistakes = validation()

  if (noMistakes) {
    const data = {
      chat_id: id,
      text: `Name: ${inputName.value}\nPhone: ${inputPhone.value}\nMessage: ${inputMessage.value}`,
    }

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        inputName.value = ''
        inputPhone.value = ''
        inputMessage.value = ''
      })
      .catch((err) => console.log(err))
  }
}
