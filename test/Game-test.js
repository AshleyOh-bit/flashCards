const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  })

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  })

  it('should monitor current round', function() {
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  })

  it('should contain an instance of Deck', function() {
    game.start();
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
  })

  it('should store an array of Cards', function() {
    game.start();
    expect(game.currentRound.deck.stack[0]).to.an.instanceof(Card);
    expect(game.currentRound.deck.stack[1]).to.an.instanceof(Card);
    expect(game.currentRound.deck.stack[2]).to.an.instanceof(Card);
  })

})
