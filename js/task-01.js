const categoriesArray = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesArray.length}`);
categoriesArray.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
