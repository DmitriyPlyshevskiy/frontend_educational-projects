const hamburger = document.querySelector('.hamburger');
const navOpen = document.querySelector('.nav');
const navElements = document.querySelectorAll('.nav-items');

function openCloseMenu() {
    hamburger.classList.toggle('is-active');
    navOpen.classList.toggle('nav-open');
}

hamburger.addEventListener('click', openCloseMenu);

function closeMenu() {
    navOpen.classList.remove('nav-open');
}

navElements.addEventListener('click', closeMenu);