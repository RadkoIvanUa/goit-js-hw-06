const ref = {
  fontSizeContrtol: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

ref.fontSizeContrtol.addEventListener("input", onInput);

function onInput(event) {
  ref.text.style.fontSize = event.currentTarget.value + "px";
}
