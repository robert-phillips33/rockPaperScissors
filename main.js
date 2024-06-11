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
var playerWinsTotal = document.querySelector("#player-wins-total");
var computerWinsTotal = document.querySelector("#computer-wins-total");
var difficultGameButtons = document.querySelector(".difficult-game-buttons");
var dynamicMessage = document.querySelector("#dynamic-message");
var allGameButtons = document.querySelectorAll(".game-button");

// * QUERY SELECTORS - GAME MODES * //

var chooseYourGameScreen = document.querySelector(".choose-your-game");
var classicGameScreen = document.querySelector(".classic-mode-sheet");
var difficultGameScreen = document.querySelector(".difficult-mode-sheet");

// * EVENT LISTENERS * //

changeGameButton.addEventListener("click", renderChooseGameScreen);
playClassicGameButton.addEventListener("click", renderClassicGameBoard);
playDifficultGameButton.addEventListener("click", renderDifficultGameBoard);

// * FUNCTIONS * // 

for (var i = 0; i < rockButtons.length; i++) {
  var rockButton = rockButtons[i];
  rockButton.addEventListener("click", rockButtonClickHandler);
};

for (var i = 0; i < paperButtons.length; i++) {
  var paperButton = paperButtons[i];
  paperButton.addEventListener("click", paperButtonClickHandler);
};

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

function getRandomIndex(classicGameChoices) {
  return Math.floor(Math.random() * classicGameChoices.length)
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

function displayGameResults() {
  computerWinsTotal.innerText = `WINS: ${computer.wins}`;
  playerWinsTotal.innerText = `WINS: ${human.wins}`;
  dynamicMessage.innerText = `${playGame.gameResult}`;
};

function hideGameButtons() {
  var allGameButtons = document.querySelectorAll(".game-button");
  for (var i = 0; i < allGameButtons.length; i++) {
    var gameButton = allGameButtons[i];
    gameButton.classList.add("disabled");
    var humanSelectedClassName = `${playGame.humanSelection}-button`;
    var computerSelectedClassName = `${playGame.computerSelection}-button`;
    document.querySelector(`.${humanSelectedClassName}`).classList.remove("disabled");
    document.querySelector(`.${computerSelectedClassName}`).classList.remove("disabled");
  };
};

function resetGame() {
  document.querySelector(".classic-mode-view").style.pointerEvents = "none";

  setTimeout(function () {
    for (var i = 0; i < allGameButtons.length; i++) {
      var gameButton = allGameButtons[i];
      gameButton.classList.remove("disabled");
    }
    dynamicMessage.innerText = "CHOOSE YOUR FIGHTER";
    document.querySelector(".classic-mode-view").style.pointerEvents = "auto";
  }, 2800);
};

function decideWinner() {
  var computerChoices = classicGameChoices;
  if (playGame.gameType === "difficult") {
    computerChoices = difficultGameChoices;
  }
  var computerChoice = getRandomIndex(computerChoices);
  playGame.computerSelection = computerChoices[computerChoice];

  if (playGame.humanSelection === playGame.computerSelection) {
    playGame.gameResult = `BOTH PLAYERS CHOSE ${playGame.humanSelection.toUpperCase()}, TIE GAME`;
  } else if (
    (playGame.humanSelection === "rock" && (playGame.computerSelection === "scissors" || playGame.computerSelection === "wind")) ||
    (playGame.humanSelection === "paper" && (playGame.computerSelection === "rock" || playGame.computerSelection === "water")) ||
    (playGame.humanSelection === "scissors" && (playGame.computerSelection === "paper" || playGame.computerSelection === "wind")) ||
    (playGame.humanSelection === "wind" && (playGame.computerSelection === "paper" || playGame.computerSelection === "water")) ||
    (playGame.humanSelection === "water" && (playGame.computerSelection === "scissors" || playGame.computerSelection === "rock"))
  ) {
    playGame.gameResult = "HUMAN WINS..";
    human.wins++;
  } else {
    playGame.gameResult = "COMPUTER WINS..";
    computer.wins++;
  };
  
  displayGameResults();
  hideGameButtons();
  resetGame();
};



