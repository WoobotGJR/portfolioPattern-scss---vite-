import './src/scss/style.scss';

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuNavItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

const toggleMenu = () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  menuNav.classList.toggle('open');
  menuNavItems.forEach((item) => item.classList.toggle('open'));
  showMenu = !showMenu;
};

menuBtn.addEventListener('click', toggleMenu);
