const sizeControl = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");
sizeControl.addEventListener("input", (evt) => {
  outputText.style.fontSize = `${evt.currentTarget.value}px`;
});
