const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links2');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
