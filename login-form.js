const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const loginButton = document.getElementById("login-button");
const loginConfirmButton = document.getElementById("login-confirmed-button");

let onShowLoginInput = false;
loginForm.style.display = "none";

function handleLoginInput() {
    loginForm.style.display = onShowLoginInput ? "none" : "block";
    loginButton.value = onShowLoginInput ? "Log in" : "Cancel";
    onShowLoginInput = !onShowLoginInput;
}

function onLoginConfirmButtonClick() {
    const username = loginInput.value;
    if (username === "") {
        alert("please write your name");
    } else if (username.length > 10) {
        alert("Your name is too long");
    }
}

loginButton.addEventListener("click", handleLoginInput);
loginConfirmButton.addEventListener("click", function () {});
