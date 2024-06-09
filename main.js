// * DATA AND GLOBALS * //


var classicGameChoices = [
  "rock", "paper", "scissors"
];

var difficultGameChoices = [
  "rock", "paper", "scissors",
  "wind", "water"
];

var playGame = createGame();
var human = createPlayer();
var computer = createComputer();

// * QUERY SELECTORS - BUTTONS * //
var changeGameButton = document.querySelector(".change-game-button");
var playClassicGameButton = document.querySelector(".classic-mode-button");
var playDifficultGameButton = document.querySelector(".difficult-mode-button");
var rockButtons = document.querySelectorAll(".rock-button");
var paperButtons = document.querySelectorAll(".paper-button");
var scissorsButtons = document.querySelectorAll(".scissors-button");
var windButtons = document.querySelectorAll(".wind-button");
var waterButtons = document.querySelectorAll(".water-button");

// * QUERY SELECTORS - GAME MODES * //
var chooseYourGameScreen = document.querySelector(".choose-your-game");
var classicGameScreen = document.querySelector(".classic-mode-sheet");
var difficultGameScreen = document.querySelector(".difficult-mode-sheet");

// * EVENT LISTENERS * //
changeGameButton.addEventListener("click", renderChooseGameScreen);
playClassicGameButton.addEventListener("click", renderClassicGameBoard);
playDifficultGameButton.addEventListener("click", renderDifficultGameBoard);

// * FUNCTIONS * // 
function getRandomIndex(classicGameChoices) {
  return Math.floor(Math.random() * classicGameChoices.length)
}

function renderClassicGameBoard() {
  chooseYourGameScreen.classList.add("hidden");
  classicGameScreen.classList.remove("hidden");
  changeGameButton.classList.remove("hidden");
};

function renderDifficultGameBoard() {
  chooseYourGameScreen.classList.add("hidden");
  difficultGameScreen.classList.remove("hidden");
  changeGameButton.classList.remove("hidden");
};

function renderChooseGameScreen() {
  chooseYourGameScreen.classList.remove("hidden");
  difficultGameScreen.classList.add("hidden");
  classicGameScreen.classList.add("hidden");
  changeGameButton.classList.add("hidden");
};

function createPlayer() {
  var human = {
    player: "Human",
    wins: 0
  }
  return human;
};

function createComputer() {
  var computer = {
    player: "Computer",
    wins: 0
  }
  return computer;
};

function createGame() {
  var playGame = {
    humanSelection: null,
    computerSelection: null,
    gameResult: null,
    gameType: null
  }
  return playGame;
};

// * QUERY SELECTORS - BUTTONS * //
var changeGameButton = document.querySelector(".change-game-button");
var playClassicGameButton = document.querySelector(".classic-mode-button");
var playDifficultGameButton = document.querySelector(".difficult-mode-button");
var rockButton = document.querySelector(".rock-button");
var paperButton = document.querySelector(".paper-button");
var scissorsButton = document.querySelector(".scissors-button");
var windButton = document.querySelector(".wind-button");
var waterButton = document.querySelector(".water-button");
var playerWinsTotal = document.querySelector("#player-wins-total");
var computerWinsTotal = document.querySelector("#computer-wins-total");
var difficultGameButtons = document.querySelector(".difficult-game-buttons");
var dynamicMessage = document.querySelector("#dynamic-message");

// * QUERY SELECTORS - GAME MODES * //
var chooseYourGameScreen = document.querySelector(".choose-your-game");
var classicGameScreen = document.querySelector(".classic-mode-sheet");
var difficultGameScreen = document.querySelector(".difficult-mode-sheet");

// * EVENT LISTENERS * //
changeGameButton.addEventListener("click", renderChooseGameScreen);
playClassicGameButton.addEventListener("click", renderClassicGameBoard);
playDifficultGameButton.addEventListener("click", renderDifficultGameBoard);

// * FUNCTIONS * // 
function getRandomIndex(classicGameChoices) {
  return Math.floor(Math.random() * classicGameChoices.length)
}

function renderClassicGameBoard() {
  chooseYourGameScreen.classList.add("hidden");
  classicGameScreen.classList.remove("hidden");
  changeGameButton.classList.remove("hidden");
  difficultGameButtons.classList.add("hidden");
  playGame.gameType = "classic";
};

function renderDifficultGameBoard() {
  chooseYourGameScreen.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
  difficultGameButtons.classList.remove("hidden");
  classicGameScreen.classList.remove("hidden");
  playGame.gameType = "difficult";
};

