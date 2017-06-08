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
      var _this = this;
      var pausedTime = 0;
      var sec;
      var newDate;
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
        this.form.setAttribute('action', 'index.html');
      };
      this.generate = function () {
        this.setClass();
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
      this.startTimer = function () {
        _this.generate();
        this.startButton.onclick = function () {
          _this.startButton.innerHTML = 'Pause';
          var defaultDate = new Date();
          var initTime = setInterval(function() {
            newDate = new Date() - defaultDate + pausedTime;
            var hours = Math.abs(Math.floor(newDate / 1000 / 60 / 60) % 24);
            var min = Math.abs(Math.floor(newDate / 1000 / 60) % 60);
            sec = Math.abs(Math.floor(newDate / 1000) % 60);
            var ms = Math.abs(Math.floor(newDate % 1000));
            if (hours.toString().length == 1 || min.toString().length == 1) {
              hours = '0' + hours;
              min = '0' + min;
            }
            _this.hoursText.innerHTML = hours;
            _this.minutesText.innerHTML = min;
            _this.secondsText.innerHTML = sec;
            _this.millisecondsText.innerHTML = ms;
            _this.line.style.width = sec + (sec + sec + sec) + 'px';
          }, 1);
          _this.startButton.onclick = function () {
            pausedTime = sec;
            clearInterval(initTime);
            _this.startButton.innerHTML = 'Continue';
            var startTime = new Date();
            var s = startTime.getSeconds();
            _this.startButton.onclick = function () {
              setInterval(function() {
                var defaultDate = new Date();
                var seconds = defaultDate.getSeconds();

              }, 1000);
            };
          };
        };
        _this.stopButton.onclick = function () {
          clearInterval(initTime);
          _this.hoursText.innerHTML = '00';
          _this.minutesText.innerHTML = '00';
          _this.secondsText.innerHTML = '00';
          _this.millisecondsText.innerHTML = '000';
          _this.startButton.innerHTML = 'Start';
          _this.line.style.width = 0;
        };
      };
    };

    var timer1 = new Build();
    timer1.startTimer();

})();
