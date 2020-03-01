//  VARIABLES
let newBoxDeck = [];
let suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let playerOne = [];
let playerTwo = [];
let playerOneTable = [];
let playerTwoTable = [];

let table = [];
//  BUILD DECK
function buildDeck() {
  let suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
  let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      let playingCard = { suits: suits[i], rank: rank[j] };
      newBoxDeck.push(playingCard);
    }
  }
  console.log(newBoxDeck);
}

// SHUFFLE                    FISHER YATES ALGO
// https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
let shuffleDeck = newBoxDeck;
function shuffle() {
  for (let i = shuffleDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = shuffleDeck[i];
    shuffleDeck[i] = shuffleDeck[j];
    shuffleDeck[j] = temp;
  }
  console.log(shuffleDeck);
}
// DEALING THE CARDS
let dealingCards = shuffleDeck;
function deal() {
  for (let i = 0; i < newBoxDeck.length; i++) {
    if (i % 2 === 0) {
      playerOne.push(newBoxDeck[i]);
    } else {
      playerTwo.push(newBoxDeck[i]);
    }
  }
  console.log(playerOne, playerTwo);
}

// PLAYING A ROUND AND SHOWING THE CARDS ON THE TABLE 1 BY 1
function showCard() {
  if (playerOne.length && playerTwo.length !== 0) {
    playerOneTable.push(playerOne[0]), playerTwoTable.push(playerTwo[0]);
    playerOne.splice(0, 1);
    playerTwo.splice(0, 1);
  }
}
// CHECKING TO SEE THE HIGH CARD
function highCard() {
  if (playerOneTable[0].rank > playerTwoTable[0].rank) {
    console.log("Round Winner. Player 1");
    playerOne.push(playerOneTable[0], playerTwoTable[0]);
  } else if (playerTwoTable[0].rank > playerOneTable[0].rank) {
    console.log("Round Winner. Player 2");
    playerTwo.push(playerTwoTable[0], playerOneTable[0]);
  } else {
    console.log("WAR");
    war();
  }
}

function War() {
  playerOneTable.push(playerOne.splice(0, 4)),
    playerTwoTable.push(playerTwo.slice(0, 4));
  compareWar();
}

function compareWar() {
  if (playerOneTable[0].rank > playerTwoTable[0].rank) {
    console.log("Winner of WAR. Player 1");
    playerOne.push(playerOneTable[0], playerTwoTable[0]);
  } else if (playerTwoTable[0].rank > playerOneTable[0].rank) {
    console.log("Winner of WAR. Player 2");
    playerTwo.push(playerTwoTable[0], playerOneTable[0]);

    playerOne.push(...playerOneTable), playerTwo.push(playerTwoTable);
  }
}

// END GAME CHECK
function endGameCheck() {
  while (playerOne.length || playerTwo.length === 52) {
    playGame();
  }
}
//  FULL PLAY GAME FUNCTION
function playGame() {
  buildDeck();
  shuffle();
  deal();
  showCard();
  highCard();
}
playGame();

// TOTAL ROUNDS
// let totalRounds = [];
// function roundCounter(){
//   if (totalRounds += 1){
//       return alert("Round" + totalRounds)
//   }   else if (playerOne.cards === 0){
//           return alert("Player 1 Wins!")
//   }   else if (playerTwo.cards === 0) {
//           return alert("Player 2 Wins!")
//   }   else play();
// }

// var totalRounds = {
//     total: 0
// };
// function counter(){
//     if (totalRounds.total += 1){
//         return alert("Round" + totalRounds.total)
//     }};
