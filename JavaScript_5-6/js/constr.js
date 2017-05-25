(function() {
  'use strict';

    var Build = function () {
      this.div = document.createElement('div');
      this.box = document.createElement('div');
      this.lineBox = document.createElement('div');
      this.line = document.createElement('div');
      this.hoursBlock = document.createElement('div');
      this.minutesBlock = document.createElement('div');
      this.secondsBlock = document.createElement('div');
      this.millisecondsBlock = document.createElement('div');
      this.hoursText = document.createElement('h2');
      this.minutesText = document.createElement('h2');
      this.secondsText = document.createElement('h2');
      this.millisecondsText = document.createElement('h2');
      this.startButton = document.createElement('button');
      this.stopButton = document.createElement('input');
      this.hoursLabel = document.createElement('h6');
      this.minutesLabel = document.createElement('h6');
      this.secondsLabel = document.createElement('h6');
      this.millisecondsLabel = document.createElement('h6');
      this.form = document.createElement('form');
      this.setClass = function () {
        this.div.className = 'container text-center';
        this.box.className = 'screen card card-info';
        this.hoursBlock.className = 'hours card card-info';
        this.minutesBlock.className = 'minutes card card-info';
        this.secondsBlock.className = 'seconds card card-info';
        this.millisecondsBlock.className = 'milliseconds card card-info';
        this.startButton.className = 'btn btn-secondary';
        this.stopButton.className = 'btn btn-danger';
        this.line.className = 'timer-line card-info';
        this.lineBox.className = 'timer-box card card-default';
        this.stopButton.setAttribute('type', 'submit');
        this.stopButton.setAttribute('value', 'Stop');
        this.startButton.setAttribute('type', 'button');
        this.startButton.setAttribute('type', 'button');
        this.form.setAttribute('action', 'constr.html');
      };
      this.generate = function () {
        this.hoursText.innerHTML = '00';
        this.minutesText.innerHTML = '00';
        this.secondsText.innerHTML = '00';
        this.millisecondsText.innerHTML = '000';
        this.hoursLabel.innerHTML = 'Hours';
        this.minutesLabel.innerHTML = 'Minutes';
        this.secondsLabel.innerHTML = 'Seconds';
        this.millisecondsLabel.innerHTML = 'Milliseconds';
        this.startButton.innerHTML = 'Start';
        this.stopButton.innerHTML = 'Stop';
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
      this.startTimer = function (context) {
        this.startButton.onclick = function timer() {
          // context.stopButton.setAttribute('href', '#');
          context.startButton.onclick = function () {
            clearInterval(initHours);
            clearInterval(initMin);
            clearInterval(initSec);
            clearInterval(initMs);
            context.startButton.innerHTML = 'Continue';
          };
          context.stopButton.onclick = function () {
            clearInterval(initHours);
            clearInterval(initMin);
            clearInterval(initSec);
            clearInterval(initMs);
            context.hoursText.innerHTML = '00';
            context.minutesText.innerHTML = '00';
            context.secondsText.innerHTML = '00';
            context.millisecondsText.innerHTML = '000';
            context.startButton.innerHTML = 'Start';
            context.line.style.width = 0;
          };
          context.startButton.innerHTML = 'Pause';
          var defaultDate = new Date();
          var initHours = setInterval(function() {
            var newDate = new Date() - defaultDate;
            var hours = Math.abs(Math.floor(newDate / 1000 / 60 / 60) % 24);
            if (hours.toString().length == 1) {
              hours = '0' + hours;
            }
            context.hoursText.innerHTML = hours;
          }, 1);
          var initMin = setInterval(function() {
            var newDate = new Date() - defaultDate;
            var min = Math.abs(Math.floor(newDate / 1000 / 60) % 60);
            if (min.toString().length == 1) {
              min = '0' + min;
            }
            context.minutesText.innerHTML = min;
          }, 1);
          var initSec = setInterval(function() {
            var newDate = new Date() - defaultDate;
            var sec = Math.abs(Math.floor(newDate / 1000) % 60);
            if (sec.toString().length == 1) {
              sec = sec;
            }
            context.secondsText.innerHTML = sec;
            context.line.style.width = sec + (sec + sec + sec) + 'px';
            // context.shadow.style.width = sec + (sec/2) + 11.5 + '%';
          }, 1000);
          var initMs = setInterval(function() {
            var newDate = new Date() - defaultDate;
            var ms = Math.abs(Math.floor(newDate % 1000));
            if (ms.toString().length == 1) {
              ms = '0' + ms;
            }
            context.millisecondsText.innerHTML = ms;
          }, 1);
        };
      };
    };

    var timer1 = new Build();

    timer1.setClass();
    timer1.generate();
    timer1.startTimer(timer1);

})();
