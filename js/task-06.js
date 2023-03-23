const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  event.currentTarget.value.trim().length !== Number(inputEl.dataset.length)
    ? inputEl.classList.add("invalid")
    : inputEl.classList.replace("invalid", "valid");
}

