// * QUERY SELECTORS - BUTTONS * //

var changeGameButton = document.querySelector(".change-game-button");
var playClassicGameButton = document.querySelector(".classic-mode-button");
var playDifficultGameButton = document.querySelector(".difficult-mode-button");

// * QUERY SELECTORS - GAME MODES * //

var chooseYourGameScreen = document.querySelector(".choose-your-game");
var classicGameScreen = document.querySelector(".classic-mode-sheet");
var difficultGameScreen = document.querySelector(".difficult-mode-sheet");

// * EVENT LISTENERS * //

changeGameButton.addEventListener("click", renderChooseGameScreen);
playClassicGameButton.addEventListener("click", renderClassicGameBoard);
playDifficultGameButton.addEventListener("click", renderDifficultGameBoard);


// * DOM FUNCTIONS * // 

function renderClassicGameBoard() {
  chooseYourGameScreen.classList.add("hidden");
  classicGameScreen.classList.remove("hidden");
  changeGameButton.classList.remove("hidden")
};

function renderDifficultGameBoard() {
  chooseYourGameScreen.classList.add("hidden");
  difficultGameScreen.classList.remove("hidden");
  changeGameButton.classList.remove("hidden")
};

function renderChooseGameScreen() {
  chooseYourGameScreen.classList.remove("hidden")
  difficultGameScreen.classList.add("hidden")
  classicGameScreen.classList.add("hidden")
  changeGameButton.classList.add("hidden")
}


  


