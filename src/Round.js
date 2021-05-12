const Turn = require('../src/Turn');

class Round {
  constructor(theDeck) {
    this.deck = theDeck.stack;

    this.incorrectGuesses = [];
    //is this right?
    this.currentCard = theDeck.stack[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }


}

module.exports = Round

//NOTES

// maybe add a current turn variable
// maybe add
//takeTurn():
//pushes incorrect answer card id into incorrect guesses array
  //this.incorrectGuesses.push(this.currentCard.id)

  //evaluates guesses
    //calls turn.giveFeedback method
    //next card becomes current card
    // this.currentCard = this.deck[this.deck.indexOf(this.currentCard)++]

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
