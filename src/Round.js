const Turn = require('../src/Turn');

class Round {
  constructor(theDeck) {
    this.deck = theDeck;

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
    //this.currentCard = this.deck.stack[this.turnCount]
    this.turnCount++;
    this.currentCard = this.deck.stack[this.turnCount]
    //console.log(this.currentCard)
    //this.currentCard = this.deck[this.turnCount]
    turn.evaluateGuess();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
      //console.log(this.currentCard)
      // console.log(this.incorrectGuesses[0])
      //return turn.giveFeedback();
      //console.log(turn.giveFeedback())
    } else {
      //console.log(turn.evaluateGuess())
      //console.log(turn.giveFeedback())
      this.correctGuesses.push(this.currentCard.id)
      //console.log(turn.giveFeedback())
      //return turn.giveFeedback();
    }
    // this.currentCard = this.deck.stack[this.turnCount]
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    // console.log(this.correctGuesses)
    // console.log(this.turnCount)
    //double check this math
    return Math.floor((this.correctGuesses.length / this.turnCount) * 100)
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

}

module.exports = Round
