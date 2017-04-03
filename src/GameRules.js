class GameRules {
  static hasWinner(field) {
    if (GameRules.checkWinner(field, 1)) {
      return 1;
    }

    if (GameRules.checkWinner(field, -1)) {
      return -1;
    }

    return 0;
  }

  static checkWinner(field, player) {
    field.find((el, i) => {

    });
  }
}

export default GameRules;