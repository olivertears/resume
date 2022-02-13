const menu = document.getElementById('menu')
const avatarImg = document.getElementById('avatar')
const arrOfWrap = document.getElementsByName('wrapOnePart')
const navigation = document.getElementById('navigation')
const navigationBackground = document.getElementById('navigationBackground')
const closeBtn = document.getElementById('closeBtn')
const navigationTxtArr = document.getElementsByName('navigationTxt')

document.addEventListener('DOMContentLoaded', () => {
  menu.style.backgroundImage = `url('./images/menuWhite.png')`

  const menuOffset = avatarImg.offsetLeft - 70

  menuOffset > 30
    ? (menu.style.left = `${menuOffset}px`)
    : (menu.style.left = `30px`)

  const paddingRight = window.innerWidth - 816
  for (let i in arrOfWrap) {
    if (paddingRight < 30) {
      arrOfWrap[i].style.paddingRight = '30px'
    } else if (paddingRight > 100) {
      arrOfWrap[i].style.paddingRight = '100px'
    } else arrOfWrap[i].style.paddingRight = `${paddingRight}px`
  }
})

window.addEventListener('scroll', () => {
  for (let i in arrOfWrap) {
    const menuCoords = menu.getBoundingClientRect()
    const menuAverageOffset =
      window.pageYOffset + menuCoords.top + menuCoords.height / 2
    const topOffset = arrOfWrap[i].offsetTop
    const bottomOffset =
      Number(
        window
          .getComputedStyle(arrOfWrap[i])
          .getPropertyValue('height')
          .slice(0, -2)
      ) + arrOfWrap[i].offsetTop

    if (topOffset < menuAverageOffset && bottomOffset > menuAverageOffset) {
      window
        .getComputedStyle(arrOfWrap[i])
        .getPropertyValue('background-color') === 'rgb(20, 20, 20)'
        ? (menu.style.backgroundImage = `url('./images/menuWhite.png')`)
        : (menu.style.backgroundImage = `url('./images/menuBlack.png')`)
    }
  }
})

window.addEventListener('resize', () => {
  const menuOffset = avatarImg.offsetLeft - 70
  menuOffset > 30
    ? (menu.style.left = `${menuOffset}px`)
    : (menu.style.left = `30px`)
  const paddingRight = window.innerWidth - 816
  for (let i in arrOfWrap) {
    if (paddingRight < 30) {
      arrOfWrap[i].style.paddingRight = '30px'
    } else if (paddingRight > 100) {
      arrOfWrap[i].style.paddingRight = '100px'
    } else arrOfWrap[i].style.paddingRight = `${paddingRight}px`
  }
})

menu.onclick = () => {
  navigation.style.display = 'block'
  navigationBackground.style.display = 'block'
}

closeBtn.onclick = () => {
  navigation.style.display = 'none'
  navigationBackground.style.display = 'none'
}

for (let i in navigationTxtArr) {
  navigationTxtArr[i].onclick = () => {
    navigation.style.display = 'none'
    navigationBackground.style.display = 'none'
    arrOfWrap[i].scrollIntoView(true)
  }
}
