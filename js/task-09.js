function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanRef = document.querySelector(".color");

const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", () => {
  document.body.style.background = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
});
