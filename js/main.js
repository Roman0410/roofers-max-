$(window).scroll(function () {
  let header = $(".header");
  let scrollPosition = $(window).scrollTop();
  if (scrollPosition > 100) {
    header.addClass("header-scroll");
  } else {
    header.removeClass("header-scroll");
  }
});
$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".close-menu").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".faq-item").click(function (event) {
  $(this).closest("li").find(".answer").toggleClass("open");
  $(this).closest("li").find(".plus").toggleClass("open");
});
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
