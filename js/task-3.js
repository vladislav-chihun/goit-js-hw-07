const inputField = document.querySelector("#name-input")
const textToChange = document.querySelector("#name-output")
inputField.addEventListener("input", textFunction)
function textFunction(event) {
    if (inputField.value.trim() !="") {
        textToChange.textContent= event.currentTarget.value
    console.log(textToChange)
    }
    
}