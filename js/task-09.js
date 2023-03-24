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
  const randomColor = getRandomHexColor();
  ref.color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}
