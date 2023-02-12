const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listItemsArray = [];
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  listItemsArray.push(listItem);
});
const list = document.querySelector("#ingredients");
list.prepend(...listItemsArray);
