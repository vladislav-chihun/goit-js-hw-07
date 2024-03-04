function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBox = document.querySelector("#boxes")
const formContainer = document.querySelector("#controls")
const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");


createButton.addEventListener("click", createCollection)

function createCollection() {
  
  const inputValue = input.value;
  for (let i = 0; i < inputValue; i++){
    const newElem = document.createElement("div");
    divBox.append(newElem)
  }
  input.value = ""
}

