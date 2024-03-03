const inputField = document.querySelector("#name-input")
const textToChange = document.querySelector("#name-output")
inputField.addEventListener("input", textToChange)
function textChange(event) {
    event.currentTarget = textChange.textContent
    console.log(textToChange)
}