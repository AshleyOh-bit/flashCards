const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  let card1, card2, card3, deck, round, game, data;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
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
  })

})
