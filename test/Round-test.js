const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  it.skip('should be a function', function() {
    //const deck = new Deck();
    expect(Round).to.be.a('function');
  })

  it.skip('should be an instance of Deck', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  })

  it.skip('should store a deck of cards', function() {
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

//is this one really necessary?
//Should we make a test to assert that turns is a prop?
  it.skip('should be able to store incorrect guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([])
  })

  //returnCurrentCard() method
    // returns current card being played (turn.currentCard)
    it.skip('should be able to return current card', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal',
        ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?',
        ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?',
        ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      deck.returnCurrentCard()

      expect(round.returnCurrentCard).to.deep.equal(deck.stack[0]);
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

    it.skip('should be able to calculate the percentage of correct guesses', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal',
        ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?',
        ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?',
        ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      //call take turn here
      //reference data here to calculate the percent correct
      deck.calculatePercentCorrect()

      expect(round.calculatePercentCorrect()).to.deep.equal();
    })

 // endRound()
    // prints to console:  ‘** Round over! ** You answered
      // <>% of the questions correctly!’

}
