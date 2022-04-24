const projectContent = document.getElementById('projectContent')

const projects = [
  {
    id: 1,
    link: 'https://resume-olivertears.vercel.app/',
    img: '../images/Projects/resume.png',
    title: 'Resume',
    technologies: 'JavaScript',
    description: 'Here you are :)',
  },
  {
    id: 2,
    link: 'https://budgettracker-olivertears.vercel.app/',
    img: '../images/Projects/budgettracker.png',
    title: 'Budget Tracker',
    technologies: 'React',
    description:
      'My first React experience. Backend by <a href="https://github.com/VadimBelyaev02" target="_blank">VadimBelyaev02</a>',
  },
  {
    id: 3,
    link: 'https://sneakerstore.vercel.app/',
    img: '../images/Projects/sneakerstore.png',
    title: 'Sneaker Store',
    technologies: 'React + TypeScript + Redux',
    description: 'Working on...',
  },
]

const screenForLaptop = () => {
  projects.reverse().map((project, idx) => {
    const projectWrap = document.createElement('div')
    const imgLink = document.createElement('a')
    const img = document.createElement('img')
    const content = document.createElement('div')
    const title = document.createElement('a')
    const technologies = document.createElement('h3')
    const description = document.createElement('h3')

    projectContent.appendChild(projectWrap)
    if (project.id % 2 !== 0) {
      projectWrap.appendChild(imgLink)
      projectWrap.appendChild(content)
    } else {
      projectWrap.appendChild(content)
      projectWrap.appendChild(imgLink)
    }
    imgLink.appendChild(img)
    content.appendChild(title)
    content.appendChild(technologies)
    content.appendChild(description)

    projectWrap.style.display = 'flex'
    projectWrap.style.justifyContent = 'center'
    projectWrap.style.marginBottom = '20px'

    imgLink.href = project.link
    project.id === 1 ? (imgLink.target = '_self') : (imgLink.target = '_blank')
    imgLink.style.width = '350px'
    imgLink.style.height = '200px'
    imgLink.style.borderRadius = '15px'

    img.style.width = '350px'
    img.style.height = '200px'
    img.style.borderRadius = '15px'
    img.src = project.img

    content.style.width = '350px'
    content.style.height = '200px'
    content.style.display = 'flex'
    content.style.flexDirection = 'column'

    title.href = project.link
    project.id === 1 ? (title.target = '_self') : (title.target = '_blank')
    title.innerHTML = `<h2>${idx + 1}. ${project.title}</h2>`
    title.style.margin = '0 10px 10px 10px'
    title.style.textAlign = 'center'
    title.style.color = 'black'
    title.style.textDecoration = 'none'

    technologies.style.margin = '0 10px 5px 10px'
    technologies.innerHTML = `<strong>Technologies: </strong>${project.technologies}`

    description.style.margin = '0 10px 5px 10px'
    description.innerHTML = `<strong>Description: </strong>${project.description}`
  })
}

const screenForTablet = () => {
  projects.reverse().map((project, idx) => {
    const projectWrap = document.createElement('div')
    const imgLink = document.createElement('a')
    const img = document.createElement('img')
    const content = document.createElement('div')
    const title = document.createElement('a')
    const technologies = document.createElement('h3')
    const description = document.createElement('h3')

    projectContent.appendChild(projectWrap)
    projectWrap.appendChild(content)
    projectWrap.appendChild(imgLink)
    imgLink.appendChild(img)
    content.appendChild(title)
    content.appendChild(technologies)
    content.appendChild(description)

    projectWrap.style.display = 'flex'
    projectWrap.style.flexDirection = 'column'
    projectWrap.style.marginBottom = '20px'

    imgLink.href = project.link
    project.id === 1 ? (imgLink.target = '_self') : (imgLink.target = '_blank')
    imgLink.style.width = '100%'
    imgLink.style.height = '100% / 1.75'
    imgLink.style.borderRadius = '15px'

    img.style.width = '100%'
    img.style.height = '100% / 1.75'
    img.style.borderRadius = '15px'
    img.src = project.img

    content.style.width = '100%'
    content.style.height = 'auto'
    content.style.display = 'flex'
    content.style.flexDirection = 'column'

    title.href = project.link
    project.id === 1 ? (title.target = '_self') : (title.target = '_blank')
    title.style.margin = '0 10px 10px 10px'
    title.style.textAlign = 'center'
    title.style.color = 'black'
    title.style.textDecoration = 'none'
    title.innerHTML = `<h2>${idx + 1}. ${project.title}</h2>`

    technologies.style.margin = '0 10px 5px 10px'
    technologies.innerHTML = `<strong>Technologies: </strong>${project.technologies}`

    description.style.margin = '0 10px 5px 10px'
    description.innerHTML = `<strong>Description: </strong>${project.description}`
  })
}

window.matchMedia('(min-width: 800px)').matches
  ? screenForLaptop()
  : screenForTablet()

window.onresize = () => {
  projectContent.innerHTML = ''
  window.matchMedia('(min-width: 800px)').matches
    ? screenForLaptop()
    : screenForTablet()
}
