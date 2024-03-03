const form = document.querySelector(".login-form")
form.addEventListener("submit", formFunction)
function formFunction(event) {
    event.preventDefault();
    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {

        alert('All form fields must be filled in');

    } else {
        console.log(event.currentTarget.elements.email.value.trim());
        console.log(event.currentTarget.elements.password.value.trim());
    }
    event.currentTarget.reset();

}