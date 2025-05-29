'use strict';

/**
 * Navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

// Elements that will toggle the navbar
const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Add click event listeners to open/close navbar and overlay
navElemArr.forEach(elem => {
  elem.addEventListener("click", navToggleEvent);
});

// Close navbar when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
});

/**
 * Header and Go-to-top button activation on scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
