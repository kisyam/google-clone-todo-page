const toggleButton = document.getElementById("toggle");
const logoImage = document.getElementById("logo-image");
const darkModeBackground = document.querySelector(".darkMode");

let isButtonClicked = false;

function handleDarkMode() {
    console.log(3);
    isButtonClicked = !isButtonClicked;

    if (isButtonClicked) {
        logoImage.src = "Google_0.png";
        darkModeBackground.classList.remove("darkMode");
    } else {
        logoImage.src = "Google_1.png";
        darkModeBackground.classList.add("darkMode");
    }
}

toggleButton.addEventListener("click", handleDarkMode);
