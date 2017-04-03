import GameRules from './GameRules';

describe('GameRules', () => {
  describe('Winning horizontally', () => {
    it('Player 1 wins horizontal', () => {
      expect(GameRules.hasWinner([
        [ 1,  1,  1],
        [ 0, -1, -1],
        [-1,  1,  1],
      ])).toEqual(1);
    });

    it('Player 2 wins horizontal', () => {
      expect(GameRules.hasWinner([
        [ 1,  0, -1],
        [-1, -1, -1],
        [ 1, -1,  1]
      ])).toEqual(-1);
    });
  });

  describe('Winning vertically', () => {
    it('Player 1 wins vertical', () => {
      expect(GameRules.hasWinner([
        [ 1,  0, -1],
        [ 1, -1,  1],
        [ 1, -1,  1]
      ])).toEqual(1);
    });

    it('Player 2 wins vertical', () => {
      expect(GameRules.hasWinner([
        [ 1,  0, -1],
        [-1,  1, -1],
        [ 1, -1, -1]
      ])).toEqual(-1);
    });
  });

  describe('Winning diagonally (45 degrees', () => {

    it('Player 1 wins diagonal (45 degrees)', () => {
      expect(GameRules.hasWinner([
        [-1,  0,  1],
        [ 1,  1, -1],
        [ 1, -1,  1]
      ])).toEqual(1);
    });

    it('Player 2 wins diagonal (45 degrees)', () => {
      expect(GameRules.hasWinner([
        [ 1,  0, -1],
        [ 1, -1, -1],
        [-1, -1,  1]
      ])).toEqual(-1);
    });

  });

  describe('Winning diagonally (315 degrees', () => {
    it('Player 1 wins diagonal (315 degrees)', () => {
      expect(GameRules.hasWinner([
        [ 1,  0, -1],
        [ 1,  1, -1],
        [-1, -1,  1]
      ])).toEqual(1);
    });

    it('Player 2 wins diagonal (315 degrees)', () => {
      expect(GameRules.hasWinner([
        [-1,  0,  1],
        [ 1, -1,  1],
        [ 1, -1, -1]
      ])).toEqual(-1);
    });
  });

  describe('No winners', () => {
    it ('There is no winner and no draw', () => {
      let field = [
        [ 1,  0,  0],
        [ 0, -1, -1],
        [ 0,  0,  0]
      ];
      expect(GameRules.hasWinner(field)).toEqual(0);
      expect(GameRules.isDraw(field)).toEqual(false);
    });

    it ('There is no winner and is draw', () => {
      let field = [
        [-1,  1, -1],
        [ 1,  1, -1],
        [ 1, -1,  1]
      ];
      expect(GameRules.hasWinner(field)).toEqual(0);
      expect(GameRules.isDraw(field)).toEqual(true);
    });
  });
});
