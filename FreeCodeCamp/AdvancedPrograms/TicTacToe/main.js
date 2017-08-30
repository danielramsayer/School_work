var score1 = 0;
var score2 = 0;
var playerVariable = "X";
var computerVariable = "O";
var turnCount = 0;
var whosTurn;
var used = [];
var pused = [];
var cused = [];

var pnScores1 = document.getElementById('PnScores1');
pnScores1.innerHTML = score1;

var pnScores2 = document.getElementById('PnScores2');
pnScores2.innerHTML = score2;

function thoseClicked(clickedSquare) {
  if (turnCount < 9) {
    whosTurn = "Player";
    n = parseInt(clickedSquare.slice(1), 10);
    if (!(used.includes(n))) {
      used.push(n);
      pused.push(n);
      element = document.getElementById(clickedSquare);
      element.innerHTML = playerVariable;
      winCheck(pused);
      console.log(turnCount);
    } else {
      alert("Already in use. Try another!");
    }
    turnCount++;
    //aI();
  } else {
    alert("This is a tie, no one wins.");
    reset();
  }
}

function aI() {
  whosTurn = "Computer";

}


function winCheck(array1) {
  if (
    (array1.includes(0) && array1.includes(1) && array1.includes(2)) || (array1.includes(0) && array1.includes(3) && array1.includes(6)) ||
    (array1.includes(0) && array1.includes(4) && array1.includes(8)) ||
    (array1.includes(1) && array1.includes(4) && array1.includes(7)) ||
    (array1.includes(2) && array1.includes(4) && array1.includes(6)) || (array1.includes(2) && array1.includes(5) && array1.includes(8)) ||
    (array1.includes(3) && array1.includes(4) && array1.includes(5)) ||
    (array1.includes(6) && array1.includes(7) && array1.includes(8))
  ) {
    alert("Winning Move!");
    won();
  }
}

function won() {
  if (whosTurn === "Player") {
    keepScore('player1');
  } else {
    keepScore('player2');
  }
  reset();
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
    used = [];
    pused = [];
    cused = [];
    turnCount = 0;
  }

  var pnScores1 = document.getElementById('PnScores1');
  pnScores1.innerHTML = score1;

  var pnScores2 = document.getElementById('PnScores2');
  pnScores2.innerHTML = score2;
}
