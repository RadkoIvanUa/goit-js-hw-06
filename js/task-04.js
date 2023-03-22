const ref = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

ref.decrementBtn.addEventListener("click", onDecrementBtnClick);
ref.incrementBtn.addEventListener("click", onIncrementBtnBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  ref.value.textContent = counterValue;
}
function onIncrementBtnBtnClick() {
  counterValue += 1;
  ref.value.textContent = counterValue;
}
