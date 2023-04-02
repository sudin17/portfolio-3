var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    mavbar.classList.toggle('active')
};

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
};

const sr = ScrollReveral ({
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.home-img',{delay:400, origin:'top'})
sr.reveal('.about, .services, .cta, .resume, contact, .copyright',{delay:200, origin:'top'})