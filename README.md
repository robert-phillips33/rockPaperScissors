# rockPaperScissors

## Daily Schedule

 Tuesday: By Tuesday evening, I will have drafted all deliverables, written up my project timeline, and completed my HTML / CSS skeleton.

 Wednesday: By Wednesday evening, I will have written an outline for how I plan to establish my functionality, a clear idea of how I plan to structure my data, and a clear idea of how to update my data model.

 Thursday: By Thursdy Evening, I will have written my createPlayer // createGame functions.
 Additionally, these functions should update my data model correctly.

 Friday: By Friday evening, the DOM should reflect what is happening from the data model, meaning that the chosen icons will display on the dom, as well as player score being updated based on game outcomes.

 Saturday: By Saturday evening, the game board will be reset on the DOM allowing for a new game to be set, smoothly and without jumpiness.

 Sunday: By Sunday, I hope for my project to be finished and functional. I plan to refactor and make additional changes to my CSS to improve my users experience.



A main.js file that contains all of your JavaScript logic.

You’ll need a createPlayer function, that should return an object with the following properties:
name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)

You’ll need some of the following functions, but this is not an exhaustive list:

A createGame function that should return a game object containing:

Two Player objects (player1 and player2)

A way to keep track of the data for the game board

A way to keep track of the selected game type

A separate function to check the game’s board data for win conditions

A separate function to detect when a game is a draw (no one has won)

A separate function to reset the game’s board to begin a new game

 


1. Create the createPlayer function
2. Create the createGame function
3. Make game fully playable without the DOM (manually updating the game data, etc, from your console) to force yourself to think data-model-first
4. Create central game board on the DOM
5. Connect game data model to the DOM
6. Display the player data in the sidebars
7. Automatically reset the game board to allow for a new game to be played after the previous game is won


Both players’ wins should be displayed.

Both players’ selected fighter icon should be displayed each round.

Winner (or Draw) should be announced each round.

A timeout is used after a completed round to reset the board.

This game is played by one user against a computer. The computer player should be another 
player object with the name of ‘computer’ and have the ability to make a random choice.

You’ll need to make two versions of Rock, Paper, Scissors - “classic” and some variation. The variation should include more than 3 options (the one in the video has 5). You can invent your own variation, or do some research on variations here. Make sure you communicate the rules to your user!