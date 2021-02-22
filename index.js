// c-nav--toggled
var nav = document.getElementById("nav");

if (window.innerWidth <= 600) {
    onToggle();
}

function onToggle() {
    nav.classList.toggle("c-nav--toggled");
}