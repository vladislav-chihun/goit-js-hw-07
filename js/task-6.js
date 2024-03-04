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


createButton.addEventListener("click", function() {
  createBoxes(input.value);
});

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100 && divBox.querySelector("newElem")) {
    for (let i = 0; i < amount; i++){
      const randomColor = getRandomHexColor();
      const newElem = document.createElement("div");
      const size = 30 + (i * 10);
      newElem.style.width = size + "px";
      newElem.style.height= size + "px";
      newElem.style.backgroundColor = randomColor;
      divBox.append(newElem);
  }
  }
  
  input.value = ""
}
destroyButton.addEventListener("click", destroyBoxes)
function destroyBoxes() {
  divBox.innerHTML= ""
}

