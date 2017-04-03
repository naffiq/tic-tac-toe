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

  static isDraw(field) {
    return GameRules.hasWinner(field) === 0 && field.filter((row) => {
      return row.filter((col) => col === 0).length > 0;
    }).length === 0;
  }

  static checkWinner(field, player, winLength = 3) {
    let winSum = player * winLength;
    let diagonal45Sum = 0;
    let diagonal315Sum = 0;

    for (let i = 0; i < field.length; i++) {
      diagonal45Sum += field[field.length - i - 1][i];
      diagonal315Sum += field[i][i];
      let rowSum = 0;
      let colSum = 0;

      for (let j = 0; j < field.length; j++) {
        rowSum += field[i][j];
        colSum += field[j][i];
      }

      if (rowSum === winSum || colSum === winSum) {
        return true;
      }
    }

    return diagonal45Sum === winSum || diagonal315Sum === winSum;
  }
}

export default GameRules;