function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const backgroundColor = document.querySelector("body")
const textColor = document.querySelector("span")
button.addEventListener("click", colorChange)
function colorChange() {
  let randomColor = getRandomHexColor();
  backgroundColor.style.backgroundColor = `${randomColor}`
  textColor.style.color = `${randomColor}`
}