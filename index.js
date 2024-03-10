const gridContainer = document.getElementById("gridContainer");
const gridItems = gridContainer.getElementsByClassName("grid-item");
const win = document.querySelector(".hidden");

// Создание массива уникальных элементов
const uniqueElements = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "./images/6.png",
  "./images/7.png",
  "./images/8.png",
];

// Дублирование элементов массива
const duplicatedElements = uniqueElements.slice();

// Соединение двух массивов
const combinedArray = uniqueElements.concat(duplicatedElements);
console.log(combinedArray);

// Перемешивание массива случайным образом
for (let i = combinedArray.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = combinedArray[i];
  combinedArray[i] = combinedArray[j];
  combinedArray[j] = temp;
}

let flippedCards = [];
let canClick = true; // Флаг, позволяющий кликать на карточки
let openedCards = 0;

// Обработчик событий для каждой карточки
for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("click", function (event) {
    if (!canClick) return; // Если кликать нельзя, выходим

    const dataIndex = event.currentTarget.getAttribute("data-index");
    const imageSrc = combinedArray[dataIndex];
    // console.log(imageSrc);
    // Если карточка уже открыта, игнорируем клик
    if (flippedCards.includes(dataIndex)) {
      return;
    }

    event.currentTarget.innerHTML = `<img src="${imageSrc}" alt="Image">`;
    flippedCards.push({ index: dataIndex, src: imageSrc });

    // Если у нас уже 2 перевернутые карточки, проверяем их
    if (flippedCards.length === 2) {
      canClick = false; // Запрещаем кликать, пока выполняется проверка
      setTimeout(checkCards, 500);
    }
  });
}

function checkCards() {
  const [card1, card2] = flippedCards;
  // console.log(flippedCards);
  if (card1.src === card2.src && card1.index != card2.index) {
    // Если картинки совпадают, скрываем их
    gridItems[card1.index].classList.add("hidden");
    gridItems[card2.index].classList.add("hidden");
    openedCards++;
    console.log(openedCards)
  } else {
    // Если картинки не совпадают, переворачиваем их обратно
    gridItems[
      card1.index
    ].innerHTML = `<img src="./images/cover.jpg" alt="Cover">`;
    gridItems[
      card2.index
    ].innerHTML = `<img src="./images/cover.jpg" alt="Cover">`;
  }
  
  if (openedCards === 8) {
    win.classList.add("congrats");
  }
  // Сбрасываем перевернутые карточки и разрешаем кликать снова
  flippedCards = [];
  canClick = true;
}


