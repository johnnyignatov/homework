
var h1 = document.createElement('h1');
h1.className = 'text-info text-center';
h1.innerHTML = 'Welcome to our test!'.toUpperCase();

var h2 = document.createElement('h2');
h2.className = 'text-left text-muted';
h2.innerHTML = '1. Какой тег создает изображение?';

var inputGroup = document.createElement('div');
inputGroup.className = 'input-group';
inputGroup.style.marginBottom = '10px';

var inputGroupAddon = document.createElement('span');
inputGroupAddon.className = 'input-group-addon text-left';

var input = document.createElement('input');
input.setAttribute('type', 'radio');
input.setAttribute('id', 'checkbox');
input.setAttribute('name', 'checkbox');

var inputText = document.createElement('label');
inputText.className = 'form-control';




var inputGroup2 = inputGroup.cloneNode(true);
var inputGroupAddon2 = inputGroupAddon.cloneNode(true);
var input2 = input.cloneNode(true);
var inputText2 = inputText.cloneNode(true);

var inputGroup3 = inputGroup.cloneNode(true);
var inputGroupAddon3 = inputGroupAddon.cloneNode(true);
var input3 = input.cloneNode(true);
var inputText3 = inputText.cloneNode(true);



var obj = {
  data: {
    title:  function () {
          document.body.appendChild(h1);
      },
    questions: [
      {
        title: function () {
              document.body.appendChild(h2);
          },
        answers: [
          function (text) {
            h2.appendChild(inputGroup);
            inputGroup.appendChild(inputGroupAddon);
            inputGroupAddon.appendChild(input);
            inputGroup.appendChild(inputText);
            inputText.innerHTML = text;
          },
          function (text) {
              h2.appendChild(inputGroup2);
              inputGroup2.appendChild(inputGroupAddon2);
              inputGroupAddon2.appendChild(input2);
              inputGroup2.appendChild(inputText2);
              inputText2.innerHTML = text;
            },
            function (text) {
              h2.appendChild(inputGroup3);
              inputGroup3.appendChild(inputGroupAddon3);
              inputGroupAddon3.appendChild(input3);
              inputGroup3.appendChild(inputText3);
              inputText3.innerHTML = text;
            }
          ]
      },
      {
        title: 'Вопрос №2',
        answers: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4']
      },
      {
        title: 'Вопрос №3',
        answers: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4']
      }
    ]
  }
};



//----ВЫВОДИМ ЗАГОЛОВОК----/
obj.data.title();
//-------ВЫВОДИМ ВОПРОС И ВАРИАНТ ОТВЕТА----//
obj.data.questions[0].title();
obj.data.questions[0].answers[0]('Ответ 1');
obj.data.questions[0].answers[1]('Ответ 2');
obj.data.questions[0].answers[2]('Ответ 3');
