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

//Do I need to make it more explicit that I'm passing in an object as a parameter?
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
      round.takeTurn('pug');
      expect(round.turnCount).to.equal(1);
    })

    it.skip('should be able to track and store incorrect answers', function() {
      round.takeTurn('sea otter');
      expect(round.incorrectGuesses[0]).to.equal(1);
    })

    it.skip('should be able to give feedback', function() {
      //const turn = new Turn('pug', card1);
      round.takeTurn('capybara');
      expect(round.takeTurn()).to.equal('correct!');
    })

    it.skip('should be able to update current card', function() {
      //const turn = new Turn('pug', card1);
      round.takeTurn('capybara');
      //instantiates new turn
      expect(round.currentCard).to.equal(this.deck[1]);
    })

    //how TF do i do this lol
    // it.skip('should be able to instantiate a new Turn', function() {
    //   //const turn = new Turn('pug', card1);
    //   round.takeTurn('capybara');
    //   //instantiates new turn
    //   expect().to.equal();
    // })

 // calculatePercentCorrect()
    it.skip('should be able to calculate the percentage of correct guesses', function() {
      round.takeTurn('pug');
      round.takeTurn('capybara');

      round.calculatePercentCorrect()

      expect(round.calculatePercentCorrect()).to.deep.equal(50);
    })

 // endRound()
    it.skip('should be able to announce end of round', function() {
      round.takeTurn('pug');
      round.takeTurn('capybara');

      round.calculatePercentCorrect()
      round.endRound()

      expect(round.endRound()).to.deep.equal(' ‘** Round over! ** You answered 50% of the questions correctly!’');
    })

}
