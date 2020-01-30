// DECK BUILD
// ACE HIGH

// SPLIT THE DECK

// PLACING OF EACH PLAYERS CARD

// learn about annonomous function. meaning one that calls itself

// CARDS BEING PLACED BACK TO STACK OF WINNING PLAYER

// WAR GAME _____------_____-----______----______-----
// if (s[] == )
// PLACEMENT OF 3 CARDS FROM EACH PLAYERS STACK FACE DOWN

// PLACE OF 1 CARD UP FROM EACH STACK

// WINNER

// TIE OR REPEAT

// COLLECTION OF CARDS AFTER WIN

// END OF WAR GAME____-----______----____-----

// PLAYER'S CARDS REACH 0 END GAME
// while player 1 cards.length && player 2 cards.length > 0
// continue play
// when player 1 cards.length || player 2 cards.length = 0
// end game

// COUNTING OF ROUNDS
// var rounds = function round() {};

// var round = function count() {
//     if (player1.cards -= 1 && player2.cards -= 1)
//         return totalRounds.total;
// }
// COUNTING OF WAR ROUNDS

// COUNTING OF BOTH ROUNDS TOTAL

// ROCK PAPER SCISCORS TIE

// Print a message for each "round" of the game showing the
// cards played by each user, who
// won the round, and how many cards each player now has.

// function counter(){
// if (totalRounds += 1){
//     return alert("Round" + totalRounds)
// }   else if (playerOne.cards === 0){
//         return alert("Player 1 Wins!")
// }   else if (playerTwo.cards === 0) {
//         return alert("Player 2 Wins!")
// }   else play()

// };

// PLAYER 1
// const playerOne = {
//     cards: [],
// }
//

// PLAYER 2
// const playerTwo = {
//     cards: [],

// }
//

// COUNTING ROUNDS
// var totalRounds = {
//     total: 0
// };

// function counter(){
//     if (totalRounds.total += 1){
//         return alert("Round" + totalRounds.total)
//     }};
//

// ALERT (PLAYER) WINS
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
//

// THE DECK
const cards = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14
];
// SPLIT THE DECK
cards.length / 2;

function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    myChunk = myArray.slice(index, index + chunk_size);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
}
// Split in group of 3 items
var result = chunkArray(cards, 2);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result);

// WAR FUNCTION
// function war(a, b) {
//   if (playerOne(a) === playerTwo(b)) {
//     return alert("WAR!!!!!");
//   } else {
//     play();
//   }
// }
//
