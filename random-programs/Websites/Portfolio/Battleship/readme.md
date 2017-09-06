### Python - BattleShip Game
***

#### Objective
To build a randomly generated location for a rivals battle ship and have 25 options to sink it...with three opportunities.

#### Steps Taken
My primary focus was making a simple program to get the functionality to work. Each iteration of turns creates a board of untried 'O' markers and failed 'X' markers.

I created an array and filled it with 5*5 'O's. I generated an x and y variable to be the target location and initiated game play. For each turn, the computer inquires both the row and column that you intend as a target.

While the guess is incorrect, my code checks that the entry is within the array parameters, that it's not an already used spot, and that the turn count is below 3. If it is above 3, games over.

Here is the [Battleship](Battleship.py).

#### The Result
I was able to make this simple version work to the result of having a functional game that gives a visual representation of the battleship, updates used places, and is able to do some error checking. I would like to in the future give this a better gui interface and catch more use case scenarios so I will be refactoring it in the future.

[Return to portfolio](https://github.com/danielramsayer/Portfolio)
