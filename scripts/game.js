// Generate divs dynamically for game cards and populate the grid with them.

const gameGrid = document.querySelector(".grid");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const gameCard = document.querySelector(".gameCard");
const cardImage = document.querySelector(".card-image");
const allCardValues = [1, 2, 3, 4, 5, 6, 7, 8];

let cardImages = [];
let userClickOne = "";
let userClickTwo = "";

const shuffleCards = (arr) => {
  return arr.sort(function () {
    return Math.random() - 0.5;
  });
};
// run function to start game and populate grid

const startGame = () => {
  gameGrid.classList += " grid-border";
  startButton.className = "hidden-button";
  restartButton.className = "";
  allCardValues.forEach((cardValue) => {
    let gameSquare = "../images/image";
    gameSquare += cardValue.toString();
    gameSquare += ".png";
    cardImages.push(gameSquare, gameSquare);
  });

  const shuffledCards = shuffleCards(cardImages);
  for (i = 0; i < shuffledCards.length; i++) {
    const card = document.createElement("div");
    card.className = "gameCard";
    card.innerHTML = `<div>
        <div class="blank">
            <img src="./images/blankcard.png"</img>
        </div>        
    </div>`;
    let imagePath = shuffledCards[i];
    card.addEventListener("click", (event) => {
      card.innerHTML = `<div id="${imagePath}" class="active">
      <img src="${imagePath}"></img>
      </div>`;
      if (userClickOne === "") {
        userClickOne = imagePath;
      } else if (userClickTwo === "") {
        userClickTwo = imagePath;
        if (userClickOne === userClickTwo) {
          document.getElementById(imagePath).classList.add("match");
          userClickOne = "";
          userClickTwo = "";
        } else {
          alert("this is not a match");
          userClickOne = "";
          userClickTwo = "";
        }
      }
    });
    gameGrid.append(card);
  }
};

const restartGame = () => {
  restartButton.className = "hidden-button";
  startButton.className = "";
  gameGrid.innerHTML = "";
  gameGrid.classList = "grid";
  cardImages = [];
};

//EVENT LISTENERS
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);
