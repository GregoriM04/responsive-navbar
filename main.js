let openMenu = document.getElementById("open-menu");
let closeMenu = document.querySelector(".close-menu");
let navMenu = document.querySelector(".menu-container");
let toggleContainer = document.querySelector(".toggle-container");

// ***** first try *****
// openMenu.onclick = () => {
//     navMenu.classList.toggle("active");
//     toggleContainer.classList.toggle("active");
// };

// closeMenu.onclick = () => {
//     navMenu.classList.toggle("active");
//     toggleContainer.classList.toggle("active");
// };

// ***** second try ***** 
function toggleSwitch() {
  navMenu.classList.toggle("active");
  toggleContainer.classList.toggle("active");
}

openMenu.addEventListener("click", toggleSwitch);

closeMenu.addEventListener("click", toggleSwitch);
