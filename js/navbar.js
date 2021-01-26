$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 10) {
      $('nav').addClass('active');
    } else {
      $('nav').removeClass('active');
    }
  });
});
