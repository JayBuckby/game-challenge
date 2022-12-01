const gameGrid = document.querySelector(".grid");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const gameCard = document.querySelector(".gameCard");
const cardImage = document.querySelector(".card-image");
const allCardValues = [1, 2, 3, 4, 5, 6, 7, 8];

let cardImages = [];
let userClickOne = "";
let userClickTwo = "";
let matchArray = [];

//This
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
  // This function shuffles the images and populates them randomly in the grid
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
      //This is our match/not a match conditions
      if (userClickOne === "") {
        userClickOne = imagePath;
        matchArray.push(imagePath);
      } else if (userClickTwo === "") {
        userClickTwo = imagePath;
        matchArray.push(imagePath);
      }
      if (matchArray.length === 2) {
        if (userClickOne === userClickTwo) {
          console.log(matchArray);
          console.log(document.getElementById(matchArray[0]));
          console.log(document.getElementById(matchArray[1]));
          document.getElementById(matchArray[0]).classList.add("active--match");
          document.getElementById(matchArray[1]).classList.add("active--match");
          userClickOne = "";
          userClickTwo = "";
          matchArray = [];
        } else {
          console.log(matchArray);
          document.getElementById(matchArray[0]).classList.remove("active");
          document.getElementById(matchArray[1]).classList.remove("active");
          document.getElementById(matchArray[0]).classList.add("blankcard");
          document.getElementById(matchArray[1]).classList.add("blankcard");
          document.getElementById(matchArray[0]).innerHTML = `<div>
          <div class="blank">
              <img src="./images/blankcard.png"</img>
          </div>        
      </div>`;
          document.getElementById(matchArray[1]).innerHTML = `<div>
          <div class="blank">
              <img src="./images/blankcard.png"</img>
          </div>        
      </div>`;
          matchArray = [];
          alert("this is not a match");
          userClickOne = "";
          userClickTwo = "";
        }
      }
    });
    gameGrid.append(card);
  }
};
//Clears the grid and allows user to generate a new grid.
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
