var time = 0;
var b = 1;
var t = 2;

var bfirstShow = document.getElementById('blength');
bfirstShow.innerHTML = b;

var tfirstShow = document.getElementById('tlength');
tfirstShow.innerHTML = t;

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
  bfirstShow.innerHTML = b;

  tfirstShow.innerHTML = t;
}

function checker(ba, ta) {
  if (ta === 0) {
    if (ba === 0) {
      ta = t;
      ba = b;
      return ba;
    }
    return ba;
  } else {
    return ta;
  }
}

function clockStart() {
  var initialOffset = '565.49';
  var i = 1;
  var timing = t;
  var startTime = timing;
  time = 60 * startTime;
  var interval = setInterval(function() {
    $('.circle_animation').css('stroke-dashoffset', initialOffset - (i * (initialOffset / time)));
    $('h2').text(tellTime(i));
    if (i == time) {
      clearInterval(interval);
    }
    i++;
  }, 1000);
}

function tellTime(seconds) {
  totalSeconds = (time - seconds);
  return (Math.floor((totalSeconds / 60)) + ":" + (totalSeconds % 60));
}
