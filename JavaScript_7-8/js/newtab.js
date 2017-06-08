$(document).ready(function() {
  var $body = $('body');
  var $home = $('<a>Go back</a>').attr('id', 'home').attr('href', 'index.html');
  var $links = $('.list-link');
  var $text = $('.toggled');
  var curentLink;
  var textID;

  $body.append($home);
  $text.hide().first().show();
  $links.first().addClass('active');
  $links.on('focus', function (event) {
    event.preventDefault();
    curentLink = $(this);
    $links.removeClass('active');
    curentLink.addClass('active');
    textID = curentLink.attr('href');
    console.log($links);
    $text.hide();
    $(textID).show();

  });






});
