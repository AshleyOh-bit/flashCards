const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound = {};
    this.deck = {};
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    //creates cards
    let data = prototypeQuestions.map((element, index) => {
      //console.log(element)
      return new Card(element.id, element.question, element.answers, element.correctAnswer)
      //console.log(card)
    })
    //console.log(data)
    //creates a deck with said cards
    this.deck = new Deck(data);
    //console.log(this.deck)
    //creates a new Round using Deck
    const round = new Round(this.deck);
    //console.log(round)
    //invokes printMessage to display message on CLI
    printMessage(this.deck, round);
    //invokes printQuestion to kick off helper functions
    printQuestion(round);
    //return data
  }

}

module.exports = Game;
