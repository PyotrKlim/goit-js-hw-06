const rangeRef = document.querySelector("#font-size-control");

let textRef = document.querySelector("#text");

textRef.style.fontSize = `${rangeRef.value}px`;

rangeRef.addEventListener("input", changeFontSize);

function changeFontSize() {
  let rangeNumb = Number(rangeRef.value);

  textRef.style.fontSize = `${rangeNumb}px`;
}
