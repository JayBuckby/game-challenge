// Generate divs dynamically for game cards and populate the grid with them.

const gameGrid = document.querySelector(".grid");
const gameButton = document.querySelector("button");
const allCardValues = [1, 2, 3, 4, 5, 6, 7, 8];

let cardImages = [];

// run function to start game and populate grid

const runGame = () => {
  allCardValues.forEach((cardValue) => {
    cardImages.push(cardValue, cardValue);
  });
  //Shuffle the contents of the allCardValues array, to randomize the playability of game

  //Render the grid, render the cards
  for (i = 0; i < cardImages.length; i++) {
    const card = document.createElement("div");
    card.className = "gameCard";
    card.innerHTML = `<div>
        <div class="not-active"></div>
        <div class="active">
            <img src="./images/circleimg${cardImages[i]}.png"></img>
        </div>
    </div>`;
    gameGrid.append(card);
  }
};

//EVENT LISTENERS
gameButton.addEventListener("click", runGame);
