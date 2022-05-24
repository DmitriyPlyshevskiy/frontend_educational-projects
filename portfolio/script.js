const hamburger = document.querySelector('.hamburger');
const navOpen = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

function openMenu() {
    hamburger.classList.toggle('is-active');
    navOpen.classList.toggle('nav-open');
}

hamburger.addEventListener('click', openMenu);

function closeMenu() {
    hamburger.classList.remove('is-active');
    navOpen.classList.remove('nav-open');
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu))