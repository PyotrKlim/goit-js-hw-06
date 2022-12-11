function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxGallery = document.querySelector("#boxes");
const inputElem = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");

const fun = function creteNewArr() {
  const elements = [];

  for (let i = 1; i <= inputElem.value; i++) {
    const newDiv = document.createElement("div");
    const parametrDiv = `${20 + i * 10}px`;

    newDiv.style.width = parametrDiv;
    newDiv.style.height = parametrDiv;
    newDiv.style.background = getRandomHexColor();
    newDiv.style.border = `3px solid ${getRandomHexColor()}`;

    elements.push(newDiv);
  }

  boxGallery.append(...elements);
};

btnCreate.addEventListener("click", fun);

const btnDestroy = document.querySelector("button[data-destroy]");

btnDestroy.addEventListener("click", () => {
  boxGallery.innerHTML = "";
});
