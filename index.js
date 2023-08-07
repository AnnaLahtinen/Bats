                /* Hamburger menu */
const bars = document.getElementById("bars");

bars.addEventListener("click", () => {
    links = document.getElementById("links");
    if (links.style.display === "flex") {
        links.style.display = "none";
    }
    else {
        links.style.display = "flex";
    }
});

                /* Logo animation */

const logo = document.getElementById("batLogo");
logo.addEventListener("click", () => {
    if (logo.className === "logo-img") {
        logo.className = "logo-img animation";
    }
    else {
        logo.className = "logo-img";
        batSounds = document.getElementById("batSounds");
        batSounds.play();
    }
    
});