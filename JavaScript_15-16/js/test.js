'use strict';

var question = document.getElementById('questionInput');
var answears = document.getElementById('inputAnswers');
var correct = document.getElementById('inputCorrect');
var generate = document.getElementById('generate');
var clearTest = document.getElementById('clearStorage');
var data;
var getLocal = [];
var source = document.getElementById('template').textContent;
var template = Handlebars.compile(source);
var generated = document.getElementById('genereted-tests');

class Test {
  constructor(question, answears, correct) {
    this.question = question;
    this.answears = answears.split(',');
    this.correct = correct.split(',').map(Number);
  }
}

localStorage.setItem('questions', '[]');

function pushToStorage(data) {
  getLocal = JSON.parse(localStorage.getItem('questions'));
  getLocal.push(data);
  localStorage.setItem('questions', JSON.stringify(getLocal));
  renderTest(getLocal);
}

function renderTest (localData) {
  generated.innerHTML = template(localData);
}

generate.addEventListener('click', () => {
  data = new Test(question.value, answears.value, correct.value);
  pushToStorage(data);
  question.value = '';
  answears.value = '';
  correct.value = '';
});

clearTest.addEventListener('click', () => {
  localStorage.clear();
  localStorage.setItem('questions', '[]');
  renderTest(localStorage.questions);
});
