var score1 = 0;
var score2 = 0;
var playerVariable = "X";
var turnCount = 0;
var used = [];

var pnScores1 = document.getElementById('PnScores1');
pnScores1.innerHTML = score1;

var pnScores2 = document.getElementById('PnScores2');
pnScores2.innerHTML = score2;

var a0,a1,a2,a3,a4,a5,a6,a7,a8 = "";

//a3 = document.getElementById('a3');
//a3.innerHTML = "X";

function thoseClicked(clickedSquare) {
  switch (clickedSquare) {
    case 'a0':
      if (!(used.includes(0))) {
        used.push(0);
        a0 = document.getElementById('a0');
        a0.innerHTML = playerVariable;
      } else {
        alert("Already in use. Try another!");
      }
      break;
    case 'a1':
      a1 = document.getElementById('a1');
      a1.innerHTML = playerVariable;
      break;
  }

}

/*function checker() {
  playerVariable
}*/

function keepScore (winner) {
  if (winner === "player1") {
    score1 += 1;
  } else if (winner === "player2"){
    score2 += 1;
  } //if winner is neither of them, neither get the point.
}
