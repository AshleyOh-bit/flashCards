const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let card1, card2, card3, deck;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  })

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  })

  it('should store a collection of cards', function() {
    expect(deck.stack).to.deep.equal([card1, card2, card3]);
  })

  it('should be able to count the cards in its deck', function() {
    deck.countCards();
    expect(deck.countCards()).to.equal(3);
  })

})
