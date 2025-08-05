const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links2');

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