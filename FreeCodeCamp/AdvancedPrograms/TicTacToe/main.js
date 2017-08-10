var score1 = 0;
var score2 = 0;
var playerVariable = "";
var winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var turnCount = 0;
var used = [];

var pnScores1 = document.getElementById('PnScores1');
pnScores1.innerHTML = score1;

var pnScores2 = document.getElementById('PnScores2');
pnScores2.innerHTML = score2;

function thoseClicked (clickedSquare) {
  switch (clickedSquare) {
    case 'a0':
      if (used.includes[0]) {
        break;
      } else {
        used.append('0');
        var pnScores2 = document.getElementById('PnScores2');
        pnScores2.innerHTML = score2;
      }
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
