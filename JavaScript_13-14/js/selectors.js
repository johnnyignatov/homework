(function () {
'use strict';

var modal = document.querySelector('.modal-window'),
modalText = document.querySelector('.message h1'),
modalLink = document.querySelector('.message a'),
close = document.querySelector('img'),
modalBtn = document.querySelector('.modal-btn');
var createDOM = {
  body: document.body,
  title: document.createElement('div'),
  h1: document.createElement('h1'),
  titleText: document.createTextNode('Тест на знание селекторов HTML'),
  container: document.createElement('div'),
  form: document.createElement('form'),
  button: document.createElement('button'),
  buttonText: document.createTextNode('Проверить результат'),
  setAttr: function () {
    this.title.className = 'jumbotron text-center text-info';
    this.container.className = 'thumbnail';
    this.button.className = 'btn btn-success';
    this.form.className = 'text-center';
  },
  checkAnswers: function () {
    var btn = document.querySelector('button');
    var question1 = document.getElementsByTagName('input')[0];
    var question2 = document.getElementsByTagName('input')[4];
    var question3 = document.getElementsByTagName('input')[7];
    var questionsList = document.getElementsByTagName('input');
    btn.onclick = function (e) {
      e.preventDefault();
      if (question1.checked && question2.checked && question3.checked) {
        modal.classList.add('visible');
        modalText.textContent = 'Congradulations! You passed test!';
        modalBtn.setAttribute('href', 'index.html');
        modalBtn.textContent = 'Go to home page';
        close.addEventListener('click', function () {
            modal.classList.remove('visible');
        });
      } else {
        modalText.textContent = 'Sorry, maybe try one more time?';
        modal.classList.add('visible');
        modalBtn.textContent = 'Try again';
        modalBtn.setAttribute('href', 'selectors.html');
        close.addEventListener('click', function () {
            modal.classList.remove('visible');
        });
      }
    };
  }
};

localStorage.setItem("savedData", JSON.stringify(questionsData));
var questions = JSON.parse(localStorage.getItem("savedData"));

var templ = document.getElementById('template').innerHTML;
var root = document.getElementById('root');
var template = Handlebars.compile(templ);

root.innerHTML = template({questions});
createDOM.setAttr();
createDOM.checkAnswers();

}());
