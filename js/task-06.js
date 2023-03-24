const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  if (
    event.currentTarget.value.trim().length !== Number(inputEl.dataset.length)
  ) {
    inputEl.classList.add("invalid");
  } else {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.replace("invalid", "valid");
    } else {
      inputEl.classList.add("valid");
    }
  }
}
