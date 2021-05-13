const Turn = require('../src/Turn');

class Round {
  constructor(theDeck) {
    this.deck = theDeck;
    this.currentCard = theDeck.stack[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    turn.evaluateGuess();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    } else {
      this.correctGuesses.push(this.currentCard.id)
    }
    this.turnCount++;
    this.currentCard = this.deck.stack[this.turnCount]
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor((this.correctGuesses.length / this.turnCount) * 100)
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

}

module.exports = Round
