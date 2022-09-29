var display = document.getElementById('display');

var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var start = document.getElementById('start');
var pause = document.getElementById('pause');
var cancel = document.getElementById('cancel');

var minutes;
var seconds;

var interval;
var timeOut;

for (var i = 0; i <= 60; i++) {
  minutes.innerHTML += '<option value=  ' + i + '>' + i + ' </option>';
}
for (var i = 0; i <= 60; i++) {
  seconds.innerHTML += '<option value= ' + i + '>' + i + ' </option>';
}

start.addEventListener('click', function () {
  minuteAtual = minutes.value;
  secondAtual = seconds.value;
  display.childNodes[1].innerHTML = minuteAtual + ':' + secondAtual;

  interval = setInterval(function () {
    secondAtual--;

    if (secondAtual <= 0) {
      if (minuteAtual > 0) {
        minuteAtual--;
        secondAtual = 59;
      } else {
        alert('Tempo esgotado');
        document.getElementById('sound').play();
         clearInterval(interval);
      }
    }

    display.childNodes[1].innerHTML = minuteAtual + ':' + secondAtual;
  }, 1000);
});

pause.addEventListener('click', function () {
  clearInterval(interval);
});

cancel.addEventListener('click', function () {
  minuteAtual = 0;
  secondAtual = 0;
  display.childNodes[1].innerHTML = minuteAtual + ':' + secondAtual;
});
