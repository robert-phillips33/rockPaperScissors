// * DATA AND GLOBALS * //


var classicGameChoices = [
  "rock", "paper", "scissors"
];

var difficultGameChoices = [
  "rock", "paper", "scissors",
  "wind", "water"
];

var playGame = createGame();
var gameSettings = createSettings();
var human = createPlayer();
var computer = createComputer();





// * QUERY SELECTORS - BUTTONS * //


var changeGameButton = document.querySelector(".change-game-button");
var playClassicGameButton = document.querySelector(".classic-mode-button");
var playDifficultGameButton = document.querySelector(".difficult-mode-button");
var rockButton = document.querySelector(".rock-button");
var paperButton = document.querySelector(".paper-button");
var scissorsButton = document.querySelector(".scissors-button");
var windButton = document.querySelector(".wind-button");
var waterButton = document.querySelector(".water-button");


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
    gameResult: null
  }
  return playGame;
};

function createSettings() {
  var gameSettings = {
    currentSelection: null
  }
  return gameSettings;
};

function decideWinnerClassic() {
  var computerChoice = getRandomIndex(classicGameChoices);
  playGame.computerSelection = classicGameChoices[computerChoice]

  if (playGame.humanSelection === playGame.computerSelection) {
    playGame.gameResult = "It's a tie..";
  } else if (
    (playGame.humanSelection === "rock" && playGame.computerSelection === "scissors") ||
    (playGame.humanSelection === "scissors" && playGame.computerSelection === "paper") ||
    (playGame.humanSelection === "paper" && playGame.computerSelection === "rock")) {

    playGame.gameResult = "Human has won this round..";
    human.wins++;
  } else {
    playGame.gameResult = "Computer wins again..";
    computer.wins++;
  
    
  };
};

  // when a user clicks an game object, display their object / computer object and game outcome

  function renderDomClassic() {

  }


  


var classicGameChoices = [
  "rock", "paper", "scissors"
];

var difficultGameChoices = [
  "rock", "paper", "scissors",
  "wind", "water"
];

var playGame = createGame();
var gameSettings = createSettings();
var human = createPlayer();
var computer = createComputer();





// * QUERY SELECTORS - BUTTONS * //


var changeGameButton = document.querySelector(".change-game-button");
var playClassicGameButton = document.querySelector(".classic-mode-button");
var playDifficultGameButton = document.querySelector(".difficult-mode-button");
var rockButton = document.querySelector(".rock-button");
var paperButton = document.querySelector(".paper-button");
var scissorsButton = document.querySelector(".scissors-button");
var windButton = document.querySelector(".wind-button");
var waterButton = document.querySelector(".water-button");


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
    gameResult: null
  }
  return playGame;
};

function createSettings() {
  var gameSettings = {
    currentSelection: null
  }
  return gameSettings;
};

function decideWinnerClassic() {
  var computerChoice = getRandomIndex(classicGameChoices);
  playGame.computerSelection = classicGameChoices[computerChoice]
  
  if (playGame.humanSelection === playGame.computerSelection) {
    playGame.gameResult = "It's a tie..";
  } else if (
    (playGame.humanSelection === "rock" && playGame.computerSelection === "scissors") ||
    (playGame.humanSelection === "scissors" && playGame.computerSelection === "paper") ||
    (playGame.humanSelection === "paper" && playGame.computerSelection === "rock")) {

    playGame.gameResult = "Human has won this round..";
    human.wins++;
  } else {
    playGame.gameResult = "Computer wins again..";
    computer.wins++;
  };
};

