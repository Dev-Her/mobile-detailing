function setMenuExpanded(isOpen) {
  const menuButton = document.querySelector(".nav__menu");
  if (menuButton) {
    menuButton.setAttribute("aria-expanded", String(isOpen));
  }
}

function openMenu() {
  document.body.classList.add("menuOpen");
  setMenuExpanded(true);
}

function closeMenu() {
  document.body.classList.remove("menuOpen");
  setMenuExpanded(false);
}
