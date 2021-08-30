'use strict';


// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>{
const target = event.target;
const link = target.dataset.link;
if(link==null) {
    return;
}
console.log(event.target.dataset.link);
const scrollTo= document.querySelector(link);
scrollTo.scrollIntoView({behavior:"smooth"});
});

// Handle click on "contact me" button on home
const contactBtn = document.querySelector('.home_contact');
contactBtn.addEventListener('click', (event) =>{
const target = event.target;
const link = target.dataset.link;
if(link==null) {
    return;
}
console.log(event.target.dataset.link);
const scrollTo= document.querySelector(link);
scrollTo.scrollIntoView({behavior:"smooth"});
});

// Handle click on "contact me" button on home
// const contactBtn = document.querySelector('.home_contact');
// contactBtn.addEventListener('click', (event) =>{
//     scrollIntoView(`#contact`);
// });
// function scrollIntoView(selector){
//     const scrollTo= document.querySelector(link);
// scrollTo.scrollIntoView({behavior:"smooth"});
// }

// Make navbar transparent when it is on the top
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
home.style.opacity = 1- window.scrollY /homeHeight;
});
