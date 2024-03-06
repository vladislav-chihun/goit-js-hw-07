const inputField = document.querySelector("#name-input")
const textToChange = document.querySelector("#name-output")
inputField.addEventListener("input", textFunction)
function textFunction(event) {
    if (inputField.value !="") {
        textToChange.textContent= event.currentTarget.value.trim()
    console.log(textToChange)
    } else {
        textToChange.textContent= "Anonymous"
    }
    
}