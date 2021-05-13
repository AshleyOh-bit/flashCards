const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

//const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    let deck;
    let data = prototypeQuestions.map(element => {
      return new Card(element.id, element.question, element.answers, element.correctAnswer)
    })

    deck = new Deck(data);
    this.currentRound = new Round(deck);

    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

}

module.exports = Game;
