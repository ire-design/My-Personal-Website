/* /*navbar
var navbar = document.querySelector(".navbar");
window.onscroll = () =>{
    this.scrollY > 20? navbar.classList.add(".sticky") : navbar.classList.remove("sticky");
} */

/*Navbar*/
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

/*Smooth scrolling*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});