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

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
        console.log("Menu toggle found, adding event listener.");
        menuToggle.addEventListener("click", toggleMenu);
    } else {
        console.error("Error: .menu-toggle element not found.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();
});

