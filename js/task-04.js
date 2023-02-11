// Лічильник складається зі спану і кнопок,
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue,
// в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = document.querySelector("span").textContent;
console.log(counterValue);
console.log(typeof counterValue);

const btnDecrement = document.querySelector("#counter").firstElementChild;
console.log(btnDecrement);
btnDecrement.addEventListener("click", btnDecrementCount);

const btnIncrement = document.querySelector("#counter").lastElementChild;
console.log(btnIncrement);
btnIncrement.addEventListener("click", () => {
  return (counterValue = (Number(counterValue) + 1).toString());
});

function btnDecrementCount() {
  //   counterValue = ((Number(counterValue) -= 1).toString());
  //   return counterValue
}

function btnIncrementCount() {
  return (Number(counterValue) + 1).toString();
}
