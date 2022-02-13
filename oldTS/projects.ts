const projectContent = document.getElementById('projectContent')

const projects: {
  id: number
  img: string
  title: string
  technologies: string
  description: string
}[] = [
  {
    id: 1,
    img: 'link',
    title: 'Resume',
    technologies: 'TypeScript',
    description: 'Some text about the project',
  },
  {
    id: 2,
    img: 'link',
    title: 'Budget Tracker',
    technologies: 'React',
    description: 'Some text about the project',
  },
  {
    id: 3,
    img: 'link',
    title: 'CV',
    technologies: 'TypeScript',
    description: 'Some text about the project',
  },
]

const screenForLaptop = (): void => {
  projects.map((project) => {
    const projectWrap = document.createElement('div')
    const img = document.createElement('div')
    const content = document.createElement('div')
    const title = document.createElement('h2')
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
    img.style.backgroundColor = 'blue'
    if (project.id === 1) {
      img.setAttribute('id', 'firstImg')
    }

    content.style.width = '350px'
    content.style.height = '200px'
    content.style.display = 'flex'
    content.style.flexDirection = 'column'

    title.style.margin = '0 10px 10px 10px'
    title.style.textAlign = 'center'
    title.innerHTML = project.title

    technologies.style.margin = '0 10px 5px 10px'
    technologies.innerHTML = `<strong>Technologies: </strong>${project.technologies}`

    description.style.margin = '0 10px 5px 10px'
    description.innerHTML = `<strong>Description: </strong>${project.description}`
  })
}

const screenForTablet = (): void => {
  projects.map((project) => {
    const projectWrap = document.createElement('div')
    const img = document.createElement('div')
    const content = document.createElement('div')
    const title = document.createElement('h2')
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
    img.style.height = '250px'
    img.style.borderRadius = '15px'
    img.style.backgroundColor = 'blue'
    if (project.id === 1) {
      img.setAttribute('id', 'firstImg')
    }

    content.style.width = '100%'
    content.style.height = 'auto'
    content.style.display = 'flex'
    content.style.flexDirection = 'column'

    title.style.margin = '0 10px 10px 10px'
    title.style.textAlign = 'center'
    title.innerHTML = project.title

    technologies.style.margin = '0 10px 5px 10px'
    technologies.innerHTML = `<strong>Technologies: </strong>${project.technologies}`

    description.style.margin = '0 10px 5px 10px'
    description.innerHTML = `<strong>Description: </strong>${project.description}`
  })
}

window.matchMedia('(min-width: 600px)').matches
  ? screenForLaptop()
  : screenForTablet()

window.onresize = () => {
  projectContent.innerHTML = ''
  window.matchMedia('(min-width: 600px)').matches
    ? screenForLaptop()
    : screenForTablet()
}
