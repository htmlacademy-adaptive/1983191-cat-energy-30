const navToggle = document.querySelector('.page-header__toggle');
const navMain = document.querySelector('.page-header__nav');

navToggle.classList.remove('page-header__toggle--nojs');
navMain.classList.remove('page-header__nav--nojs');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('page-header__toggle--active');
  navMain.classList.toggle('page-header__nav--opened');
});
