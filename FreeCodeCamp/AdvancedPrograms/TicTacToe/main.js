var score1 = 0;
var score2 = 0;
var playerVariable = "X";
var playerTurn, computerTurn;
var left = [0,1,2,3,4,5,6,7,8];
var used = [];

var pnScores1 = document.getElementById('PnScores1');
pnScores1.innerHTML = score1;

var pnScores2 = document.getElementById('PnScores2');
pnScores2.innerHTML = score2;

function thoseClicked(clickedSquare) {
  n = parseInt(clickedSquare.slice(1),10);
  if (!(used.includes(n))) {
    used.push(n);
    element = document.getElementById(clickedSquare);
    element.innerHTML = playerVariable;
  } else {
    alert("Already in use. Try another!");
  }
    turnCount++;
}

function aI () {
  for (var i in left) {

    element = document.getElementById(clickedSquare);
    element.innerHTML = playerVariable;
  }
}

function keepScore (winner) {
  if (winner === "player1") {
    score1 += 1;
  } else if (winner === "player2"){
    score2 += 1;
  } //if winner is neither of them, neither get the point.
}
