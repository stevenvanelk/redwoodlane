document.addEventListener("DOMContentLoaded", function () {
    let cookieBanner = document.getElementById("cookie-banner");
    let acceptButton = document.getElementById("accept-cookies");
    let declineButton = document.getElementById("decline-cookies");

    // Check if consent is already given
    if (localStorage.getItem("cookieConsent") === "accepted") {
        enableTracking();
        cookieBanner.style.display = "none";
    } else if (localStorage.getItem("cookieConsent") === "declined") {
        disableTracking();
        cookieBanner.style.display = "none";
    }

    // Accept button event
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "accepted");
        enableTracking();
        cookieBanner.style.display = "none";
    });

    // Decline button event
    declineButton.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "declined");
        disableTracking();
        cookieBanner.style.display = "none";
    });

    function enableTracking() {
        // Dynamically add Google Analytics script if user accepts cookies
        let analyticsScript = document.createElement("script");
        analyticsScript.async = true;
        analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-BTZB8426Q1";
        document.head.appendChild(analyticsScript);

        let analyticsInit = document.createElement("script");
        analyticsInit.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BTZB8426Q1');
        `;
        document.head.appendChild(analyticsInit);
    }

    function disableTracking() {
        // Block Google Analytics script
        window['ga-disable-G-BTZB8426Q1'] = true;
    }
});
