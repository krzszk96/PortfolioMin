const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5 ease forwards ${
          index / 7 + 2
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
  nav.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5 ease forwards ${
          index / 7 + 2
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};
navSlide();

new Glider(document.querySelector(".glider"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  draggable: true,
  dots: "#dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  responsive: [
    {
      breakpoint: 576,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});
