<<<<<<< HEAD
let newBoxDeck = [];
let suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
=======
//  VARIABLES
let newBoxDeck = [];
let suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
>>>>>>> f6b2aa58bacfd9ec44041a6e77656af52293dc5a
let playerOne = [];
let playerTwo = [];
let playerOneTable = [];
let playerTwoTable = [];
<<<<<<< HEAD

// PLAYER
// class Player {
//   constructor(name) {
//     this.name = name;
//     this.hand = [];
//     this.winnings = [];
//   }
// }
// PLAYER INSTANCE
// const player1 = new Player("player 1");
// const player2 = new Player("player 2");
// PLAYING TABLE
// class Table {
//   constructor(players) {
//     this.players = players;
//     this.inPlay = [];
//   }
// }
// CARD
// class Card {
//   constructor(suit, rank, face) {
//     this.suit = suit;
//     this.rank = rank;
//     this.face = face;
//   }
// }
//  DECK #5
function buildDeck() {
  for (let i = 0; i < faces.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      let playingCard = { face: faces[i], suit: suits[j] };
      newBoxDeck.push(playingCard);
    }
  }
}

buildDeck();
console.log(newBoxDeck);

=======
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
// WAR FUNCTION AND CONDITIONS

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
>>>>>>> f6b2aa58bacfd9ec44041a6e77656af52293dc5a
// BUILD DECK #3
//   buildDeck() {
//     let suit = ["Hearts", "Spades", "Diamonds", "Clubs"];
//     let face = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
//     let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
//     for (let i = 0; i < suit.length; i++) {
//       for (let j = 0; j < rank.length; j++) {
//         this.deck.push(new Card(suit[i], face[j], rank[j]));
//       }
//     }
//   }
// }
// BUILD DECK #2
// buildDeck(suits, faces) {
//   for (let suit of suits) {
//     for (let face of faces) {
//       this.deck.push(new Card(suit, face));
//     }
//   }
//   return this.deck;
// }
// SHUFFLE DECK
// shuffle() {
//   let counter = this.deck.length,
//     temp,
//     i;

//   while (counter) {
//     i = Math.floor(Math.random() * counter--);
//     temp = this.deck[counter];
//     this.deck[counter] = this.deck[i];
//     this.deck[i] = temp;
//   }
// }
// DEAL DECK
//   deal() {
//     while (Player.hand.length < 26) {
//       Player.hand.push(this.deck.pop());
//     }
//   }
// }

// let boxDeck = new Deck();
// console.log(buildDeck());

// DECK CONTENTS
// const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
// const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let deck = new Deck();
// deck.buildDeck(suits, faces);
// deck.shuffle();
// deck.deal();

// let play = () => {
//   Table.push(player1[0], player2[0]);
// };
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
// // PLAY GAME FUNCTION
// function playGame () {
//   const [player1, player2] = this.players;
//   const [playerdeck1, playerdeck2];
// // WAR FUNCTION
//   function  War () {
//     constructor (player1,player2)
//     if (player1 === player2) {
//     a lert("War") }
//     function war(a, b) {
//       if (playerOne(a) === playerTwo(b)) {
//         return alert("WAR!!!!!");
//       } else {
//         play();
//       }
//     }
//   if (player1 > player2) {
//       alert("Player1 wins!")
//   };

//   if (player2 > player1) {
//       alert("Player2 wins!");
//   }
//   if (round)

// PLAYER 1
// const playerOne = {
//     cards: [],
// }

// PLAYER 2
// const playerTwo = {
//     cards: [],
// }

// // COUNTING ROUNDS
// var totalRounds = {
//     total: 0
// };
// function counter(){
//     if (totalRounds.total += 1){
//         return alert("Round" + totalRounds.total)
//     }};

// alert ("player "" wins)
// function endGame() {
//     if (playerOne.cards === 0) {
//         return alert("Player 1 Wins!")}
//     else if (playerTwo.cards === 0) {
//         return alert("Player 2 Wins!")
//  }  else{
//      play()
//  referring to the master play function. Calling endgame function
// at end of play function
//  }
// }

<<<<<<< HEAD
// addCardsInPlay()
// conductTurn()
// finishTurn()
// conductTurn()
// warDeclared = boolean;
// prepareForWar()
// receiveSpoilsOfWar()
// spoilsOfWar = [];
// winnerOfRound = null;
// assignWinnerCards()
// determineWinner()

// startGame()
// endGame()
=======
// PLAYER
// class Player {
//   constructor(name) {
//     this.name = name;
//     this.hand = [];
//     this.winnings = [];
//   }
// }
// PLAYER INSTANCE
// const player1 = new Player("player 1");
// const player2 = new Player("player 2");
// PLAYING TABLE
// class Table {
//   constructor(players) {
//     this.players = players;
//     this.inPlay = [];
//   }
// }
// CARD
// class Card {
//   constructor(suit, rank, face) {
//     this.suit = suit;
//     this.rank = rank;
//     this.face = face;
//   }
// }
//
>>>>>>> f6b2aa58bacfd9ec44041a6e77656af52293dc5a
