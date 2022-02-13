const projectContent = document.getElementById('projectContent')

const projects = [
  {
    id: 1,
    link: 'link',
    img: '../images/Projects/resume.png',
    title: 'Resume',
    technologies: 'JavaScript',
    description: 'Here you are :)',
  },
  {
    id: 2,
    link: 'link',
    img: '../images/Projects/resume.png',
    title: 'Budget Tracker',
    technologies: 'React',
    description: 'Some text about the project',
  },
  {
    id: 3,
    link: 'link',
    img: '../images/Projects/resume.png',
    title: 'Online Store',
    technologies: 'React + TypeScript',
    description: 'Some text about the project',
  },
]

const screenForLaptop = () => {
  projects.map((project) => {
    const projectWrap = document.createElement('div')
    const img = document.createElement('img')
    const content = document.createElement('div')
    const title = document.createElement('a')
    const technologies = document.createElement('h3')
    const description = document.createElement('h3')

    projectContent.appendChild(projectWrap)
    if (project.id % 2 !== 0) {
      projectWrap.appendChild(img)
      projectWrap.appendChild(content)
    } else {
      projectWrap.appendChild(content)
      projectWrap.appendChild(img)
    }
    content.appendChild(title)
    content.appendChild(technologies)
    content.appendChild(description)

    projectWrap.style.display = 'flex'
    projectWrap.style.justifyContent = 'center'
    projectWrap.style.marginBottom = '20px'

    img.style.width = '350px'
    img.style.height = '200px'
    img.style.borderRadius = '15px'
    img.src = project.img

    content.style.width = '350px'
    content.style.height = '200px'
    content.style.display = 'flex'
    content.style.flexDirection = 'column'

    title.href = project.link
    title.target = '_blank'
    title.style.margin = '0 10px 10px 10px'
    title.style.textAlign = 'center'
    title.style.color = 'black'
    title.style.textDecoration = 'none'
    title.innerHTML = `<h2>${project.title}</h2>`

    technologies.style.margin = '0 10px 5px 10px'
    technologies.innerHTML = `<strong>Technologies: </strong>${project.technologies}`

    description.style.margin = '0 10px 5px 10px'
    description.innerHTML = `<strong>Description: </strong>${project.description}`
  })
}

const screenForTablet = () => {
  projects.map((project) => {
    const projectWrap = document.createElement('div')
    const img = document.createElement('img')
    const content = document.createElement('div')
    const title = document.createElement('a')
    const technologies = document.createElement('h3')
    const description = document.createElement('h3')

    projectContent.appendChild(projectWrap)
    projectWrap.appendChild(content)
    projectWrap.appendChild(img)
    content.appendChild(title)
    content.appendChild(technologies)
    content.appendChild(description)

    projectWrap.style.display = 'flex'
    projectWrap.style.flexDirection = 'column'
    projectWrap.style.marginBottom = '20px'

    img.style.width = '100%'
    img.style.height = '100% / 1.75'
    img.style.borderRadius = '15px'
    img.src = project.img

    content.style.width = '100%'
    content.style.height = 'auto'
    content.style.display = 'flex'
    content.style.flexDirection = 'column'

    title.href = project.link
    title.target = '_blank'
    title.style.margin = '0 10px 10px 10px'
    title.style.textAlign = 'center'
    title.style.color = 'black'
    title.style.textDecoration = 'none'
    title.innerHTML = `<h2>${project.title}</h2>`

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
