'use strict';

// 넷바 투명색
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (navbarHeight < window.scrollY) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//메뉴 위치 이동
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItem = document.querySelector('.navbar__menu__item');

navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  // 메뉴 border생성
  const menuBorder = document.querySelector('.navbar__menu__item.active');
  menuBorder.classList.remove('active');
  target.classList.add('active');

  if (link == null) {
    return;
  }
  //스크롤시 navbarMenu 없애기
  navbarMenuItem.classList.remove('open');

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});

// navbar 토글버튼 클릭(작은화면시)
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

//contact me 버튼 클릭시 이동
const contactBtn = document.querySelector('.home_contact');
contactBtn.addEventListener('click', (e) => {
  const contactLink = e.target.dataset.link;
  const scrollContactSection = document.querySelector(contactLink);
  scrollContactSection.scrollIntoView({ behavior: 'smooth' });
});

// 스크롤시 이전섹션 흐릿하게 하기
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');

document.addEventListener('scroll', () => {
  const homeHeight = home.getBoundingClientRect().height;
  const aboutHeight = about.getBoundingClientRect().height;
  const skillsHeight = skills.getBoundingClientRect().height;

  home.style.opacity = 1 - window.scrollY / homeHeight;
  about.style.opacity = 2 - window.scrollY / aboutHeight;
  skills.style.opacity = 4 - window.scrollY / skillsHeight;
});

// arrow up 버튼
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  const homeHeight = home.getBoundingClientRect().height;
  if (homeHeight / 2 < window.scrollY) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});
//arrow up버튼 클릭시 맨 위 상단으로 이동
arrowUp.addEventListener('click', () => {
  const top = document.querySelector('#home');
  top.scrollIntoView({ behavior: 'smooth' });
});

//프로젝트 필터링
const workbtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');
//카테고리 버튼 클래스 추가

workbtnContainer.addEventListener('click', (e) => {
  const fillter =
    e.target.dataset.fillter || e.target.parentNode.dataset.fillter;
  if (fillter == null) {
    return;
  }
  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (fillter === '*' || project.dataset.type.includes(fillter)) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });

    projectContainer.classList.remove('anim-out');
  }, 300);
  const selected = document.querySelector('.category__btn.selected');
  console.log(selected);
  e.target.classList.add('selected');
  selected.classList.remove('selected');
});
//문자 타이핑 구현
const homeDesciption = document.querySelector('.home_description');
const text = "Hi! I'm Jimin, Front-end developer";
let index = 0;

function typing() {
  homeDesciption.textContent += text[index++];
  if (index > text.length) {
    homeDesciption.textContent = ""
    index = 0;
  }
}
setInterval(typing,200);

