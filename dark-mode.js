const logoImage = document.getElementById("logo-image");
const darkModeToggle = document.getElementById("toggle");

let isDarkMode = localStorage.getItem("isDarkMode");

if (isDarkMode === "true") {
    document.body.classList.add("dark-mode");
    logoImage.src = "Google_1.png";
    darkModeToggle.checked = true;
} else {
    logoImage.src = "Google_0.png";
}

function handleDarkMode() {
    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
        logoImage.src = "Google_1.png";
        localStorage.setItem("isDarkMode", "true");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("isDarkMode", "false");
        logoImage.src = "Google_0.png";
    }
}

darkModeToggle.addEventListener("click", handleDarkMode);
