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
    // data = [{"id": 1, "question": 'What is Robbie\'s favorite animal',
    //   "answers": ['sea otter', 'pug', 'capybara'], "correctAnswer": 'sea otter'},
    //   {"id": 14, "question": 'What organ is Khalid missing?',
    //     "answers": ['spleen', 'appendix', 'gallbladder'], "correctAnswer": 'gallbladder'}, {"id": 12, "question": 'What is Travis\'s middle name?',
    //       "answers": ['Lex', 'William', 'Fitzgerald'], "correctAnswer": 'Fitzgerald'}]

    card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);
    //round = new Round(deck);
    game = new Game();
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  })

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  })

  //should keep track of the curentRound
  it('should monitor current round', function() {
    expect(game.currentRound).to.be.a('object');
  })

  //should keep track of the curentRound
  //FIX THIS SHIT
  it.skip('should create Cards', function() {
    game.start();

    expect(game.start()).to.deep.equal([card1, card2, card3]);
  })
  // may have to edit this function to be more like the function at the top
  // it('should instantiate a Deck using Cards', function() {
  //   game.start();
  //
  //   expect(game.deck).to.be.an.instanceof(Deck);
  // })

  //is there a way to call this through the start function?
  // it('should store an instance of Deck', function() {
  //
  //   expect(game.deck).to.be.an.instanceof(Deck);
  // })
  it('should store an instance of Deck', function() {

    expect(game.deck).to.be.a('object');
  })

})
