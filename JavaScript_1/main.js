/*function pow(x,n) {
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



var myVarriable = ['Аня','Вася','Коля','Нина','Олег'];
var name = prompt('Введите Ваше имя', '');
if (name == (myVarriable[0])){
    alert('Добро пожаловать, ' + name);
} else if (name == (myVarriable[1])){
    alert('Добро пожаловать, ' + name);
} else if (name == (myVarriable[2])){
    alert('Добро пожаловать, ' + name);
} else if (name == (myVarriable[3])){
    alert('Добро пожаловать, ' + name);
} else if (name == (myVarriable[4])){
    alert('Добро пожаловать, ' + name);
} else {
    alert('Вы ввели несуществующее в системе имя');
}*/


//------------------------------------------------------------//


// var myVarriable = ['Аня','Вася','Коля','Нина','Олег'];
// var name = prompt('Введите Ваше имя', '');

// for (var name = 0;  < myVarriable.length; i++) {
//     alert(name);
//     break
    // alert('Добро пожаловать, ' + name);
    // break
// }

/*var user = ['hanna', 'oleg', 'pavel', 'inna', 'denis'];
var name = prompt('Enter your name', '');
alert(name);

while (name = user) {
    alert('Welcome on board, ' + name);
    user++;
    
}
*/
/*var user = ['hanna', 'oleg', 'pavel', 'inna', 'denis'];
var name = prompt('Enter your name', '');
var cache;

for (var i = 0; i < name.length; i++) {
    cache = name[i];
    alert(cache);
}
    */


/*var user = ['Аня', 'Женя'];
for (var i = 0; i < user.length; i++) {
    user[i] = prompt('Enter your name', '');
}
var newUser = prompt('Enter your name, please!', '')

if (newUser != user[0]) {
    alert('WRONG!');
} else {
    alert('Hello, ' + user[0])
}*/

/*var user = ['Аня', 'Женя'];
for (var i = 0; i < user.length; i++) {
    alert('Welcome, ' + user[i])
    // user[i] = prompt('Enter your name', '');
}*/

/*
var user = [];
for (i = 0; i < 2; i++) {
    user[i] = prompt('Enter your name', '');
}
var newUser = prompt('Enter your new name, please', '');
if (newUser === user) {
    alert('Welcome');
    
} else {
alert('Error!');
    
}
*/


/*var user = [];


for (i = 0; i < 2; i++) {
    var newUser = user.push(prompt('Enter your name', ''));
}

newUser = prompt('Enter your new name, please!', '');

if (newUser == user) {
    return user[i];
    // alert('Hello, ' + newUser);
} else {
    alert('Sorry, we can not find name ' + newUser + ' in our system');
}


console.log(user);
console.log(newUser);
*/

var user = [];

for (i = 0; i < 2; i++) {
    user.push(prompt('Enter your name', ''));
}

var newUser = prompt('Enter your new name', '');
var userIndex = user.indexOf(newUser);  

if (newUser == user[userIndex] && newUser != "") {
    document.getElementById('answer').innerHTML = 'Добро пожаловать на наш сайт, ' + newUser + '!';
    // document.write('Yes!!! We found your name!');
} else {
    document.write('К сожалению твоего имени нету в нашем списке');
}