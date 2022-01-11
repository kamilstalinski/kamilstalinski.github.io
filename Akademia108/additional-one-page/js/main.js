btnHamburger = document.querySelector('.hamburger-btn');
navbarMenu = document.querySelector('.navbar-items');

const callToAction = () => {
    navbarMenu.classList.toggle('active');
    btnHamburger.classList.toggle('hamburger-active');
};

btnHamburger.addEventListener('click', callToAction);