const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const loginButton = document.getElementById("login-button");
const loginConfirmButton = document.getElementById("login-confirmed-button");
const profileName = document.getElementById("profile-name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function handleLoginInput() {
    if (savedUsername) {
        window.location.reload();
        alert("Are you sure ?");
        loginInput.value = "";
        localStorage.removeItem(USERNAME_KEY);
        profileName.innerText = "Guest";
        loginForm.classList.add(HIDDEN_CLASSNAME);
        loginButton.value = "Log in";
    }
    if (savedUsername === null && loginButton.value === "Log in") {
        loginButton.value = "Cancel";
        loginForm.classList.remove(HIDDEN_CLASSNAME);
    } else {
        loginButton.value = "Log in";
        loginForm.classList.add(HIDDEN_CLASSNAME);
    }
}

function onLoginSubmit() {
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    profileName.innerText = username;
    localStorage.setItem(USERNAME_KEY, username);
    loginButton.value = "Log out";
}

if (savedUsername === null) {
    loginForm.addEventListener("submit", onLoginSubmit);
    profileName.innerText = "Guest";
    loginButton.value = "Log in";
} else {
    loginButton.value = "Log out";
    profileName.innerText = savedUsername;
}

loginButton.addEventListener("click", handleLoginInput);
