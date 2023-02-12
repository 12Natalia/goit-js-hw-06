const validationInput = document.querySelector("#validation-input");

// Додаємо слухача подій
validationInput.addEventListener("blur", (event) => {
  if (event.target.value.length == validationInput.dataset.length) {
    validationInput.classList.add("valid");
    if (validationInput.classList.contains("invalid")) {
      validationInput.classList.remove("invalid");
    }
  } else {
    validationInput.classList.add("invalid");
    if (validationInput.classList.contains("valid")) {
      validationInput.classList.remove("valid");
    }
  }
});
