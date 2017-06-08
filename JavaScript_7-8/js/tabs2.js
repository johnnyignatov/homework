$(document).ready(function() {
  var $container = $('.container');
  var $list = $('.list');
  var $toggled = $('.toggled').css({
    listStyle: 'none',
    display: 'inline-block',
    width: '32%',
    textAlign: 'center'
  });

  $toggled.hide();
  $list.on('click', function (event) {
    console.log(event.target);
  });
});
