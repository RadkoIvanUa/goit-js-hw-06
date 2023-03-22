const ref = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

ref.input.addEventListener("input", onInputEvent);

function onInputEvent(event) {
  event.currentTarget.value !== ""
    ? (ref.output.textContent = event.currentTarget.value)
    : (ref.output.textContent = "Anonymous");
}
