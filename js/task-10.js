function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNumber = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const createBoxes = (amount) => {
  const boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.background = getRandomHexColor();
    boxesArray.push(box);
  }
  return boxesArray;
};
const destroyBoxes = () => {
  boxes.innerHTML = "";
};
createButton.addEventListener("click", () => {
  let readyBoxesArray = createBoxes(inputNumber.value);
  boxes.append(...readyBoxesArray);
});
destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
