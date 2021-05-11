class Deck {
  constructor(cards) {
    this.stack = cards;
  }

  countCards() {
    const deckCount = this.stack.length;
    return deckCount
  }
}

module.exports = Deck
