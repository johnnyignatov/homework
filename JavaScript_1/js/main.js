function pow(x,n) {
    var x = prompt('Выберите число', '');
    var n = prompt('Выберите еще одно число', '');
    var result = Math.pow(x, n);

    if (n > 0) {
        return result;
    } else {
        alert('Enter valid number!');
    }
}

console.log(pow());


var user = [];

for (i = 0; i < 5; i++) {
    user.push(prompt('Enter your name', ''));
}

var newUser = prompt('Enter your new name', '');
var userIndex = user.indexOf(newUser);

if (newUser == user[userIndex] && newUser != "") {
    document.getElementById('answer').innerHTML = 'Добро пожаловать на наш сайт, ' + newUser + '!';
} else {
    document.write('К сожалению твоего имени нету в нашем списке');
}
