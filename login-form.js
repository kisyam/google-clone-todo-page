const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const loginButton = document.getElementById("login-button");

let onShowLoginInput = false;
loginInput.style.display = "none";

function handleLoginInput() {
    console.log(1);
    loginInput.style.display = onShowLoginInput ? "none" : "block";
    onShowLoginInput = !onShowLoginInput;
}

loginButton.addEventListener("click", handleLoginInput);
