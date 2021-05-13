class Turn {
  constructor(userAnswer, cardInPlay) {
    this.userGuess = userAnswer;
    this.currentCard = cardInPlay;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if (this.currentCard.correctAnswer === this.userGuess) {
      return true
    } else {
      return false
    }
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }

}

module.exports = Turn
