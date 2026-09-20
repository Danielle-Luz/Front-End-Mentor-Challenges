const headerButton = document.querySelector(".header__menu-button");
const closeIcon = document.querySelector(".header__close-icon--closed");
const menu = document.querySelector(".menu__nav");

function showCloseIcon () {
  if(headerButton.classList.contains("header__menu-button--open")) {
    headerButton.classList.remove("header__menu-button--open");
    headerButton.classList.add("header__menu-button--closed");
    
    menu.classList.add("menu__nav--hidden");
    menu.classList.remove("menu__nav--open");
  } else {
    headerButton.classList.add("header__menu-button--open");
    headerButton.classList.remove("header__menu-button--closed");

    menu.classList.add("menu__nav--open");
    menu.classList.remove("menu__nav--hidden");
  }
}

headerButton.addEventListener("click", showCloseIcon );