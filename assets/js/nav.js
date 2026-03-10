document.addEventListener("DOMContentLoaded", function() {
    // 1. The Navigation HTML
    const navHTML = `
        <nav>
            <a href="index.html" class="logo"><span class="logo-first">semj</span><span class="logo-second">28.</span></a>
            <div class="nav-links">
                <a href="index.html" id="nav-connect">Connect</a>
                <a href="about.html" id="nav-about">About Me</a>
            </div>
        </nav>
    `;

    // 2. Inject it into the placeholder
    const placeholder = document.getElementById("nav-placeholder");
    if (placeholder) {
        placeholder.innerHTML = navHTML;
    }

    // 3. Highlight the active page automatically
    const currentPath = window.location.pathname;
    
    if (currentPath.includes("about.html")) {
        document.getElementById("nav-about").classList.add("active");
    } else {
        // Default to Connect being active
        document.getElementById("nav-connect").classList.add("active");
    }
});