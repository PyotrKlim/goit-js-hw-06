const textInputElem = document.querySelector("#validation-input");
const lengthDefoltRef = Number(textInputElem.dataset.length);

textInputElem.addEventListener("blur", validaionInputOfLength);

function validaionInputOfLength() {
  let textInputLength = textInputElem.value.length;

  switch (textInputLength) {
    case lengthDefoltRef:
      textInputElem.classList.add("valid");
      textInputElem.classList.remove("invalid");
      break;
    case 0:
      textInputElem.classList.remove("valid");
      textInputElem.classList.remove("invalid");
      break;

    default:
      textInputElem.classList.add("invalid");
      break;
  }
}
