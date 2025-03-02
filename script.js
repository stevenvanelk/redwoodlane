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

    if (!menuToggle) {
        console.error("Error: .menu-toggle not found.");
    }
    if (!nav) {
        console.error("Error: .nav-links not found.");
    }

    if (menuToggle && nav) {
        console.log("Menu toggle found, adding event listener.");
        
        menuToggle.addEventListener("click", function () {
            console.log("Hamburger menu clicked!");
            
            if (nav.style.display === "none" || nav.style.opacity === "0") {
                nav.style.display = "flex";
                nav.style.opacity = "1";
                nav.style.visibility = "visible";
            } else {
                nav.style.opacity = "0";
                nav.style.visibility = "hidden";
                setTimeout(() => {
                    nav.style.display = "none";
                }, 300);
            }
            
            console.log("Current nav styles:", window.getComputedStyle(nav).display);
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();
});

