var score1 = 0;
var score2 = 0;
var playerVariable = "X";
var computerVariable = "O";
var turnCount = 0;
var whosTurn = false;
var used = [];
var pused = [];
var cused = [];

var pnScores1 = document.getElementById('PnScores1');
pnScores1.innerHTML = score1;

var pnScores2 = document.getElementById('PnScores2');
pnScores2.innerHTML = score2;

function winCheck(player, array) {
  if (
    (array.includes(0) && array.includes(1) && array.includes(2)) ||
    (array.includes(0) && array.includes(3) && array.includes(6)) ||
    (array.includes(0) && array.includes(4) && array.includes(8)) ||
    (array.includes(1) && array.includes(4) && array.includes(7)) ||
    (array.includes(2) && array.includes(4) && array.includes(6)) ||
    (array.includes(2) && array.includes(5) && array.includes(8)) ||
    (array.includes(3) && array.includes(4) && array.includes(5)) ||
    (array.includes(6) && array.includes(7) && array.includes(8))
  ) {
    won(player);
    return true;
  } else {
    return false;
  }
}

function thoseClicked(clickedSquare) {
  if (turnCount < 9) {
    whosTurn = false;
    n = parseInt(clickedSquare.slice(1), 10);
    if (!(used.includes(n))) {
      used.push(n);
      pused.push(n);
      element = document.getElementById(clickedSquare);
      element.innerHTML = playerVariable;
      winCheck('Player', pused);
      console.log(turnCount);
    } else {
      alert("Already in use. Try another!");
    }
    turnCount++;
    aIminmax();
  } else {
    alert("This is a tie, no one wins.");
    reset();
  }
}

function won(player) {
  if (whosTurn === false) {
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

function aIminmax() {
  var k;
  console.log(turnCount);
  if (turnCount === 1) {
    if (used.includes(0) || used.includes(2) || used.includes(6) || used.includes(8) || used.includes(1) || used.includes(3) || used.includes(5) || used.includes(7)) {
      k = 4;
      used.push(4);
      cused.push(4);
      $("#a" + 4).text(computerVariable);
    } else {
      k = 0;
      used.push(k);
      cused.push(k);
      $("#a" + k).text(computerVariable);
    }
    turnCount++;
  } else if (turnCount === 3) {
    if (pused) {

    }
  }
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


function aiturn(board, depth, player, turn) {
  if (checkWin(board, !player))
    return -10 + depth;
  if (checkFull(board))
    return 0;
  var value = player == HUMAN ? HUMVAL : COMVAL;
  var max = -Infinity;
  var index = 0;
  for (var x = 0; x < 9; x++) {
    if (depth == 0)
      tiles[x].innerHTML = "";
    if (board[x] == 0) {
      var newboard = board.slice();
      newboard[x] = value;
      var moveval = -aiturn(newboard, depth + 1, !player, false);
      if (depth == 0)
        tiles[x].innerHTML = moveval;
      if (moveval > max) {
        max = moveval;
        index = x;
      }
    }
  }
  if (turn)
    set(index, player)
  return max;
}
