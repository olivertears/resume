const contentRoadmap = document.getElementById('contentRoadmap')
const text = document.createElement('h1')
contentRoadmap.appendChild(text)

const dayNumber = Math.floor(
  (Date.now() - Date.parse('2021-11-11')) / (1000 * 60 * 60 * 24)
)

text.style.margin = '20px'
text.style.fontWeight = '100'
text.innerHTML = `<strong>${dayNumber}</strong> days of programming`
