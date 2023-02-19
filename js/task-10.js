// !
// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

// !

// ! 8) у десятому завданні потрібно використати щось одне або шаблонні рядки або метод insertAdjacentHTML.
// ! Я не зрозумів як я можу використати або рядки або метод insertAdjacentHTML.
// ! Метод працює з рядками, а рядки змінюється адже змінюється width і height.
// ! Пробував через reduce() чи for of (штучно створивши пустий масив), але не вийшло.
// ??? Якщо є можливість наведіть будь-ласка, як саме Ви бачите рішення і що використовуючи.

const inputForm = document.querySelector("#controls").firstElementChild;

const btnCreate = document.querySelector("button");

const btnDestroy = document.querySelector("button").nextElementSibling;

const boxOfDivContainers = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  const arr = [];

  let sizes = 30;
  for (let i = 0; i <= Number(inputForm.value) - 1; i += 1) {
    const newElem = document.createElement("div");

    newElem.style.height = `${sizes}px`;
    newElem.style.width = `${sizes}px`;
    newElem.style.backgroundColor = getRandomHexColor();
    sizes += 10;
    arr.push(newElem);
  }

  console.log(arr);

  boxOfDivContainers.append(...arr);
}

btnCreate.addEventListener("click", createBoxes);

btnDestroy.addEventListener("click", removeChildrenOfDivIdBoxes);

function removeChildrenOfDivIdBoxes() {
  boxOfDivContainers.innerHTML = "";
}
