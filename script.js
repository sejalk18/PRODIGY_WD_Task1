// Change navigation background color when scrolled
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('scrolled', scrolled);
});
