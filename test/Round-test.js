const chai = require('chai');
const expect = chai.expect;

//const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  })

  //Do I need to make it more explicit that it's an object as a parameter?
  it('should be an instance of Deck', function() {
    expect(round).to.be.an.instanceof(Round);
  })

  it('should store a deck of cards', function() {
    expect(round.deck).to.deep.equal(deck.stack);
  })

  //is this one really necessary?
  //Should we make a test to assert that turns is a prop?
  it('should be able to store incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  //returnCurrentCard()
  it('should be able to return current card', function() {
    round.returnCurrentCard()
    expect(round.returnCurrentCard()).to.deep.equal(deck.stack[0]);
  })

  //takeTurn() method:
  it('should be able to update turn count', function() {
    round.takeTurn('pug');
    expect(round.turnCount).to.equal(1);
  })

  it('should be able to store card ids of incorrect answers', function() {
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses[0]).to.deep.equal(1);
  })

  //Perhaps add a happy path to test here? Combine with above test?
  it.skip('should be able to evaluate guess and give feedback', function() {
    round.takeTurn('pug');
    expect(round.takeTurn()).to.equal('incorrect!');
  })

  it.skip('should be able to update current card', function() {
    round.takeTurn('capybara');
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
  it.skip('should calculate the percentage of correct guesses', function() {
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

    expect(round.endRound()).to.deep.equal('** Round over! ** You answered 50% of the questions correctly!');
  })

})
