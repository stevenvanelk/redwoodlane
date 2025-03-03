document.addEventListener("DOMContentLoaded", function() {
    let head = document.head;

    // Google Analytics (only added once)
    let analyticsScript = document.createElement("script");
    analyticsScript.async = true;
    analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-BTZB8426Q1";
    head.appendChild(analyticsScript);

    let analyticsInit = document.createElement("script");
    analyticsInit.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BTZB8426Q1');
    `;
    head.appendChild(analyticsInit);

    // Favicon (automatically added)
    let favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href = "images/favicon.ico";
    head.appendChild(favicon);
});
