$(document).ready(function() {
  var $body = $('body');

  var $home = $('<a>Go back</a>').attr('id', 'home').attr('href', 'index.html');
  var $container = $('<div>');
  var $form = $('<form>').attr('id', 'form');
  var $showAll = $('<button>Show all hints</button>').attr('id', 'show-all');
  var $loginInfo = $('<span>You need to enter valid login</span>').addClass('info login-info').hide();
  var $emailInfo = $('<span>You need to enter valid e-mail</span>').addClass('info email-info').hide();
  var $ageInfo = $('<span>You need to enter your age</span>').addClass('info age-info').hide();
  var $passwordInfo = $('<span>You need to enter your password</span>').addClass('info password-info').hide();
  var $passwordRepeatInfo = $('<span>Your password must be the same as in the previous field</span>').addClass('info password-repeat-info').hide();
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

  $showAll.on('click', function functionName() {
    $loginInfo.fadeToggle(400);
    $emailInfo.fadeToggle(400);
    $ageInfo.fadeToggle(400);
    $passwordInfo.fadeToggle(400);
    $passwordRepeatInfo.fadeToggle(400);
  });
  $showAll.on('mouseleave', function () {
    $loginInfo.fadeToggle(400);
    $emailInfo.fadeToggle(400);
    $ageInfo.fadeToggle(400);
    $passwordInfo.fadeToggle(400);
    $passwordRepeatInfo.fadeToggle(400);
  });

  $body.append($container);
  $container.append($form);
  $form.append($login);
  $form.append($loginInfo);
  $form.append($email);
  $form.append($emailInfo);
  $form.append($age);
  $form.append($ageInfo);
  $form.append($password);
  $form.append($passwordInfo);
  $form.append($passwordRepeat);
  $form.append($passwordRepeatInfo);
  $form.append($formSubmit);
  $body.append($showAll);
  $body.append($home);

  var $input = $('input');

  $input.on('mouseenter', function (elem) {
    $_this = $(this);
    $_this.next().fadeToggle(400);
  });
  $input.on('mouseleave', function (elem) {
    $_this = $(this);
    $_this.next().fadeToggle(100);
  });

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
