// 1. находим список всех элементов с классом grid-item, кладем этот список (массив) в переменную
const gridItemList = document.querySelectorAll('.grid-item')
// 2. кладем в переменную первый img элемент с классом grid-item
const targetElement = gridItemList[0];

// 3. объявляем колл бэк, который будет вызываться внутри метода addEventListener во время клика на img элемент
const replaceImage = (event) => {
  console.log(event.currentTarget)
  const imageElement = event.currentTarget.children[0]
  console.log(imageElement.src)
  if (imageElement.src.includes("images/1.png")) {
    imageElement.src = imageElement.src.replace("images/1.png", "images/2.png")
  } else {
    imageElement.src = imageElement.src.replace("images/2.png", "images/1.png")
  }
}

// 4. подписываемся на событие клика мышки внутри img элемента targetElement 
// передаем колл бэк replaceImage
targetElement.addEventListener('click', replaceImage)



// JUST EXAMPLES BELOW
// const addEventListener = (type, cb) => {
//   if (type === 'click' && targetElement === 'div') {
//     cb()
//   }
// }

// function showDick() {
//   console.log('ХУЙ')
// }

// const showDick3 = function showDick() {
//   console.log('ХУЙ')
// }

// targetElement.addEventListener('mouseout', showDick3)
