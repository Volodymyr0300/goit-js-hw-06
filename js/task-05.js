// !
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name-output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// !
function itWritesInputsNameToTitleWhenInputChange() {
  const input = document.querySelector("#name-input");
  const title = document.querySelector("#name-output");
  function onInputChange(event) {
    event.currentTarget.value === ""
      ? (title.textContent = "Anonymous")
      : (title.textContent = event.currentTarget.value);
  }
  input.addEventListener("input", onInputChange);
}

itWritesInputsNameToTitleWhenInputChange();
