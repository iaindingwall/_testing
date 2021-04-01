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
// hide the navbar on scroll
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByClassName('navbar')[0].style.top = '0px';
//   } else {
//     document.getElementsByClassName('navbar')[0].style.top = '-60px';
//   }
//   prevScrollpos = currentScrollPos;
// };

// function focusRed() {
//   document.getElementsByTagName('image').style.zIndex = 1;
//   document.getElementById('bluebox').style.zIndex = -1;
// }
//
// function focusBlue() {
//   document.getElementById('redbox').style.zIndex = -1;
//   document.getElementById('bluebox').style.zIndex = 1;
// }

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById('img').style.top = '0px';
//   } else {
//     document.getElementsByClassName('navbar')[0].style.top = '-60px';
//   }
//   prevScrollpos = currentScrollPos;
// };
//
// const template = document.querySelector('template');
// const images = sources.map((source, index) => {
//   const item = template.content.cloneNode(true);
//   const image = item.querySelector('img');
//
//   image.addEventListener('load', () => fade(image));
//   image.addEventListener('click', () => animate(index));
//   toggle(image).src = `images/${source}`;
//
//   list.append(item);
//   return image;
// });
