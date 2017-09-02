var score1 = 0;
var score2 = 0;
var playerVariable = 'X';
var computerVariable = 'O';

var pnScores1 = document.getElementById('PnScores1');
pnScores1.innerHTML = score1;
var pnScores2 = document.getElementById('PnScores2');
pnScores2.innerHTML = score2;

$(document).ready(function() {
  var xORo = confirm("Press 'OK' for X! Press 'Cancel' for O!");

  if (xORo === false) {
    computerVariable = 'X';
    playerVariable = 'O';
  }

  var board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ];

  $('.marker-select').click(function () {
    while (!board.includes("O") || !board.includes("X")) {

    }
  });

  $('.square').click(function() {
    var stateOfGame = winCheck(board);
    if (stateOfGame || stateOfGame === null) {
      return;
    }
    $this = $(this);
    var i = $this.data('i');
    var j = $this.data('j');
    if (board[i][j] !== " ") {
      alert("This is already occupied, please try again.");
      return;
    }
    $this.html(playerVariable);
    board[i][j] = playerVariable;
    stateOfGame = winCheck(board);
    if (stateOfGame) {
      score1 += 1;
      alert("Player wins! Good Job!");
      reset();
      return;
    } else if (stateOfGame === null) {
      alert("Tie! Good luck next time.");
      reset();
      return;
    } else {
      var move = aiTurn();
      board[move.i][move.j] = computerVariable;
      $('.square[data-i=' + move.i + '][data-j=' + move.j + ']').html(computerVariable);
    }
    stateOfGame = winCheck(board);
    if (stateOfGame) {
      if (stateOfGame === computerVariable) {
        score2 += 1;
        alert("Computer wins!");
        reset();
      }
    }
  });

  function minmaxAlg(newboard, depth, player) {
    var stateOfGame = winCheck(newboard);
    if (stateOfGame === false) {
      var scores = [];
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          var boardCopy = _.cloneDeep(newboard);
          if (boardCopy[i][j] !== " ") continue;
          boardCopy[i][j] = player;
          var value = minmaxAlg(boardCopy, depth + 1, ((player === playerVariable) ? computerVariable : playerVariable));
          scores.push({
            price: value,
            cell: {
              i: i,
              j: j
            }
          });
        }
      }
      if (player === computerVariable) {
        var max = _.maxBy(scores, function(option) {
          return option.price;
        });
        if (depth === 0) {
          return max.cell;
        } else {
          return max.price;
        }
      } else {
        var min = _.minBy(scores, function(option) {
          return option.price;
        });
        if (depth === 0) {
          return min.cell;
        } else {
          return min.price;
        }
      }
    } else if (stateOfGame === null) {
      return 0;
    } else if (stateOfGame === playerVariable) {
      return depth - 10;
    } else if (stateOfGame === computerVariable) {
      return 10 - depth;
    }
  }

  function aiTurn() {
    return minmaxAlg(board, 0, computerVariable);
  }

  function winCheck(board) {
    // Horizontal win checking
    for (var i = 0; i < 3; i++) {
      if (board[i][0] !== " " &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]) {
        return board[i][0];
      }
    }
    // Vertical win checking
    for (var j = 0; j < 3; j++) {
      if (board[0][j] !== " " &&
        board[0][j] === board[1][j] &&
        board[0][j] === board[2][j]) {
        return board[0][j];
      }
    }
    // Diagonal - top left win checking
    if (board[0][0] !== " " &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]) {
      return board[0][0];
    }
    // Diagonal - bottom left win checking
    if (board[2][0] !== " " &&
      board[2][0] === board[1][1] &&
      board[2][0] === board[0][2]) {
      return board[2][0];
    }
    //Verify that there are not any empty spaces, if true and no winner then the game is a tie.
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        if (board[i][j] === " ") {
          return false;
        }
      }
    }
    return null;
  }

  function reset () {

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        board[i][j] = " ";
        $('.square[data-i=' + i + '][data-j=' + j + ']').html(" ");
      }
    }
    var pnScores1 = document.getElementById('PnScores1');
    pnScores1.innerHTML = score1;
    var pnScores2 = document.getElementById('PnScores2');
    pnScores2.innerHTML = score2;
  }

});
