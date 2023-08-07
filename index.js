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