const navLinks = document.querySelectorAll(".nav__menu .nav__link");
const menuCloseButton = document.querySelector("#menu__close--button");
const menuOpenButton = document.querySelector("#menu__open--button");


menuOpenButton.addEventListener("click", () => {
    //**toggle mobile menu visibility */
    document.body.classList.toggle("show__mobile--menu");
});

// ** close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());

// ** close menu when the nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click () );
})

// * from swiper Initial Swiper

const swiper = new Swiper('.slider__wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //   responsive breakpoints
  breakpoints: {
   0: {
    slidesPerView: 1
   },
   768: {
    slidesPerView: 2
   },
   1024: {
    slidesPerView: 3
   },
  }

});