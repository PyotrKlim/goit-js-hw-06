const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
  const category = item.querySelector("h2");
  const number = item.querySelectorAll(`li`);
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${number.length}`);
});
