var e=document.querySelector(".page-header__toggle"),a=document.querySelector(".page-header__nav");e.classList.remove("page-header__toggle--nojs");a.classList.remove("page-header__nav--nojs");e.addEventListener("click",()=>{e.classList.toggle("page-header__toggle--active"),a.classList.toggle("page-header__nav--opened")});var t=document.querySelector(".slider");t&&document.querySelector(".slider__range").addEventListener("input",r=>{t.style.setProperty("--slide-width",`${r.target.value}%`)});