// Generate divs dynamically for game cards and populate the grid with them.

const gameGrid = document.querySelector(".grid");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const gameCard = document.querySelector(".gameCard");
const cardImage = document.querySelector(".card-image");
const allCardValues = [1, 2, 3, 4, 5, 6, 7, 8];

let cardImages = [];

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
  //Shuffle the contents of the allCardValues array, to randomize the playability of game

  //Render the grid, render the cards
  for (i = 0; i < cardImages.length; i++) {
    const card = document.createElement("div");
    card.className = "gameCard";
    card.setAttribute("id", i);
    card.innerHTML = `<div>
        <div class="blank">
            <img class="card-image" id="${i}" src="./images/blankcard.png"</img>
        </div>        
    </div>`;
    let temp = cardImages[i];
    card.addEventListener("click", (event) => {
      console.dir(event.target.id);
      card.innerHTML = `<div class="active">
      <img src="${temp}"></img>
      </div>`;
    });
    gameGrid.append(card);
  }
};

const restartGame = () => {
  restartButton.className = "hidden-button";
  startButton.className = "";
  gameGrid.innerHTML = "";
};

//EVENT LISTENERS
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);

// cardImage.addEventListener("click", handleBoxClick);
