var breakType = 5;
var session = 25;
var interval = null;
var on;
var ding = new Audio ('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');

var breakfirstShow = document.getElementById('blength');
breakfirstShow.innerHTML = breakType;

var sessionfirstShow = document.getElementById('tlength');
sessionfirstShow.innerHTML = session;

function buttonPressed(input) {
  switch (input) {
    case 'bminus':
      if (breakType > 1) {
        --breakType;
        break;
      }
    case 'bplus':
      ++breakType;
      break;
    case 'tplus':
      ++session;
      break;
    case 'tminus':
      if (session > 1) {
        --session;
        break;
      }
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
        ding.play();
        $('#activity').attr('src', 'https://cdn4.iconfinder.com/data/icons/office-line/512/coffee-256.png');
        state = "breakType";
        time = 60 * breakType;
      } else {
        ding.play();
        $('#activity').attr('src', 'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/29.Mac-512.png');
        state = "session";
        time = 60 * session;
      }
    }
  }, 100);
}

function tellTime(seconds, time) {
  totalSeconds = (time - seconds);
  return (Math.floor((totalSeconds / 60)) + ":" + ('0' + (Math.floor(totalSeconds % 60))).slice(-2));
}
