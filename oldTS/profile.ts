const profileWrap = document.getElementsByName('wrapOnePart')[0]
const avatar = document.getElementById('avatar')
const profileContent = document.getElementById('profileContent')

document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(min-width: 700px)').matches) {
    profileWrap.style.flexDirection = 'row'
    profileContent.style.padding = `0 10px`
    if (window.innerWidth >= 916) {
      profileWrap.style.justifyContent = 'center'
    } else {
      profileWrap.style.justifyContent = 'left'
    }
    window.innerWidth - 520 > 330
      ? (profileContent.style.width = `330px`)
      : (profileContent.style.width = `${window.innerWidth - 520}px`)
    avatar.style.width = `350px`
    avatar.style.height = `350px`
  } else {
    profileWrap.style.flexDirection = 'column'
    profileContent.style.padding = `0`
    profileContent.style.width = `${window.innerWidth - 150}px`
    avatar.style.width = `${window.innerWidth - 150}px`
    avatar.style.height = `${window.innerWidth - 150}px`
  }
})

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 700px)').matches) {
    profileWrap.style.flexDirection = 'row'
    profileContent.style.padding = `0 10px`
    if (window.innerWidth >= 916) {
      profileWrap.style.justifyContent = 'center'
    } else {
      profileWrap.style.justifyContent = 'left'
    }
    window.innerWidth - 520 > 330
      ? (profileContent.style.width = `330px`)
      : (profileContent.style.width = `${window.innerWidth - 520}px`)
    avatar.style.width = `350px`
    avatar.style.height = `350px`
  } else {
    profileWrap.style.flexDirection = 'column'
    profileContent.style.padding = `0`
    profileContent.style.width = `${window.innerWidth - 150}px`
    avatar.style.width = `${window.innerWidth - 150}px`
    avatar.style.height = `${window.innerWidth - 150}px`
  }
})
