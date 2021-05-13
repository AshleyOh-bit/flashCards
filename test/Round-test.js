const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
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

  it('should be an instance of Deck', function() {
    expect(round).to.be.an.instanceof(Round);
  })

  it('should store a deck of cards', function() {
    expect(round.deck).to.deep.equal(deck);
  })

  it('should be able to store incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should be able to store correct guesses', function() {
    expect(round.correctGuesses).to.deep.equal([])
  })

  it('should be able to return current card', function() {
    round.returnCurrentCard()
    expect(round.returnCurrentCard()).to.deep.equal(round.currentCard);
  })

  it('should be able to update turn count', function() {
    round.takeTurn('pug');
    expect(round.turnCount).to.equal(1);
  })

  it('should be able to store card ids of incorrect answers', function() {
    round.takeTurn('capybara');
    expect(round.incorrectGuesses[0]).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(1);
  })

  it('should be able to store card ids of correct answers', function() {
    round.takeTurn('sea otter');
    expect(round.correctGuesses[0]).to.equal(1);
    expect(round.correctGuesses.length).to.equal(1);
  })

  it('should instantiate a new Turn', function() {
    round.takeTurn('capybara');
    expect(Turn).to.exist;
  })

  it('should be able to update current card', function() {
    round.takeTurn('capybara');
    expect(round.currentCard).to.equal(round.deck.stack[1]);
  })

  it('should calculate the percentage of correct guesses', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');

    round.calculatePercentCorrect()

    expect(round.calculatePercentCorrect()).to.equal(50);
  })

  it('should be able to announce end of round', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');

    round.calculatePercentCorrect()
    round.endRound()

    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  })

})
