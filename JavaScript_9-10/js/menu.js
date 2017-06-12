$(document).ready(function() {
  $('.dropdown').hover(function() {
    $(this).children('.sub-menu').slideDown(400);
  }, function() {
    $(this).children('.sub-menu').slideUp(400);
  });
});
