let timer;
let time = 0;

function startStop() {
  var startStopBtn = document.getElementById('startStop');
  
  if (startStopBtn.innerHTML === 'Start') {
    timer = setInterval(runTimer, 1000);
    startStopBtn.innerHTML = 'Stop';
    startStopBtn.style.backgroundColor = "black";
    startStopBtn.style.color = "white";
  } else {
    clearInterval(timer);
    startStopBtn.innerHTML = 'Start';
    startStopBtn.style.backgroundColor = "#222";
  }
}

function runTimer() {
  time++;
  const display = document.getElementById('display');
  display.innerHTML = formatTime(time);
}

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

function reset() {
  clearInterval(timer);
  time = 0;
  document.getElementById('display').innerHTML = '00:00:00';
  document.getElementById('startStop').innerHTML = 'Start';

  var startStopBtn = document.getElementById('startStop');
  startStopBtn.style.backgroundColor = "white";
  startStopBtn.style.color = "black";

}

;


