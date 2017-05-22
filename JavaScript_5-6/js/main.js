var body = document.body;

var createTimer = {
  container: document.createElement('div'),
  timerScreen: document.createElement('div'),
  buttonStart: document.createElement('button'),
  buttonStop: document.createElement('button'),
  secondsBox: document.createElement('div'),
  secondsText: document.createElement('h2'),
  millisecondsBox: document.createElement('div'),
  millisecondsText: document.createElement('h2'),
  setClass: function functionName() {
    this.container.className = 'container card card-info';
    this.timerScreen.className = 'card card-default screen';
    this.buttonStart.className = 'btn btn-success';
    this.buttonStop.className = 'btn btn-danger';
    this.buttonStart.innerHTML = 'Start';
    this.buttonStop.innerHTML = 'Stop';
    this.secondsBox.className = 'seconds card card-info text-center';
    this.millisecondsBox.className = 'milliseconds card card-info text-center';
  },
  insertElem: function() {
    body.appendChild(this.container);
    this.container.appendChild(this.timerScreen);
    this.container.appendChild(this.buttonStart);
    this.container.appendChild(this.buttonStop);
    this.timerScreen.appendChild(this.millisecondsBox);
    this.millisecondsBox.appendChild(this.millisecondsText);
    this.timerScreen.appendChild(this.secondsBox);
    this.secondsBox.appendChild(this.secondsText);
  },
  chacgeButtonStatus: function count () {
    createTimer.buttonStart.onclick = function () {
      var startSeconds = new Date().getSeconds();
      var startMilliseconds = new Date().getMilliseconds();

      setInterval(function () {
        var newTime = new Date().getSeconds();
        var newSeconds = newTime - startSeconds;
        console.log(newTime);
        console.log(startSeconds);
        console.log(newSeconds);

        createTimer.secondsText.innerHTML = newSeconds;
      }, 1000);

      setInterval(function () {
        var newTimeMilliseconds = new Date().getMilliseconds();
        var newMilliseconds = newTimeMilliseconds;
        createTimer.millisecondsText.innerHTML = newMilliseconds;

      }, 10);
      createTimer.buttonStart.innerHTML = 'Pause';
      createTimer.buttonStart.classList.add ('paused');
      var paused = document.getElementsByClassName('paused');
      paused[0].addEventListener('click', function () {
        createTimer.buttonStart.innerHTML = 'Continue';
        createTimer.buttonStart.classList.remove('paused');
        createTimer.buttonStart.classList.add('waiting');
        var waiting = document.getElementsByClassName('waiting');
        waiting[0].addEventListener('click', function() {
          createTimer.buttonStart.innerHTML = 'Pause';
        });
      });
    };
  },
  stopTimer: function (context) {
    context.buttonStop.addEventListener('click', function() {
      context.buttonStart.innerHTML = 'Start';
    });
  }
};


createTimer.setClass();
createTimer.insertElem();
createTimer.chacgeButtonStatus(createTimer);
createTimer.stopTimer(createTimer);
