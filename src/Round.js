const Turn = require('../src/Turn');

class Round {
  constructor(theDeck) {
    this.deck = theDeck.stack;

    //this.incorrectGuessIds = [];
    //is this right?
    this.currentCard = theDeck.stack[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    //instantiate turn
    //how tf am i checking if these two pieces of data are related?
    let turn = new Turn(guess, this.currentCard);
    this.turnCount++;
    //console.log(this.currentCard)
    //this.currentCard = this.deck[this.turnCount]
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
      //console.log(this.currentCard)
      // console.log(this.incorrectGuesses[0])
      turn.giveFeedback();
    } else {
      //console.log(turn.evaluateGuess())
      //console.log(turn.giveFeedback())
      this.correctGuesses.push(this.currentCard.id)
      turn.giveFeedback();
    }
    return this.currentCard = this.deck[this.turnCount]
  }

  calculatePercentCorrect() {
    // console.log(this.correctGuesses)
    // console.log(this.turnCount)
    //double check this math
    return (this.correctGuesses.length / this.turnCount) * 100
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
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
