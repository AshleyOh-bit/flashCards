const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card, card1, turn, turn1;

    beforeEach(function() {
      card = new Card((11, 'Which operator checks if two or more conditions evaluate to truthy?', ['||', '>=', '&&'], '&&'));
      card1 = new Card(11, 'Which operator checks if two or more conditions evaluate to truthy?', ['||', '>=', '&&'], '&&');
      turn1 = new Turn('&&', card1);
      turn = new Turn('>=', card);

  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should store a user\'s guess', function() {
    expect(turn.userGuess).to.equal('>=');

  })

  it('should store the current card in play', function() {
    expect(card).to.be.an.instanceof(Card);
    expect(turn.currentCard).to.deep.equal(card);
  })

  it('should return the user\'s guess', function() {
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('>=');

  })

  it('should return the current card', function() {
    turn.returnCard();
    expect(turn.returnCard()).to.equal(card)
  })


  it('should evaluate the user\'s incorrect guess against the correct answer', function() {
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should evaluate the user\'s correct guess against the correct answer', function() {
    turn1.evaluateGuess();
    expect(turn1.evaluateGuess()).to.equal(true)
  })


  it('should give the user feedback based on their accuracy of their guess', function() {

    turn.evaluateGuess();
    turn.giveFeedback();

    turn1.evaluateGuess();
    turn1.giveFeedback();

    expect(turn.evaluateGuess()).to.equal(false)
    expect(turn.giveFeedback()).to.equal('incorrect!')

    expect(turn1.evaluateGuess()).to.equal(true)
    expect(turn1.giveFeedback()).to.equal('correct!')
  })

})
