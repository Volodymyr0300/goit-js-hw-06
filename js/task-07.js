// !
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

// !

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function onInputChange(event) {
  console.log(Math.floor(event.currentTarget.value / 2));
  text.style.fontSize = `${Math.floor(event.currentTarget.value / 2)}px`;
}

input.addEventListener("input", onInputChange);
