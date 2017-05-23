(function () {
'use strict';

var createDOM = {
  body: document.body,
  title: document.createElement('div'),
  h1: document.createElement('h1'),
  titleText: document.createTextNode('Тест на знание CSS'),
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
        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'checkbox');
        label.className = 'form-control';
        var inputGroupAddon = document.createElement('span');
        var questionDiv =  document.createElement('div');
        questionDiv.className = 'input-group';
        this.form.appendChild(questionDiv);
        inputGroupAddon.className = 'input-group-addon';
        inputGroupAddon.appendChild(checkbox);
        questionDiv.appendChild(inputGroupAddon);
        questionDiv.appendChild(label);
        label.appendChild(labelText);
        this.form.appendChild(this.button);
        this.button.appendChild(this.buttonText);
      }
    }
  },
  checkAnswers: function () {
    var btn = document.getElementsByTagName('button');
    var question1 = document.getElementsByTagName('input')[0];
    var question2 = document.getElementsByTagName('input')[3];
    var question3 = document.getElementsByTagName('input')[7];
    var questionsList = document.getElementsByTagName('input');
    console.log(questionsList);
    btn[0].onclick = function () {
      if (question1.checked && question2.checked && question3.checked) {
        alert('Отлично! Ты с CSS на короткой ноге.');
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
    question: 'В какой строке содержится корректный синтаксис ?',
    answears: ['body{color: red}', 'body: {color:red}', '{body:color = red}']
  },
  {
    question: 'Требуется задать цвет заголовка зеленым. Какое стилевое свойство подойдет для этой цели ?',
    answears: ['color', 'font-color', 'background']
  },
  {
    question: 'С помощью какого свойства можно установить шрифт ?',
    answears: ['font-face', 'font-family', 'font-style']
  }
];

createDOM.setAttr();
createDOM.insertElem();
createDOM.generateQuestions(questionsData);
createDOM.checkAnswers();

}());
