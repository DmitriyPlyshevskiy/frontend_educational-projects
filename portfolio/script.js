const hamburger = document.querySelector('.hamburger');

function openCloseMenu() {
    hamburger.classList.toggle('is-active');
}

hamburger.addEventListener('click', openCloseMenu);