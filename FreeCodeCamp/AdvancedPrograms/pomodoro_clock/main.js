var time = 0;

var bfirstShow = document.getElementById('blength');
bfirstShow.innerHTML = 5;

var tfirstShow = document.getElementById('tlength');
tfirstShow.innerHTML = 25;

var b = 5;
var t = 25;

function buttonPressed(input) {
  switch (input) {
    case 'bminus':
      --b;
      break;
    case 'bplus':
      ++b;
      break;
    case 'tplus':
      ++t;
      break;
    case 'tminus':
      --t;
      break;
    default:
  }
  bshow = b;
  bfirstShow.innerHTML = bshow;

  tshow = t;
  tfirstShow.innerHTML = tshow;
}

function clockStart(){
  if (t > 0) {
  var initialOffset = '565.49';
  var i = 1;

  var ttime = t;
  time = 60 * ttime;

  var interval = setInterval(function() {
    $('.circle_animation').css('stroke-dashoffset', initialOffset - (i * (initialOffset / time)));

    $('h2').text(tellTime(i));

    if (i == time) {
      clearInterval(interval);
    }
    i++;
  }, 1000);
  }
}

function tellTime(seconds) {
  totalSeconds = (time - seconds);
  return (Math.floor((totalSeconds / 60)) + ":" + (totalSeconds % 60));
}
