const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  let card1, card2, card3, deck, round;

    beforeEach(function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal',
        ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?',
        ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?',
        ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
  })

  it.skip('should be a function', function() {
    //const deck = new Deck();
    expect(Round).to.be.a('function');
  })

  it.skip('should be an instance of Deck', function() {
    //const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  })

  it.skip('should store a deck of cards', function() {
    expect(round.deck).to.deep.equal(deck.stack);
  })

//is this one really necessary?
//Should we make a test to assert that turns is a prop?
  it.skip('should be able to store incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  //returnCurrentCard() method
    // returns current card being played (turn.currentCard)
    it.skip('should be able to return current card', function() {
      deck.returnCurrentCard()
      expect(round.returnCurrentCard()).to.deep.equal(deck.stack[0]);
    })
//takeTurn() method:
    it.skip('should be able to update turn count', function() {
      //const turn = new Turn('pug', card1);
      round.takeTurn('pug');
      expect(round.turnCount).to.equal(1);
    })

    it.skip('should be able to track and store incorrect answers', function() {
      //const turn = new Turn('pug', card1);
      round.takeTurn('sea otter');
      //instantiates new turn
      //evaluates guesses
        //calls turn.evaluateGuess method
      //pushes incorrect answer card id into incorrect guesses array
        //this.incorrectGuesses.push(this.currentCard.id)
      //next card becomes current card
        //this.currentCard = this.deck[this.deck.indexOf(this.currentCard)++]
      //returns feedback

      expect(round.incorrectGuesses[0]).to.equal(1);
    })
 // calculatePercentCorrect()
    // calculates and returns the percentage of correct guesses
    it.skip('should be able to calculate the percentage of correct guesses', function() {

      // //call take turn here
      //reference data here to calculate the percent correct
      deck.calculatePercentCorrect()

      expect(round.calculatePercentCorrect()).to.deep.equal();
    })

 // endRound()
    // prints to console:  ‘** Round over! ** You answered
      // <>% of the questions correctly!’

//NOTES:
// instantiates Turn w/ first index of deck.stack as currentCard argument
// updates turns count,
// the next card in the deck.stack becomes the current card
  // reassign the Turn.currentCard to be next in the array
// evaluates guesses (turn.evaluateGuess())
// gives feedback (turn.giveFeedback())
// stores ids of incorrect guesses

//assert that currentCard is first card in deck.stack
//later in the test? after takeTurn?

}
