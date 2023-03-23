function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  color: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

ref.button.addEventListener("click", onClick);

function onClick() {
  ref.color.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
