const headerButton = document.querySelector(".header__menu-button");
const closeIcon = document.querySelector(".header__close-icon--closed");

function showCloseIcon () {
  if(headerButton.classList.contains("header__menu-button--open")) {
    headerButton.classList.remove("header__menu-button--open");
    headerButton.classList.add("header__menu-button--closed");
  } else {
    headerButton.classList.add("header__menu-button--open");
    headerButton.classList.remove("header__menu-button--closed");
  }
}

headerButton.addEventListener("click", showCloseIcon );