const navToggle = document.querySelector('.page-header__toggle');
const navMain = document.querySelector('.page-header__nav');
const logo = document.querySelector('.logo');

navToggle.classList.remove('page-header__toggle--nojs');
navMain.classList.remove('page-header__nav--nojs');
logo.classList.remove('logo--nojs');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('page-header__toggle--active');
  navMain.classList.toggle('page-header__nav--opened');
});

const slider = document.querySelector('.slider');
if(slider) {
  document.querySelector('.slider__range').addEventListener('input', (event) => {
    slider.style.setProperty('--slide-width', `${event.target.value}%`);
  });
}
