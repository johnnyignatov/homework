$(document).ready(function() {
  var $body = $('body');

  var $home = $('<a>Go back</a>').attr('id', 'home').attr('href', 'index.html');
  var $container = $('<div>');
  var $form = $('<form>').attr('id', 'form');
  var $showAll = $('<button>Show all hints</button>').attr('id', 'show-all');
  var $loginInfo = $('<span>You need to enter valid login</span>').addClass('login-info').hide();
  var $emailInfo = $('<div>You need to enter valid e-mail</div>').addClass('email-info').hide();
  var $ageInfo = $('<div>You need to enter your age</div>').addClass('age-info').hide();
  var $passwordInfo = $('<div>You need to enter your password</div>').addClass('password-info').hide();
  var $passwordRepeatInfo = $('<div>Your password must be the same as in the previous field</div>').addClass('password-repeat-info').hide();
  var $login = $('<input>').attr({
    type: 'text',
    autocomplete: 'off'
  });
  var $email = $('<input>').attr({
    type: 'email',
    autocomplete: 'off'
  });
  var $age = $('<input>').attr({
    type: 'number',
    autocomplete: 'off'
  });
  var $password = $('<input>').attr({
    type: 'password',
    id: 'password',
    autocomplete: 'off'
  });
  var $passwordRepeat = $('<input>').attr({
    type: 'password',
    id: 'check-password',
    autocomplete: 'off'
  });
  var $formSubmit = $('<input>').attr({
    type: 'submit',
    id: 'submit-form'
  }).val('Зарегистрироваться!').hide();


  $login.mouseenter(function () {
    $loginInfo.fadeToggle(400);
  });
  $login.mouseleave(function() {
    $loginInfo.fadeToggle(100);
  });

  $email.mouseenter(function() {
    $emailInfo.fadeToggle(400);
  });
  $email.mouseleave(function() {
    $emailInfo.fadeToggle(100);
  });

  $age.mouseenter(function() {
    $ageInfo.fadeToggle(400);
  });
  $age.mouseleave(function() {
    $ageInfo.fadeToggle(100);
  });

  $password.mouseenter(function() {
    $passwordInfo.fadeToggle(400);
  });
  $password.mouseleave(function() {
    $passwordInfo.fadeToggle(100);
  });

  $passwordRepeat.mouseenter(function() {
    $passwordRepeatInfo.fadeToggle(400);
  });
  $passwordRepeat.mouseleave(function() {
    $passwordRepeatInfo.fadeToggle(100);
  });

  $showAll.on('click', function functionName() {
    $loginInfo.fadeToggle(400);
    $emailInfo.fadeToggle(400);
    $ageInfo.fadeToggle(400);
    $passwordInfo.fadeToggle(400);
    $passwordRepeatInfo.fadeToggle(400);
  });

  $body.append($container);
  $container.append($form);
  $form.append($login);
  $form.append($email);
  $form.append($age);
  $form.append($password);
  $form.append($passwordRepeat);
  $form.append($formSubmit);
  $body.append($loginInfo);
  $body.append($emailInfo);
  $body.append($ageInfo);
  $body.append($passwordInfo);
  $body.append($passwordRepeatInfo);
  $body.append($showAll);
  $body.append($home);

$passwordRepeat.keyup(function() {
    if ($('#password').val() === $('#check-password').val() && $('#password').val() !== '' && $('#check-password').val() !== '' && $('input').val() !== '') {
      $formSubmit.fadeIn(500);
    } else {
      $formSubmit.fadeOut(500);
    }
  });

  $form.submit(function() {
    $container.hide();
    var $greeting = $('<h1>Congradulations!</h1>');
    var $greetLogin = $('<span></span>');
    var $greetPassword = $('<span></span>');
    $body.append($greeting);
    $body.append($greetLogin);
    $body.append($greetPassword);
    $greetLogin.append('Your login is - ' + $login.val());
    $greetPassword.append('Your password is - ' + $password.val());
    return false;
  });

});
