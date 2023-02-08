const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//!
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// !

listItemsAdding();

function listItemsAdding() {
  const listEl = document.querySelector("#ingredients");
  console.log(listEl);

  const listItemPotatoes = document.createElement("li");
  listItemPotatoes.textContent = "Potatoes";
  listItemPotatoes.className = "item";
  console.log(listItemPotatoes);

  const listItemMushrooms = document.createElement("li");
  listItemMushrooms.textContent = "Mushrooms";
  listItemMushrooms.className = "item";
  console.log(listItemMushrooms);

  const listItemGarlic = document.createElement("li");
  listItemGarlic.textContent = "Garlic";
  listItemGarlic.className = "item";
  console.log(listItemGarlic);

  const listItemTomatos = document.createElement("li");
  listItemTomatos.textContent = "Tomatos";
  listItemTomatos.className = "item";
  console.log(listItemTomatos);

  const listItemHerbs = document.createElement("li");
  listItemHerbs.textContent = "Herbs";
  listItemHerbs.className = "item";
  console.log(listItemHerbs);

  const listItemCondiments = document.createElement("li");
  listItemCondiments.textContent = "Condiments";
  listItemCondiments.className = "item";
  console.log(listItemCondiments);

  listEl.append(
    listItemPotatoes,
    listItemMushrooms,
    listItemGarlic,
    listItemTomatos,
    listItemHerbs,
    listItemCondiments
  );
}