function renderChooseGameScreen() {
  chooseYourGameScreen.classList.remove("hidden");
  classicGameScreen.classList.add("hidden");
  changeGameButton.classList.add("hidden");
};

function createPlayer() {
  var human = {
    player: "Human",
    wins: 0
  }
  return human;
};

function createComputer() {
  var computer = {
    player: "Computer",
    wins: 0
  }
  return computer;
};

function createGame() {
  var playGame = {
    humanSelection: null,
    computerSelection: null,
    gameResult: null,
    gameType: null
  }
  return playGame;
};

function decideWinner() {
  // Dynamically set computer choices according to gameType
  var computerChoices = classicGameChoices;
  if (playGame.gameType === "difficult") {
    computerChoices = difficultGameChoices;
  }
  var computerChoice = getRandomIndex(computerChoices);
  playGame.computerSelection = computerChoices[computerChoice]

  if (playGame.humanSelection === playGame.computerSelection) {
    playGame.gameResult = "It's a tie..";
  } else if (
    (playGame.humanSelection === "rock" && (playGame.computerSelection === "scissors" || playGame.computerSelection === "water")) ||
    (playGame.humanSelection === "paper" && (playGame.computerSelection === "rock" || playGame.computerSelection === "wind")) ||
    (playGame.humanSelection === "scissors" && (playGame.computerSelection === "paper" || playGame.computerSelection === "wind")) ||
    (playGame.humanSelection === "wind" && (playGame.computerSelection === "paper" || playGame.computerSelection === "rock")) ||
    (playGame.humanSelection === "water" && (playGame.computerSelection === "rock" || playGame.computerSelection === "scissors"))
  ) {
    playGame.gameResult = "Human has won this round..";
    human.wins++;
  } else {
    playGame.gameResult = "Computer wins again..";
    computer.wins++;
  };

  // Set text content
  computerWinsTotal.innerText = `WINS: ${computer.wins}`;
  playerWinsTotal.innerText = `WINS: ${human.wins}`;
  dynamicMessage.innerText = `${playGame.gameResult}`;

  // Hide all game buttons
  var allGameButtons = document.querySelectorAll(".game-button");
  for (var i = 0; i < allGameButtons.length; i++) {
    var gameButton = allGameButtons[i];
    gameButton.classList.add('disabled');
  }

  // Get the selected game button classes
  var humanSelectedClassName = `${playGame.humanSelection}-button`;
  var computerSelectedClassName = `${playGame.computerSelection}-button`;
  document.querySelector(`.${humanSelectedClassName}`).classList.remove('disabled');
  document.querySelector(`.${computerSelectedClassName}`).classList.remove('disabled');

  // After 5 seconds, reset the game
  setTimeout(function () {
    allGameButtons.forEach(gameButton => {
      gameButton.classList.remove("disabled");
    });
    dynamicMessage.innerText = "CHOOSE YOUR FIGHTER";
  }, 3000);

  console.log(playGame);
};

// Add click event listener to all rockButtons (elements with .rock-button class)
for (var i = 0; i < rockButtons.length; i++) {
  var rockButton = rockButtons[i];
  rockButton.addEventListener("click", rockButtonClickHandler);
};

// Add click event listener to all paperButtons (elements with .paper-button class)
for (var i = 0; i < paperButtons.length; i++) {
  var paperButton = paperButtons[i];
  paperButton.addEventListener("click", paperButtonClickHandler);
};

// Add click event listener to all scissorsButtons (elements with .scissor-button class)
for (var i = 0; i < scissorsButtons.length; i++) {
  var scissorsButton = scissorsButtons[i];
  scissorsButton.addEventListener("click", scissorsButtonClickHandler);
};

for (var i = 0; i < waterButtons.length; i++) {
  var waterButton = waterButtons[i];
  waterButton.addEventListener("click", waterButtonClickHandler);
};

for (var i = 0; i < windButtons.length; i++) {
  var windButton = windButtons[i];
  windButton.addEventListener("click", windButtonClickHandler);
};

function rockButtonClickHandler(event) {
  playGame.humanSelection = "rock";
  decideWinner();
};

function paperButtonClickHandler(event) {
  playGame.humanSelection = "paper";
  decideWinner();
};

function scissorsButtonClickHandler(event) {
  playGame.humanSelection = "scissors";
  decideWinner();
};

function waterButtonClickHandler(event) {
  playGame.humanSelection = "water";
  decideWinner();
};

function windButtonClickHandler(event) {
  playGame.humanSelection = "wind";
  decideWinner();
}
