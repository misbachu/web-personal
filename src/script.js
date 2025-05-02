// select element
const lineHamburger = document.querySelectorAll(".line");
const hamburger = document.querySelector("#hamburger");
const lineMid = document.querySelector(".line-mid");
const navMenu = document.querySelector("#nav-menu");
const toTop = document.getElementById("toTop");
// blir effect

window.onscroll = function () {
  const header = document.querySelector(".header");
  const headerCont = document.querySelector(".header-cont");
  const fixedNav = header.offsetTop;
  if (window.scrollY > fixedNav) {
    header.classList.add("scroll");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
    // headerCont.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");

    // headerCont.classList.remove("padd-cont");
  }
};
// haumurger effect
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

if (true) {
}

window.addEventListener("click", (e) => {
  if (e.target !== hamburger && e.target !== navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

const html = document.querySelector("#html");
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
