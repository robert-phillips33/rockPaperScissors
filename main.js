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
var clonedNode;

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
var allGameButtons = document.querySelectorAll(".game-button");



// * QUERY SELECTORS - GAME MODES * //

var chooseYourGameScreen = document.querySelector(".choose-your-game");
var classicGameScreen = document.querySelector(".classic-mode-sheet");
var difficultGameScreen = document.querySelector(".difficult-mode-sheet");
var classicGameContainer = document.querySelector(".classic-mode-view");


// * EVENT LISTENERS * //

changeGameButton.addEventListener("click", renderChooseGameScreen);
playClassicGameButton.addEventListener("click", renderClassicGameBoard);
playDifficultGameButton.addEventListener("click", renderDifficultGameBoard);
rockButton.addEventListener("click", rockButtonClickHandler);
paperButton.addEventListener("click", paperButtonClickHandler);
scissorsButton.addEventListener("click", scissorsButtonClickHandler);
waterButton.addEventListener("click", waterButtonClickHandler);
windButton.addEventListener("click", windButtonClickHandler);

// * FUNCTIONS * // 

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
  for (var i = 0; i < allGameButtons.length; i++) {
    var gameButton = allGameButtons[i];
    gameButton.classList.add("disabled");
    var humanSelectedClassName = `${playGame.humanSelection}-button`;
    var computerSelectedClassName = `${playGame.computerSelection}-button`;
    document.querySelector(`.${humanSelectedClassName}`).classList.remove("disabled");
    document.querySelector(`.${computerSelectedClassName}`).classList.remove("disabled");
  };
  if (playGame.gameResult.endsWith("TIE GAME")) {
    var newElement = document.createElement("img");
    newElement.classList.add(`${playGame.humanSelection}-button`);
    newElement.src = `assets/${playGame.humanSelection}.svg`;
    newElement.alt = `${playGame.humanSelection}`;
    newElement.id = "clone";
    
    classicGameContainer.appendChild(newElement);
  };
};

function resetGame() {
  document.querySelector(".classic-mode-view").style.pointerEvents = "none";
  
  setTimeout(function () {
    
    allGameButtons = document.querySelectorAll(".game-button");
    var clone = document.querySelector("#clone");
    if (clone) {
      classicGameContainer.removeChild(clone);
    }
    for (var i = 0; i < allGameButtons.length; i++) {
      var gameButton = allGameButtons[i];
      gameButton.classList.remove("disabled");
    };

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



