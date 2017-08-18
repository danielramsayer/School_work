var score1 = 0;
var score2 = 0;
var playerVariable = "X";
var whosTurn;
var turnCount = 0;
var winning = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
];
var used = [];
var pused = [];
var cused = [];

var pnScores1 = document.getElementById('PnScores1');
pnScores1.innerHTML = score1;

var pnScores2 = document.getElementById('PnScores2');
pnScores2.innerHTML = score2;

function thoseClicked(clickedSquare) {
  if (turnCount < 9) {
    n = parseInt(clickedSquare.slice(1), 10);
    if (!(used.includes(n))) {
      used.push(n);
      pused.push(n);
      element = document.getElementById(clickedSquare);
      element.innerHTML = playerVariable;
      winCheck(pused);
    } else {
      alert("Already in use. Try another!");
    }
    turnCount++;
    whosTurn = "Computer";
  } else {
    alert("This is a tie, no one wins.");
    reset();
  }
}

function aI() {
  for (var move in aiTrack) {
    if (!(used.includes(move))) {
      used.push(move);
      element = document.getElementById('a' + move);
      element.innerHTML = computerVariable;
    }
  }
}


function winCheck(array1) {
  array1 = array1.sort();
  if (array1[0] === 0) {
    if (array[1] === 1 && array[2] === 2) {
      //|| (array[1] === 3 && array[2] === 6) || (array[1] === 4 && array[2] === 8)) {
      alert("Winning move!");
      if (pused[0] === 0) {
        keepScore(player1);
      } else {
        keepScore(player2);
      }
    }
  }
}


function keepScore(winner) {
  if (winner === "player1") {
    score1 += 1;
  } else if (winner === "player2") {
    score2 += 1;
  } //if winner is neither of them, neither get the point.
}

function reset() {
  for (var i = 0; i < 9; i++) {
    document.getElementById('a' + i).innerHTML = "";
    turnCount = 0;
    used = [];
    pused = [];
    cused = [];
  }
}
