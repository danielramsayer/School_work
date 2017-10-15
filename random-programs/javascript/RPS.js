/*Daniel Ramsayer*/

var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {
   computerChoice = "rock";
} else if(computerChoice <= 0.67) {
   computerChoice = "paper";
} else {
   computerChoice = "scissors";
}

var compare = function (choice1, choice2) {
var choice1 = choice1.toLowerCase();
if ( choice1 === choice2) {
    return "The result is a tie!";
} 
else if (choice1 === "rock") 
    { 
    if(choice2 === "scissors") {
        return "Computer chose Scissors - Rock wins!";
    }    
    else if(choice2 === "paper") {
        return "Computer Chose Paper - Paper Wins!";
    }
}
else if (choice1 === "paper") 
    { 
    if(choice2 === "scissors") {
        return "Computer chose scissors - scissors wins!";
    }
    else if(choice2 === "rock") {
        return "Computer Chose Rock - Paper Wins!";
    }
}
else if (choice1 === "scissors") 
    { 
    if(choice2 === "paper") {
        return "Computer chose paper - scissors wins!";
    }
    else if (choice2 === "rock") {
        return "Computer Chose Rock - Scissors Wins!";
    }
}
else {
        return "That is not a valid response, please try again.";
    }
}
compare(userChoice, computerChoice)
