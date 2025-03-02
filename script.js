function toggleMenu() {
    console.log("Menu toggle clicked!");  // Debugging log
    const nav = document.querySelector(".nav-links");
    if (nav) {
        nav.classList.toggle("nav-active");
        console.log("Toggled 'nav-active' class!");
    } else {
        console.error("Error: .nav-links element not found.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (menuToggle && nav) {
        console.log("Menu toggle found, adding event listener.");
        menuToggle.addEventListener("click", function () {
            console.log("Menu clicked! Toggling class...");
            nav.classList.toggle("nav-active");
            console.log("Current classList:", nav.classList);
        });
    } else {
        console.error("Error: menu-toggle or nav-links not found in DOM.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();
});

