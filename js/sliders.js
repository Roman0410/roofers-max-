$(".hero-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "ease-in-out",
  pauseOnHover: false,
});
$(window).on("load resize", function () {
  if ($(window).width() < 650) {
    $(".cars-list").slick({
      slidesToShow: 1,
      prevArrow: $(".cars .arrows").find(".prev"),
      nextArrow: $(".cars .arrows").find(".next"),
    });
  } else {
    $(".cars-list").slick("unslick");
  }
});
if (window.matchMedia("(max-width: 700px)").matches) {
  $(".services-list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".services .prev"),
    nextArrow: $(".services .next"),
  });
}
$(".process-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
});
$(".images-slider .slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  prevArrow: $(".images-slider .prev"),
  nextArrow: $(".images-slider .next"),
});
