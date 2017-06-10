(function () {
  'use strict';

var App = function () {
  // this.container = document.createElement('div');
  this.container = document.getElementById('gameDashboard');
  this.box = document.createElement('div');
  this.form = document.createElement('form');
  this.mainInput = document.createElement('input');
  this.submit = document.createElement('input');
  this.getValue = function (context) {
    // this.container.setAttribute('id', 'gameDashboard');
    this.box.setAttribute('id', 'inputBox');
    this.form.classList.add ('form');
    this.mainInput.setAttribute('id', 'mainInput');
    this.mainInput.setAttribute('autocomplete', 'off');
    this.mainInput.setAttribute('autofocus', '');
    this.mainInput.setAttribute('type', 'text');
    this.submit.setAttribute('id', 'mainSubmit');
    this.submit.setAttribute('type', 'submit');
    this.submit.setAttribute('value', 'Add new player');
    document.body.appendChild(this.container);
    this.container.appendChild(this.box);
    this.box.appendChild(this.form);
    this.form.appendChild(this.mainInput);
    this.form.appendChild(this.submit);
    this.mainInput.onkeypress = function () {
        context.submit.style.opacity = '1';
    };
    this.form.onsubmit = function () {
      var playerTitle = document.createElement('h3');
      var playerName = this.mainInput.value.toUpperCase();
      var player = document.createElement('div');
      var pointsInput = document.createElement('input');
      var pointsAdd = document.createElement('button');
      pointsAdd.innerHTML = 'Add points';
      pointsInput.classList.add ('pointsInput');
      pointsInput.setAttribute('type', 'number');
      player.classList.add ('player');
      playerTitle.innerHTML = playerName;
      context.box.appendChild(player);
      player.appendChild(playerTitle);
      player.appendChild(pointsInput);
      player.appendChild(pointsAdd);
      context.mainInput.value = '';
      var pointsBlock = document.createElement('span');
      player.appendChild(pointsBlock);
      pointsAdd.onclick = function () {
        var playerCard = document.getElementsByClassName('player');
        var points = pointsInput.value;
        pointsBlock.style.visibility = 'visible';
        pointsBlock.innerHTML = points;
        pointsInput.value = '';
        // return false;
        pointsAdd.onclick = function () {
          var pointsValue = +pointsInput.value + (+points);
          player.appendChild(pointsBlock);
          pointsBlock.innerHTML = pointsValue;
          pointsInput.value = '';
          return false;
        };
      };
      return false;
    };

  };
};



var pocker = new App();
pocker.getValue(pocker);



})();
