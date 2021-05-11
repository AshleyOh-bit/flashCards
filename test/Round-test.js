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

//returnCurrentCard() method
  // returns current card being played (turn.currentCard)
  it('should store a deck of cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.deep.equal(deck.stack);
  })
//takeTurn() method:
    // instantiates Turn w/ first index of deck.stack as currentCard argument
    // updates turns count,
    // the next card in the deck.stack becomes the current card
      // reassign the Turn.currentCard to be next in the array
    // evaluates guesses (turn.evaluateGuess())
    // gives feedback (turn.giveFeedback())
    // stores ids of incorrect guesses
      // create an empy array property on Round class?

//assert that currentCard is first card in deck.stack
  //later in the test? after takeTurn?

 // calculatePercentCorrect()
    // calculates and returns the percentage of correct guesses

 // endRound()
    // prints to console:  ‘** Round over! ** You answered
      // <>% of the questions correctly!’

}
