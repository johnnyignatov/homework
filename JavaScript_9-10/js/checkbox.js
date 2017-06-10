$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-red',
    radioClass: 'iradio_square',
    increaseArea: '20%'
  });
  // $('label').css('margin', '50px');
  $('.checkboxes').css({
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
    padding: '50px 0'
  });
  $('label').css({
    display: 'block',
    margin: '5px 0'
  });
  $('label div').css({
    margin: '0 5px'
  });
});
