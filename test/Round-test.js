const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  it('should be a function', function() {
    //const deck = new Deck();
    expect(Round).to.be.a('function');
  })

  it('should be an instance of Deck', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  })
//assert that currentCard is first card in deck.stack
  //later in the test? after takeTurn?

//returnCurrentCard() method
  // returns current card being played (turn.currentCard)

//takeTurn() method:
    // instantiates Turn w/ first index of deck.stack as currentCard argument
    // updates turns count,
    // the next card in the deck.stack becomes the current card
      // reassign the Turn.currentCard to be next in the array
    // evaluates guesses (turn.evaluateGuess())
    // gives feedback (turn.giveFeedback())
    // stores ids of incorrect guesses
      // create an empy array property on Round class?

 // calculatePercentCorrect()
    // calculates and returns the percentage of correct guesses

 // endRound()
    // prints to console:  ‘** Round over! ** You answered
      // <>% of the questions correctly!’

}
