$(function () {
  $(document).scroll(function () {
      var $nav = $(".lowerHeader"); // Fixed the selector
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
