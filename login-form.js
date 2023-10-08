const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const loginButton = document.getElementById("login-button");
const loginConfirmButton = document.getElementById("login-confirmed-button");
const profileName = document.getElementById("profile-name");

let onShowLoginInput = true;

function handleLoginInput() {
    if (loginButton.value === "Log out") {
        loginButton.value = onShowLoginInput ? "Log in" : "Cancel";
        loginInput.value = "";
        profileName.innerText = "Guest";
    }
    onShowLoginInput
        ? loginForm.classList.remove("hidden")
        : loginForm.classList.add("hidden");
    onShowLoginInput = !onShowLoginInput;
    loginButton.value = onShowLoginInput ? "Log in" : "Cancel";
}

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    onShowLoginInput
        ? loginForm.classList.remove("hidden")
        : loginForm.classList.add("hidden");
    onShowLoginInput = !onShowLoginInput;
    profileName.innerText = username;
    loginButton.value = "Log out";
}

loginButton.addEventListener("click", handleLoginInput);
loginForm.addEventListener("submit", onLoginSubmit);
