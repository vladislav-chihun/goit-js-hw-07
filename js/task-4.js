const form = document.querySelector(".login-form")
form.addEventListener("submit", formFunction)
function formFunction(event) {
    event.preventDefault();
    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {

        alert('All form fields must be filled in');

    } else {
        const formData = {
            email: event.currentTarget.elements.email.value.trim(),
            password: event.currentTarget.elements.password.value.trim()
        };
        console.log(formData)
    }
    event.currentTarget.reset();

}