$(document).ready(function() {
  var $body = $('body');
  var $home = $('<a>Go back</a>').attr('id', 'home').attr('href', 'index.html');
  var $container = $('<div>').addClass('container');
  var $list = $('<ul>').addClass('list');
  var $textBox = $('<div>').addClass('text-box');
  var $text = $('<span>').addClass('text');
  var $text1 = $('<span>').append(listData[0].text).hide();
  var $text2 = $('<span>').append(listData[1].text).hide();
  var $text3 = $('<span>').append(listData[2].text).hide();

  $body.append($container);
  $container.append($list);
  $container.append($textBox);
  $textBox.append($text);
  $text.append($text1);
  $text.append($text2);
  $text.append($text3);
  $body.append($home);

  for (var i = 0; i < listData.length; i++) {
    var $listItem = $('<li>').addClass('list-item');
    var $listLink = $('<a>').addClass('list-link link-' + i).attr('href', '#');
    $list.append($listItem);
    $listItem.append($listLink);
    $listLink.append(listData[i].title);
  }

  $('.link-0').click(function() {
    $('.link-0').addClass('active');
    $('.link-1').removeClass('active');
    $('.link-2').removeClass('active');
    $text1.slideToggle(200);
    $text2.hide();
    $text3.hide();
  });
  $('.link-1').click(function() {
    $('.link-1').addClass('active');
    $('.link-0').removeClass('active');
    $('.link-3').removeClass('active');
    $text1.hide();
    $text2.slideToggle(200);
    $text3.hide();  });
  $('.link-2').click(function() {
    $('.link-2').addClass('active');
    $('.link-1').removeClass('active');
    $('.link-0').removeClass('active');
    $text1.hide();
    $text2.hide();
    $text3.slideToggle(200);
  });
});

var listData = [
  {
    title: 'История создания',
    text: `HTML был одной из первых вещей, которую Джон Резиг освоил, когда он только начал заниматься программированием. Резиг программировал на QBasic, когда один его знакомый показал ему, как создать веб-страницу (используя Angelfire), а также основы HTML. Отец подарил ему на Рождество две книги по HTML. Именно тогда, когда он только начал программировать на Visual Basic, HTML и веб-дизайн очень заинтересовали его. Но страсть к JavaScript пришла значительно позже, примерно в 2004 году. Тогда Резиг получал степень в области компьютерных наук и работал на полставки в местной фирме Brand Logic. Он занимался дизайном сайта, в котором создавался пользовательский скроллинг. Джон был разочарован и расстроен, особенно потому, что использовал код других разработчиков, после чего решил серьёзно изучить JavaScript. Изучив, пришёл к выводам, что JavaScript — это простой, но изящный язык, который является невероятно мощным для решения многих задач.`
  },
  {
    title: 'Философия',
    text: `Точно так же, как CSS отделяет визуализацию от структуры HTML, JQuery отделяет поведение от структуры HTML. Например, вместо прямого указания на обработчик события нажатия кнопки, управление передаётся JQuery, которая идентифицирует кнопки и затем преобразует его в обработчик события клика. Такое разделение поведения и структуры также называется принципом ненавязчивого JavaScript.

Библиотека jQuery содержит функциональность, полезную для максимально широкого круга задач. Тем не менее, разработчиками библиотеки не ставилась задача совмещения в jQuery функций, которые подошли бы всюду, поскольку это привело бы к большому коду, бо́льшая часть которого не востребована. Поэтому была реализована архитектура компактного универсального ядра библиотеки и плагинов[4]. Это позволяет собрать для ресурса именно ту JavaScript-функциональность, которая на нём была бы востребована.`
  },
  {
    title: 'Возможности',
    text: `Движок кросс-браузерных CSS-селекторов Sizzle[3] выделившийся в отдельный проект <br> Переход по дереву DOM, включая поддержку XPath как плагина <br> События
Визуальные эффекты;
AJAX-дополнения;
JavaScript-плагины.`
  }
];
