const headerButton = document.querySelector(".header__menu-button");

function showCloseIcon () {
  if(headerButton.classList.contains("header__menu-button--open")) {
    headerButton.classList.toggle("header__menu-button--closed");
  }
  
  headerButton.classList.toggle("header__menu-button--open");
}

headerButton.addEventListener("click", showCloseIcon );