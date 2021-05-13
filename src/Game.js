const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound;
    //this.deck = {};
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
    let deck;
    let data = prototypeQuestions.map((element, index) => {
      //console.log(element)
      return new Card(element.id, element.question, element.answers, element.correctAnswer)
      //console.log(card)
    })
    //console.log(data)
    //creates a deck with said cards
    deck = new Deck(data);
    //console.log(this.deck)
    //creates a new Round using Deck
    this.currentRound = new Round(deck);
    //console.log(round)
    //invokes printMessage to display message on CLI
    this.printMessage(deck, this.currentRound);
    //invokes printQuestion to kick off helper functions
    this.printQuestion(this.currentRound);
    //return data
  }

}

module.exports = Game;
