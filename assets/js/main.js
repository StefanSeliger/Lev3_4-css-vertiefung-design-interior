let name = document.getElementById("name")
let mail = document.getElementById("mail")
let message = document.getElementById("message")

function submitData() {
    console.log(name.value)
    console.log(mail.value)
    console.log(message.value)
}
let navigation = document.getElementById("navigation")
let mobileNav = document.getElementById("mobileNav")

function menu() {
    navigation.style.display = "block"
    mobileNav.style.display = "none"
    navigation.style.fontSize = "0.8rem"
}