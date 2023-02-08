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

const listEl = document.querySelector("#categories");
console.log(listEl);
// console.dir(listEl);

const listItemEl = document.querySelectorAll("li.item");
// console.log(listItemEl);
// console.log(typeof listItemEl);
console.log(`Number of categories: ${listItemEl.length}`);

// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).

// console.log(listEl.parentNode);
// console.log(listEl.childNodes);
// console.log(listEl.children);
// // console.log(listEl.firstChild);
// console.log(listEl.firstElementChild);
// console.log(listEl.childElementCount);
// // console.log(listEl.lastChild);
// console.log(listEl.lastElementChild);
// // console.log(listEl.previousSibling);
// console.log(listEl.previousElementSibling);
// // console.log(listEl.nextSibling);
// console.log(listEl.nextElementSibling);

console.log(
  document.body.querySelector("#categories").firstElementChild.lastElementChild
    .childElementCount
);
console.log(
  document.querySelector("#categories").firstElementChild.nextElementSibling
    .lastElementChild.childElementCount
);

console.log(
  document.body.querySelector("#categories").lastElementChild.lastElementChild
    .childElementCount
);
