
function pow(x,n) {
  var x = +(prompt('Enter number', ''));
  var n = +(prompt('Enter number', ''));
  var result = x;

  if (x != '' || n != '') {
    if (n > 0) {
      for (var i = 1; i < n; i++) {
        result *= x;
        console.log(n);
      }
      return result;
    } else if (n < 0) {
      n = n * (-1);
      for (var i = 1; i < n; i++) {
        result *= x;
        return 1 / result;
      }
    } else {
      return 1;
    }
  } else {
    alert('Please, enter valid number');
  }
}
console.log(pow());


var user = [];

for (i = 0; i < 5; i++) {
    user.push(prompt('Enter your name', ''));
}

var newUser = prompt('Enter your new name', '');
result = newUser[0].toUpperCase () + newUser.substr (1).toLowerCase ();

if (newUser == user[user.indexOf(newUser)] && newUser != "") {
    document.getElementById('answer').innerHTML = 'Добро пожаловать на наш сайт, ' + result + '!';
} else {
    document.getElementById('answer').innerHTML = 'К сожалению твоего имени нету в нашем списке';
}
