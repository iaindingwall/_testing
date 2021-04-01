const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

hamburger.addEventListener('click', mobileMenu);
navLink.forEach(n => n.addEventListener('click', closeMenu));

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('active');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('active');
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName('navbar')[0].style.top = '0px';
  } else {
    document.getElementsByClassName('navbar')[0].style.top = '-60px';
  }
  prevScrollpos = currentScrollPos;
};

// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav-menu');
// const navLink = document.querySelectorAll('.nav-link');
//
// hamburger.addEventListener('click', mobileMenu);
// navLink.forEach(n => n.addEventListener('click', closeMenu));
//
// function mobileMenu() {
//   hamburger.classList.toggle('active');
//   navMenu.classList.toggle('active');
// }
//
// function closeMenu() {
//   hamburger.classList.remove('active');
//   navMenu.classList.remove('active');
// }
//
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByClassName('navbar')[0].style.top = '0';
//   } else {
//     document.getElementsByClassName('navbar')[0].style.top = '-80px';
//   }
//   prevScrollpos = currentScrollPos;
// };
