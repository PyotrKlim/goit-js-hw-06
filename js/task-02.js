const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

const elements = ingredients.map((elem) => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = elem;
  return element;
});

listIngredients.append(...elements);
