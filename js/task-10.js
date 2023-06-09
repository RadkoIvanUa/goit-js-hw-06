const ref = {
  controls: document.querySelector("#controls"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const max = Number(ref.controls.firstElementChild.getAttribute("max"));

function createBoxes(amount) {
  if (amount <= max) {
    const divArray = [];

    let item = "";
    let size = 30;
    for (let i = 1; i <= amount; i += 1) {
      item = document.createElement("div");
      item.style.backgroundColor = getRandomHexColor();
      item.style.width = size + "px";
      item.style.height = size + "px";
      size += 10;
      divArray.push(item);
    }
    return ref.boxes.append(...divArray);
  }
}

function destroyBoxes() {
  ref.boxes.innerHTML = "";
}

ref.destroy.addEventListener("click", onClickDestroy);

ref.create.addEventListener("click", onCreate);

function onCreate() {
  const amount = Number(ref.controls.firstElementChild.value);
  createBoxes(amount);
}

function onClickDestroy() {
  destroyBoxes();
}
