var breakType = 1;
var session = 2;
var interval = null;

var breakfirstShow = document.getElementById('blength');
breakfirstShow.innerHTML = breakType;

var sessionfirstShow = document.getElementById('tlength');
sessionfirstShow.innerHTML = session;

function buttonPressed(input) {
  switch (input) {
    case 'bminus':
      --breakType;
      break;
    case 'bplus':
      ++breakType;
      break;
    case 'tplus':
      ++session;
      break;
    case 'tminus':
      --session;
      break;
    default:
  }
  breakfirstShow.innerHTML = breakType;

  sessionfirstShow.innerHTML = session;
}

function clockStart() {
  var initialOffset = '565.49';
  var startTime = Date.now();
  var i = 1;
  var state = "session";
  var time = 60 * session;
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(function() {
    i = (Date.now() - startTime) / 1000;
    $('.circle_animation').css('stroke-dashoffset', initialOffset - (i * (initialOffset / time)));
    $('h2').text(tellTime(i, time));
    if (i >= time) {
      startTime = Date.now();
      if (state === "session") {
        state = "breakType";
        time = 60 * breakType;
      } else {
        state = "session";
        time = 60 * session;
      }
    }
  }, 100);
}

function tellTime(seconds, time) {
  totalSeconds = (time - seconds);
  return (Math.floor((totalSeconds / 60)) + ":" + ('0'+(Math.floor(totalSeconds % 60))).slice(-2));
}
