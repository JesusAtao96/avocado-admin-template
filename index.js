// c-nav--toggled
var nav = document.getElementById("nav")
var logo = document.getElementById("logo")

if (window.innerWidth <= 600) {
  onToggle()
}

function onToggle() {
  nav.classList.toggle("c-nav--toggled")

  if (nav.classList.contains("c-nav--toggled")) {
    logo.innerText = "A"
  } else {
    logo.innerText = "Avocado"
  }
}
