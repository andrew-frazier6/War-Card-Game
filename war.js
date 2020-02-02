// PLAYER
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.winnings = [];
  }
}
// PLAYER INSTANCE
const player1 = new Player("player 1");
const player2 = new Player("player 2");
// PLAYING TABLE
class Table {
  constructor(players) {
    this.players = players;
    this.inPlay = [];
  }
}
// CARD
class Card {
  constructor(suit, face) {
    this.suit = suit;
    this.face = face;
  }
}
//  DECK
class Deck {
  constructor() {
    this.deck = [];
  }
  // BUILD DECK
  buildDeck(suits, faces) {
    for (let suit of suits) {
      for (let face of faces) {
        this.deck.push(new Card(suit, face));
      }
    }
    return this.deck;
  }
  // SHUFFLE DECK
  shuffle() {
    let counter = this.deck.length,
      temp,
      i;

    while (counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = temp;
    }
    return this.deck;
  }
  // DEAL DECK
  deal() {
    while (Player.hand.length < 26) {
      Player.hand.push(this.deck.pop());
    }
    console.log(Player.hand);
  }
}
// DECK CONTENTS
const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let deck = new Deck();
deck.buildDeck(suits, faces);
deck.shuffle();
deck.deal();
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
