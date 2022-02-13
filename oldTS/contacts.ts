const inputName = document.getElementById('name')
const inputPhone = document.getElementById('name')
const inputText = document.getElementById('name')
const button = document.getElementById('button')

const token: string = '5253193550:AAGy5JpMxWpCEM-TqN2esOv5hg4cgz9qxgQ'
const id: string = '-1001683621096'
const url: string = `https://api.telegram.org/bot${token}/sendMessage`

const company: string = 'LeverX'
const contacts: string = '+375'
const message: string = 'You have done a great job, we are hiring you'

const data = {
  chat_id: id,
  text: `Company: ${company}\nContacts: ${contacts}\nMessage: ${message}`,
}

button.addEventListener('click', () => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
})
