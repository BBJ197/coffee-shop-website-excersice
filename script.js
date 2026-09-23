const menuOpen = document.getElementById("menu-open-button");
const menuClose = document.getElementById("menu-close-button");
const menu = document.querySelector(".nav-menu");

menuOpen.addEventListener("click", () => {
  menu.classList.add("active");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("active");
});

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !menuOpen.contains(event.target)) {
    menu.classList.remove("active");
  }
});
