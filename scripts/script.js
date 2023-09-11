const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  keyboard: {
    enable: true,
    onlyInViewport: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
  },
  speed: 800,
});

const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const body = document.body;

burger.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
  nav.addEventListener("click", function () {
    this.classList.remove("active");
    burger.classList.remove("active");
    body.classList.remove("lock");
  });
  body.classList.toggle("lock");
});
