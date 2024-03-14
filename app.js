const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")



form.addEventListener("submit", (e) => {

    let messages = []

    if (name.value === "" || name.value == null) {
        messages.push("Name should be filled")
    }

    if (password.value.length <= 6) {
        messages.push("Password can not be less than 6 characters")
    }

    if (password.value.length >= 20) {
        messages.push("Password can not be more than 20 characters")
    }

    if (password === "password") {
        messages.push("Passwrod can not be password")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(" , ")
    }

})
