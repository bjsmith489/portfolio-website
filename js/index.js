const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const portfolioItem = document.querySelectorAll('.portfolio__item');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

portfolioItem.forEach(item => {
    item.addEventListener('mouseover', () =>{
        item.innerHTML 
    });
});