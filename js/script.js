const navbar = document.querySelector('.fixed-menu');
window.onscroll = () => {
    if (window.scrollY > 70) {
        navbar.classList.add('nav-active');
        
    } else {
        navbar.classList.remove('nav-active');
    }
};

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li')

burger.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');
    burger.classList.toggle('toggle');
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        });

    } else if (visibility === "true") {
        nav.setAttribute("data-visible", false);
        navLinks.forEach((link) => {
            link.style.animation = '';
        });
    }

});