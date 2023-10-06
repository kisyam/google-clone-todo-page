const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const loginButton = document.getElementById("login-button");

let onShowLoginInput = false;
loginForm.style.display = "none";

function handleLoginInput() {
    loginForm.style.display = onShowLoginInput ? "none" : "block";
    loginButton.value = onShowLoginInput ? "Log in" : "Cancel";
    onShowLoginInput = !onShowLoginInput;
}

loginButton.addEventListener("click", handleLoginInput);
