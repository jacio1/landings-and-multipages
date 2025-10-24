const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".menu");
const heroContainer = document.querySelector(".header .container");
const headerLink = document.querySelector(".header-link");

burgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("active");
  burgerBtn.classList.toggle("active");

  if (menu.classList.contains("active")) {
    heroContainer.style.padding = "0";
    headerLink.style.display = "none";
  } else {
    heroContainer.style.padding = "";
    headerLink.style.display = "";
  }
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !burgerBtn.contains(e.target)) {
    menu.classList.remove("active");
    burgerBtn.classList.remove("active");

    heroContainer.style.padding = "";
  }
});
