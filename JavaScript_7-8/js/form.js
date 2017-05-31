$(document).ready(function() {
  var $body = $('body');
  var $home = $('<a>Go back</a>').attr('id', 'home').attr('href', 'index.html');
  var $container = $('<div>');
  var $form = $('<form>').attr('id', 'form');
  var $loginInfo = $('<span>You need to enter valid login</span>').addClass('login-info').hide();
  var $emailInfo = $('<div>You need to enter valid e-mail</div>').addClass('email-info').hide();
  var $ageInfo = $('<div>You need to enter your age</div>').addClass('age-info').hide();
  var $passwordInfo = $('<div>You need to enter your password</div>').addClass('password-info').hide();
  var $passwordRepeatInfo = $('<div>Your password must be the same as in the previous field</div>').addClass('password-repeat-info').hide();
  var $login = $('<input>').attr({
    type: 'text',
    placeholder: 'Login',
    required: 'required'
  });
  var $email = $('<input>').attr({
    type: 'email',
    placeholder: 'E-mail',
    required: 'required'
  });
  var $age = $('<input>').attr({
    type: 'number',
    placeholder: 'Age',
    required: 'required'
  });
  var $password = $('<input>').attr({
    type: 'password',
    placeholder: 'Password',
    id: 'password',
    required: 'required'
  });
  var $passwordRepeat = $('<input>').attr({
    type: 'password',
    placeholder: 'Repeat password',
    id: 'check-password',
    required: 'required'
  });
  var $formSubmit = $('<input>').attr({
    type: 'submit',
    id: 'submit-form'
  }).val('Зарегистрироваться!').hide();

  $login.focus(function() {
    $loginInfo.fadeToggle(400);
  });
  $login.focusout(function() {
    $loginInfo.fadeToggle(400);
  });

  $email.focusin(function() {
    $emailInfo.fadeToggle(400);
  });
  $email.focusout(function() {
    $emailInfo.fadeToggle(400);
  });

  $age.focusin(function() {
    $ageInfo.fadeToggle(400);
  });
  $age.focusout(function() {
    $ageInfo.fadeToggle(400);
  });

  $password.focusin(function() {
    $passwordInfo.fadeToggle(400);
  });
  $password.focusout(function() {
    $passwordInfo.fadeToggle(400);
  });

  $passwordRepeat.focusin(function() {
    $passwordRepeatInfo.fadeToggle(400);
  });
  $passwordRepeat.focusout(function() {
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
