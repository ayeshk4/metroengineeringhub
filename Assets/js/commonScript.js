$(document).ready(function(){
    $("#explore_btn").click(function(){
        window.location.href = "./services.html";
    });
    $("#whyUs_btn").click(function(){
        window.location.href = "./about.html";
    })


});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});