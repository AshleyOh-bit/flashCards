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
    round.takeTurn('capybara');
    //console.log(round.incorrectGuesses)
    expect(round.incorrectGuesses[0]).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([1]);
    expect(round.incorrectGuesses.length).to.equal(1);
  })

  //Perhaps add a happy path to test here? Combine with above test?
  // it.skip('should evaluate guess and give constructive feedback', function() {
  //   round.takeTurn('pug');
  //   //console.log(round.takeTurn())
  //   expect(round.takeTurn()).to.equal('incorrect!');
  // })

  // it.skip('should evaluate guess and give praising feedback', function() {
  //   round.takeTurn('sea otter');
  //   //console.log(round.takeTurn())
  //
  //   //console.log(round.currentCard)
  //   expect(round.takeTurn()).to.equal('correct!');
  // })

  //how do i do this This seems sus
  it('should instantiate a new Turn', function() {
    //const turn = new Turn('pug', card1);
    round.takeTurn('capybara');
    //console.log(Turn)
    expect(Turn).to.exist;
  })

  it('should be able to update current card', function() {
    round.takeTurn('capybara');

    expect(round.currentCard).to.equal(round.deck[1]);
  })

  // calculatePercentCorrect()
  it('should calculate the percentage of correct guesses', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');

    round.calculatePercentCorrect()

    expect(round.calculatePercentCorrect()).to.equal(50);
  })

  // endRound()
  it('should be able to announce end of round', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');

    round.calculatePercentCorrect()
    round.endRound()

    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  })

})
