(function () {
  'use strict';

  var hours, min, sec, ms, startCount, startTime, newDate;
  var pausedTime = 0;
  var state = !state;
  var Build = function () {
    this.createEl = function (name, tag, classList, text, type, value, action) {
      this.name = document.createElement(tag);
      this.name.className = classList;
      this.name.innerHTML = text;
      this.name.setAttribute('type', type);
      this.name.setAttribute('value', value);
      this.name.setAttribute('action', action);
      return this.name;
    };
    this.div = this.createEl('div', 'div', 'container text-center', '');
    this.box = this.createEl('box', 'div', 'screen card card-info', '');
    this.lineBox = this.createEl('lineBox', 'div', 'timer-box card card-default', '');
    this.line = this.createEl('line', 'div', 'timer-line card-info', '');
    this.hoursBlock = this.createEl('hoursBlock', 'div', 'hours card card-info', '');
    this.minutesBlock = this.createEl('minutesBlock', 'div', 'minutes card card-info', '');
    this.secondsBlock = this.createEl('secondsBlock', 'div', 'seconds card card-info', '');
    this.millisecondsBlock = this.createEl('millisecondsBlock', 'div', 'milliseconds card card-info', '');
    this.hoursText = this.createEl('hoursText', 'h2', '', '00');
    this.minutesText = this.createEl('minutesText', 'h2', '', '00');
    this.secondsText = this.createEl('secondsText', 'h2', '', '00');
    this.millisecondsText = this.createEl('millisecondsText', 'h2', '', '000');
    this.startButton = this.createEl('startButton', 'button', 'btn btn-secondary', 'Start', 'button');
    this.stopButton = this.createEl('stopButton', 'button', 'btn btn-danger', 'Stop', '', 'button');
    this.hoursLabel = this.createEl('hoursLabel', 'h6', '', 'Hours');
    this.minutesLabel = this.createEl('minutesLabel', 'h6', '', 'Minutes');
    this.secondsLabel = this.createEl('secondsLabel', 'h6', '', 'Seconds');
    this.millisecondsLabel = this.createEl('millisecondsLabel', 'h6', '', 'Milliseconds');
    this.form = this.createEl('form', 'form', '', '', '', '', 'index.html');
    this.generate = function () {
      document.body.appendChild(this.div);
      this.div.appendChild(this.box);
      this.div.appendChild(this.form);
      this.form.appendChild(this.startButton);
      this.form.appendChild(this.stopButton);
      this.box.appendChild(this.hoursBlock);
      this.box.appendChild(this.minutesBlock);
      this.box.appendChild(this.secondsBlock);
      this.box.appendChild(this.millisecondsBlock);
      this.hoursBlock.appendChild(this.hoursText);
      this.hoursBlock.appendChild(this.hoursLabel);
      this.minutesBlock.appendChild(this.minutesText);
      this.minutesBlock.appendChild(this.minutesLabel);
      this.secondsBlock.appendChild(this.secondsText);
      this.secondsBlock.appendChild(this.secondsLabel);
      this.millisecondsBlock.appendChild(this.millisecondsText);
      this.millisecondsBlock.appendChild(this.millisecondsLabel);
      this.div.appendChild(this.lineBox);
      this.lineBox.appendChild(this.line);
    };
    this.timer = function () {
      newDate = Date.now() - startTime + pausedTime;
      hours = Math.abs(Math.floor(newDate / 1000 / 60 / 60) % 24);
      min = min = Math.abs(Math.floor(newDate / 1000 / 60) % 60);
      sec = Math.abs(Math.floor(newDate / 1000) % 60);
      ms = Math.abs(Math.floor(newDate % 1000));
      this.hoursText.innerHTML = hours || '00';
      this.minutesText.innerHTML = min || '00';
      this.millisecondsText.innerHTML = ms || '000';
      this.line.style.width = sec + (sec + sec + sec) + 'px';
      this.startButton.addEventListener('click', this.start);
      this.stopButton.addEventListener('click', this.stop);
      this.secondsText.innerHTML = sec || '00';
      if (this.secondsText.innerHTML.length === 1) {
        sec = '0' + sec;
      }
      this.secondsText.innerHTML = sec || '00';
    }.bind(this);
    this.start = function () {
      this.timer();
      if(state) {
        state = !state;
        startTime = Date.now();
        startCount = setInterval(this.timer, 1);
        this.startButton.innerHTML = 'Pause';
      } else {
        state = !state;
        clearTimeout(startCount);
        startTime = 0;
        this.startButton.innerHTML = 'Continue';
        pausedTime = newDate;
      }
    }.bind(this);
    this.stop = function () {
      clearTimeout(startCount);
      newDate = 0;
      pausedTime = 0;
      this.startButton.innerHTML = 'Start';
      startTime = 0;
      pausedTime = newDate;
    }.bind(this);
  };

  var app = new Build();
  app.generate();
  app.timer();
})();
