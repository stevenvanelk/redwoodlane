function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("nav-active");
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();
});

