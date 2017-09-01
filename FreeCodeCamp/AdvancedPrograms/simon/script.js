var game = {
  count: 0,
  cSeq: [],
  pSeq: [],
  colors: ["#green", "#red", "#yellow", "#blue"],
  strict: false,
  sound: {
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  },
};


// Attach sounds and visual animation to each pad press
function sounds(color) {
  switch (color) {
    case "#green":
      game.sound.green.play();
      break;
    case "#red":
      game.sound.red.play();
      break;
    case "#yellow":
      game.sound.yellow.play();
      break;
    case "#blue":
      game.sound.blue.play();
      break;
  }
}

function animation(color) {
  $(color).addClass("animate");
  sounds(color);
  setTimeout(function() {
    $(color).removeClass("animate");
  }, 500);
}

function checkStrict() {
  if ($("#strict").is(":checked")) {
    game.strict = true;
  } else {
    game.strict = false;
  }
}

$("#start").click(function() {
  checkStrict();
  resetGame();
  $("#numCount").html("==");
  colorGen();
});

function resetGame() {
  game.cSeq = [];
  game.pSeq = [];
  game.count = 0;
}

function colorGen() {
  game.count++;
  if (game.count < 10) {
    $("#numCount").html("0" + game.count);
  } else {
    $("#numCount").html(game.count);
  }
  game.cSeq.push(game.colors[(Math.floor(Math.random() * 4))]);
  playSeq();
}

function playSeq() {
  var i = 0;
  var seq = setInterval(function() {
    animation(game.cSeq[i]);
    i++;
    if (i >= game.cSeq.length) {
      clearInterval(seq);
    }
  }, 800);
  game.pSeq = [];
}

function PlayColor(id) {
  var color = "#" + id;
  console.log(color);
  game.pSeq.push(color);
  validMove(color);
}

function validMove(color) {
  if (game.pSeq[game.pSeq.length - 1] !== game.cSeq[game.pSeq.length - 1]) {
    sounds(color);
    if (game.strict === true) {
      $("#conclusionStatement").text("You've lost this game.");
      $("#game_board").fadeOut("slow");
      $("#final-screen").fadeTo("slow", 1);
    } else {
      setTimeout(function() {
        alert("That wasn't correct. Try again!");
      }, 600);
      setTimeout(function() {
        playSeq();
      }, 600);
    }
  } else {
    sounds(color);
    var checker = game.pSeq.length === game.cSeq.length;
    if (checker) {
      if (game.count === 2) {
        $("#conclusionStatement").text("Winner! Congratulations!");
        $("#game_board").fadeOut("slow");
        $("#final-screen").fadeTo("slow", 1);
      } else {
        setTimeout(function() {
          colorGen();
        }, 850);
      }
    }
  }
}

$("#new-game").click(function() {
  $("#final-screen").fadeOut("slow");
  $("#game_board").fadeTo("slow", 1);
  $("#strict").prop("checked", false);
  conclusionStatement = "";
  resetGame();
  $("#numCount").html("==");
});
