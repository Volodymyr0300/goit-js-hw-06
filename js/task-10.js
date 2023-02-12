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

function itCreateColorizeDivAndRemoveItWhenButtonPush() {
  const inputForm = document.querySelector("#controls").firstElementChild;

  const btnCreate = document.querySelector("button");

  const btnDestroy = document.querySelector("button").nextElementSibling;

  const boxOfDivContainers = document.querySelector("#boxes");

  function itTakesValueInInputAndChangeItToNumberAndCreatingDivContainersWithRandomBGColorAndGrowingWidthAndHeightWhenButtonPushClick() {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    function createBoxes(amount) {
      amount = Number(inputForm.value);
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

      boxOfDivContainers.insertAdjacentHTML(
        "afterbegin",
        arr
          .map(
            (arrItem) =>
              `<div style="height:${arrItem.style.height}; width:${arrItem.style.width}; background-color:${arrItem.style.backgroundColor}"></div>`
          )
          .join("")
      );
    }

    btnCreate.addEventListener("click", createBoxes);
  }

  itTakesValueInInputAndChangeItToNumberAndCreatingDivContainersWithRandomBGColorAndGrowingWidthAndHeightWhenButtonPushClick();

  function itRemovingCreatingObjects() {
    btnDestroy.addEventListener("click", removeChildrenOfDivIdBoxes);

    function removeChildrenOfDivIdBoxes() {
      boxOfDivContainers.childNodes.forEach((element) => {
        element.remove();
      });
    }
  }
  itRemovingCreatingObjects();
}

itCreateColorizeDivAndRemoveItWhenButtonPush();
