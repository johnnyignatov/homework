(function () {
'use strict';

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
  insertElem: function () {
    this.body.appendChild(this.title);
    this.title.appendChild(this.h1);
    this.h1.appendChild(this.titleText);
    this.body.appendChild(this.container);
    this.container.appendChild(this.form);
  },
  generateQuestions: function (questions) {
    for (var i = 0, length = questions.length; i < length; i++) {
      var questionTitle = document.createElement('h2');
      var questionTitleText = document.createTextNode(questions[i].question);
      this.form.appendChild(questionTitle);
      questionTitle.appendChild(questionTitleText);
      for (var n = 0; n < questions[i].answears.length; n++) {
        var label = document.createElement('label');
        var labelText = document.createTextNode(questions[i].answears[n]);
        var radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', questions[i].name);
        label.className = 'form-control';
        var inputGroupAddon = document.createElement('span');
        var questionDiv =  document.createElement('div');
        questionDiv.className = 'input-group';
        this.form.appendChild(questionDiv);
        inputGroupAddon.className = 'input-group-addon';
        inputGroupAddon.appendChild(radio);
        questionDiv.appendChild(inputGroupAddon);
        questionDiv.appendChild(label);
        label.appendChild(labelText);
        this.form.appendChild(this.button);
        this.button.appendChild(this.buttonText);
      }
    }
  },
  checkAnswers: function () {
    var btn = document.querySelector('button');
    var question1 = document.getElementsByTagName('input')[0];
    var question2 = document.getElementsByTagName('input')[4];
    var question3 = document.getElementsByTagName('input')[7];
    var questionsList = document.getElementsByTagName('input');
    console.log(questionsList);
    btn.onclick = function () {
      if (question1.checked && question2.checked && question3.checked) {
        alert('Отлично! Ты знаешь селекторы, как свои пять пальцев.');
        this.form.setAttribute('action', 'index.html');
      } else {
        alert('Неправильно! Попробуй еще раз.');
        return false;
      }
    };
  }
};

var questionsData = [
  {
    question: 'К какому элементу будет применяться селектор a.id ?',
    answears: ['< a class="id" href="#" > ссылка < /a >', '< a id="id" href="#" > ссылка < /a >', '< a class[id] href="id" > ссылка < /a >'],
    name: 'question1'
  },
  {
    question: 'Как добавить фоновый цвет ко всем элементам < h1 > ?',
    answears: ['h1:all {background-color: white}', 'h1 {background-color: white}', 'h1:[all] {background-color: white}'],
    name: 'question2'
  },
  {
    question: 'Как указать идентификатор для тега < p > ?',
    answears: ['< p id="#vivo" >', '< p id="vivo">', '< p id:"vivo" >'],
    name: 'question3'
  }
];

createDOM.setAttr();
createDOM.insertElem();
createDOM.generateQuestions(questionsData);
createDOM.checkAnswers();

}());
