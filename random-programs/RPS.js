var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 

var compare = function (choice1, choice2) {{
if (choice1 === choice2) {
    return "The result is a tie!";
} 
else if (choice1 === "rock") { 
    if(choice2 === "scissors") {
        return "Computer chose Scissors - Rock wins!";
    }
    else {
        return "Computer chose Paper - Paper Wins!";
    }
}}
{
if (choice1 === "paper") { 
    if(choice2 === "scissors") {
        return "Computer chose scissors - scissors wins!";
    }
    else {
        return "Computer Chose Rock - Paper Wins!";
    }
}}
{
if (choice1 === "scissors") { 
    if(choice2 === "paper") {
        return "Computer chose paper - scissors wins!";
    }
    else {
        return "Computer Chose Rock - Rock Wins!";
    }
}}  
}

compare(userChoice, computerChoice)
