// 1. Получите элемент сетки
const gridContainer = document.getElementById("gridContainer");
// 2. Получите все элементы в сетке
const gridItems = gridContainer.getElementsByClassName('grid-item');

// Добавьте обработчик событий для каждого элемента в сетке

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("click", function (event) {
    // Обработка клика на элементе
    let dataIndex = event.currentTarget.getAttribute("data-index");
    // alert("Вы кликнули на элемент с индексом " + dataIndex);
  });
}

// Создаем массив с уникальными элементами
let uniqueElements = [
"./images/1.png",
"./images/2.png",
"./images/3.png",
"./images/4.png",
"./images/5.png",
"./images/6.png",
"./images/7.png",
"./images/8.png",
];

// Дублируем элементы массива
let  duplicatedElements = uniqueElements.slice();

// Соединяем два массива
let  combinedArray = uniqueElements.concat(duplicatedElements);

// Перемешиваем массив случайным образом
for (let i = combinedArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = combinedArray[i];
    combinedArray[i] = combinedArray[j];
    combinedArray[j] = temp;
}
console.log(combinedArray)
let coverArray = Array.from(gridItems);

console.log(coverArray)

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("click", function (event) {
    let dataIndex = event.currentTarget.getAttribute("data-index");
    let imageSrc = combinedArray[dataIndex];

    // Заменяем содержимое кликнутого элемента
    event.currentTarget.innerHTML = `<img src="${imageSrc}" alt="Image">`;
    
    
  });
}

