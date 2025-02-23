const menuIcon = document.querySelector('#menu-icon');
const navlinks  = document.querySelector('.nav-links');

menuIcon.onClick = () => {
  navlinks.classList.toggle('active');
}
