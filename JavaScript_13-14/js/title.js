(function () {

var body = document.body;
var div = document.createElement('div');

body.style.marginTop = '30px';
div.className = 'card card-block text-center text-info';
div.style.fontSize = '48px';
div.innerHTML = 'Проверь свои знания!';

function createButtons(testName) {
  for (var i = 0, max = testName.length; i < max; i++) {
    var button = document.createElement('a');
    button.style.fontSize = '24px';
    button.style.color = '#fff';
    button.style.display = 'block';
    button.style.margin = '2px 0';
    button.setAttribute('id', 'div#' + i);
    button.setAttribute('href', testLink[i]);
    button.setAttribute('action', 'index.html');
    button.setAttribute('method', 'push');
    button.innerHTML = test[i];
    button.className = 'btn btn-info ';
    body.appendChild(button);
    body.insertBefore(div, body.firstChild);
  }
}

var test = ['Тест на знание тегов HTML', 'Тест на знание селекторов HTML', 'Тест на знание CSS'];
var testLink = ['tags.html', 'selectors.html', 'css-test.html'];


createButtons(test);

}());
