const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links2');
 document.addEventListener("DOMContentLoaded", function () {
  // Get the current page path (e.g., /room.html)
  let currentPath = window.location.pathname;

  // Select all nav links in both desktop and mobile menus
  document.querySelectorAll(".nav-links a, .nav-links2 a").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
 const swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

 