/* Welcome text typewriter effect */

let i = 0;
let welcomeTxt = "to the bat world"; /* The text */

let speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < welcomeTxt.length) { 
        const welcome =  document.getElementById("welcome")
        welcome.innerHTML += welcomeTxt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);

    }
}

