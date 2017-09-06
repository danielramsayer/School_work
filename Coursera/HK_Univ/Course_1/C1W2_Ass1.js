<!DOCTYPE html>
<html>
<title>Javascript Colour Guessing Game</title>
<head>
<style>

</style>
</head>
  <body onload = "do_game()">
  <script>
    var target;
    var guess_input;
    var guess_input_text;
    var finished = false;
    var guesses = 1;
    var colours = ["red","orange","yellow","green","blue","purple"];

    function do_game() {
        var random_number = Math.random() * 7;
        var random_number_int = Math.floor(random_number);
        target = colours[random_number_int];


        while(finished === false) {
            guess_input_text = prompt("I've chosen a color from this list: " +
            colours.join(", ") + " which color did I choose?" + " I chose " + target);
            finished = check_guess();
        }
    }

    function check_guess() {
        if (colours.includes(guess_input_text)) {
            if (guess_input_text === target) {
                var addS = (guesses > 1) ? "s" : "";
                alert("You entered " + target + ", the correct colour! It took you " + guesses + " time"+addS);
                return true;
            } else if (guess_input_text !== target) {
              if (colours.indexOf(guess_input_text) > colours.indexOf(target)) {
                alert("Sorry, this is the wrong colour! You've chosen too high of a colour. Please try again.");
                guesses += 1;
                return false;
              } else {
                alert("Sorry, this is the wrong colour! You've chosen too low of a colour. Please try again.");
                guesses += 1;
                return false;
              }
            }
        } else {
            alert("This is not one of the colour choices, please spell the color exactly as written here:" + colours.join(", "));
            guesses += 1;
            return false;
        }
    }
    </script>
</body>
</html>
