document.getElementById("grid").onload = function() {getChar()};

var score1 = 0;
var score2 = 0;

var pnScores1 = document.getElementById('PnScores1');
pnScores1.innerHTML = score1;

var pnScores2 = document.getElementById('PnScores2');
pnScores2.innerHTML = score2;

function getChar() {
  playerVariable = prompt("Please select either 'X' or 'O' for your player token.")
}
