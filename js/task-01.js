const categoriesRef = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesRef.children.length}`);

[...categoriesRef.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
