const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}

  start() {
    //creates cards
    //creates a new Round using Deck

    //invokes printMessage to display message on CLI
    //invokes printQuestion to kick off helper functions
    data.map((element, index) => {
      let card[index] = new Card(element.id, element.question, element.answers, element.correctAnswer)
    })
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
