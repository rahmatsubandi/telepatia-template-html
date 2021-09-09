AOS.init();

$("#owl-carousel").owlCarousel({
  items: 4,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  dots: false,
  smartSpeed: 800,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },

    600: {
      items: 3,
    },

    1024: {
      items: 4,
    },

    1366: {
      items: 4,
    },
  },
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

document.addEventListener("click", function (e) {
  // Hamburger menu
  if (e.target.classList.contains("hamburger-toggle")) {
    e.target.children[0].classList.toggle("active");
  }
});
