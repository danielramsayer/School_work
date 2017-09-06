### Javascript - Tic Tac Toe
***

#### Objective
The goal is to create a Tic Tac Toe game that you can only ever tie in, never win.

#### Steps Taken
This one was quite difficult, originally I created the visual aspect and then was going to do a series of if/else statements...until I realized how that would balloon. Instead of moving forward too far with that I looked online and found the MinMax algorithm and ended up reworking my javascript file to make it work.

It counts on there being an internal array representation for the board that has unused squares attributed to a number in ratio of win to lose, and which is more likely to win for the computer. It then counts the player who won (computer), and restarts the game.

Here is the code for the [Tic Tac Toe](https://github.com/danielramsayer/School_work/tree/master/FreeCodeCamp/AdvancedPrograms/TicTacToe).

Here is a CodePen functional version of [Tic Tac Toe](https://codepen.io/Daniel_Ramsayer/pen/mMvzMv)

#### The Result

My TicTacToe game is mostly a success. I want to maybe come up with a better selector for player token, and maybe add layers of difficulty (Easy, Medium, Impossible?) in the future.


![alt text](https://github.com/danielramsayer/School_work/blob/master/FreeCodeCamp/AdvancedPrograms/TicTacToe/g1.png "TicTacToe image")


[Return to portfolio](https://github.com/danielramsayer/Portfolio)
