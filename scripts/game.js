// Generate divs dynamically for game cards and populate the grid with them.

const gameGrid = document.querySelector(".grid");
const gameButton = document.querySelector("button");
const gameCard = document.querySelector(".gameCard");
const cardImage = document.querySelector(".card-image");
const allCardValues = [1, 2, 3, 4, 5, 6, 7, 8];

let cardImages = [];

// run function to start game and populate grid

// const handleBoxClick = (event) => {
//   console.log("this is clicked", event);

//   card.addEventListener("click", () => {
//     console.log("This is being clicked");
//   });
// };

const startGame = () => {
  gameGrid.classList += " grid-border";
  gameButton.innerHTML = "Restart the game";
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
    card.setAttribute("value", i);
    card.innerHTML = `<div>
        <div class="blank">
            <img class="card-image" src="./images/blankcard.png"</img>
        </div>        
    </div>`;
    let temp = cardImages[i];
    card.addEventListener("click", () => {
      card.innerHTML = `<div class="active">
      <img src="${temp}"></img>
      </div>`;
    });
    gameGrid.append(card);
  }
};

const restartGame = () => {
  card.innerHTML = "";
  startGame();
};

//EVENT LISTENERS
gameButton.addEventListener("click", startGame);

cardImage.addEventListener("click", handleBoxClick);
