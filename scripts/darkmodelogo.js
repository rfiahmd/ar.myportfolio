const appElement = document.getElementById("app-inner");
const modeSwitcherBtn = document.querySelector(".modeSwitcherBtn");
const imageLight = document.getElementById("imageLight");
const imageDark = document.getElementById("imageDark");

modeSwitcherBtn.addEventListener("click", toggleAppMode);

function toggleAppMode() {
    const currentMode = appElement.dataset.mode;
    const newMode = currentMode === "light" ? "dark" : "light";

    appElement.dataset.mode = newMode;

    if (currentMode !== newMode) {
        // Update only if the mode is actually changed
        updateFavicon();
        updateImage();
    }

    // Save the mode to localStorage
    localStorage.setItem("nafieSavedMode", newMode);
}

function updateFavicon() {
    const faviconLight = document.getElementById("faviconLight");
    const faviconDark = document.getElementById("faviconDark");

    if (appElement.dataset.mode === "light") {
        // Use Light Mode Favicon
        faviconLight.setAttribute("href", "assets/1.png");
        faviconDark.setAttribute("href", "assets/-1.png");
    } else {
        // Use Dark Mode Favicon
        faviconLight.setAttribute("href", "assets/-1.png");
        faviconDark.setAttribute("href", "assets/1.png");
    }
}

function updateImage() {
    if (appElement.dataset.mode === "light") {
        // Use Light Mode Image
        imageLight.style.display = "block";
        imageDark.style.display = "none";
    } else {
        // Use Dark Mode Image
        imageLight.style.display = "none";
        imageDark.style.display = "block";
    }
}

// Initial Setup
const savedMode = localStorage.getItem("nafieSavedMode");
if (savedMode) {
    // Set the mode from localStorage if available
    appElement.dataset.mode = savedMode;
    updateFavicon();
    updateImage();
} else {
    // Set the default mode if no mode is saved in localStorage
    updateFavicon();
    updateImage();
}
