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
navbarMenu.classList.remove('open');
// 스크롤링시 창이 닫힐 수 있도록
console.log(event.target.dataset.link);
const scrollTo= document.querySelector(link);
scrollTo.scrollIntoView({behavior:"smooth"});
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
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

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(homeheight);
  // console.log(1- window.scrollY /homehieght)
home.style.opacity = 1- window.scrollY /homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  const scrollTo = document.querySelector('#home');  // 함수정의
  scrollTo.scrollIntoView();
});