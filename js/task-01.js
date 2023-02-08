// !
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// !

categoriesAndNumbersOfCategories();

function categoriesAndNumbersOfCategories() {
  const listItemEl = document.querySelectorAll("li.item");
  console.log(`Number of categories: ${listItemEl.length}`);

  const animalsTextContent =
    document.body.querySelector("#categories").firstElementChild
      .firstElementChild.textContent;
  console.log(`Category: ${animalsTextContent}`);

  const animalsChildElementCount =
    document.body.querySelector("#categories").firstElementChild
      .lastElementChild.childElementCount;
  console.log(`Elements: ${animalsChildElementCount}`);

  const productsTextContent =
    document.querySelector("#categories").firstElementChild.nextElementSibling
      .firstElementChild.textContent;
  console.log(`Category: ${productsTextContent}`);

  const productsChildElementCount =
    document.querySelector("#categories").firstElementChild.nextElementSibling
      .lastElementChild.childElementCount;
  console.log(`Elements: ${productsChildElementCount}`);

  const technologiesTextContent =
    document.body.querySelector("#categories").lastElementChild
      .firstElementChild.textContent;
  console.log(`Category: ${technologiesTextContent}`);

  const technologiesChildElementCount =
    document.body.querySelector("#categories").lastElementChild.lastElementChild
      .childElementCount;
  console.log(`Elements: ${technologiesChildElementCount}`);
}
