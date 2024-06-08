// * DATA * //


var classicGameChoices = [
  "Rock", "Paper", "Scissors"
];

var difficultGameChoices = [
  "Rock", "Paper", "Scissors",
  "Wind", "Water"
];

var player1 = {
  name: "Human",
  wins: 0
};

var player2 = {
  name: "Computer",
  wins: 0
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


// * QUERY SELECTORS - GAME MODES * //


var chooseYourGameScreen = document.querySelector(".choose-your-game");
var classicGameScreen = document.querySelector(".classic-mode-sheet");
var difficultGameScreen = document.querySelector(".difficult-mode-sheet");


// * EVENT LISTENERS * //


changeGameButton.addEventListener("click", renderChooseGameScreen);
playClassicGameButton.addEventListener("click", renderClassicGameBoard);
playDifficultGameButton.addEventListener("click", renderDifficultGameBoard);


// * FUNCTIONS * // 


function generateComputerChoice() {
  return classicGameChoices[Math.floor(Math.random() * classicGameChoices.length)];
};


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


  


