const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const counter = document.querySelector("#value");

let counterValue = 0;

plusBtn.addEventListener("click", () => {
  counterValue = counterValue + 1;

  counter.innerHTML = counterValue;
});

minusBtn.addEventListener("click", () => {
  counterValue = counterValue - 1;

  counter.innerHTML = counterValue;
});
