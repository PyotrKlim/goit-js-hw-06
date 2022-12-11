const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const funHandler = (handler) => {
  textOutput.textContent =
    handler.currentTarget.value === ""
      ? "Anonymous"
      : handler.currentTarget.value;
};

textInput.addEventListener("input", funHandler);
