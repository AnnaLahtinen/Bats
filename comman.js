/* Hamburger menu */
const bars = document.getElementById("bars");

bars.addEventListener("click", () => {
  links = document.getElementById("links");
  if (links.style.display === "flex") {
    links.style.display = "none";
  } else {
    links.style.display = "flex";
  }
});

/* Logo animation */

 const logo = document.getElementById("batLogo");
logo.addEventListener("click", () => {
  
    batSounds.play();
  
});



gsap.to("#batLogo", {
  duration: 2,
  top: "0.5rem",
  left: "1rem"

});