import calculateTotalScore, {
  calculateRoundScore,
  parseData,
  parsePlay,
} from './score-calculator';

describe('Score Calculator', () => {
  describe('#parseData', () => {
    it('returns the round of play as a formatted array', () => {
      const input = `
        A Y
        B X 
        C Z
      `;

      expect(parseData(input)).toMatchObject([
        ['A', 'Y'],
        ['B', 'X'],
        ['C', 'Z'],
      ]);
    });
  });

  describe('#parsePlay', () => {
    describe('when the play is not valid', () => {
      it('throws an error', () => {
        // Wrapping `parsePlay` in a function allows for Jest
        // to catch the error correctly.
        expect(() => {
          parsePlay('F');
        }).toThrow('No matching play');
      });
    });

    describe('when the play is `A` or `X`', () => {
      it('returns 1', () => {
        ['A', 'X'].forEach((play) => {
          expect(parsePlay(play)).toEqual(1);
        });
      });
    });

    describe('when the play is `B` or `Y`', () => {
      it('returns 2', () => {
        ['B', 'Y'].forEach((play) => {
          expect(parsePlay(play)).toEqual(2);
        });
      });
    });

    describe('when the play is `C` or `Z`', () => {
      it('returns 3', () => {
        ['C', 'Z'].forEach((play) => {
          expect(parsePlay(play)).toEqual(3);
        });
      });
    });
  });

  describe('#calculateRoundScore', () => {
    describe('when the round is lost', () => {
      it('only returns the value of their play', () => {
        expect(calculateRoundScore(['B', 'X'])).toEqual(1);
      });
    });

    describe('when the round is a draw', () => {
      it('returns the value of the play plus 3', () => {
        expect(calculateRoundScore(['C', 'Z'])).toEqual(6);
      });
    });

    describe('when the round is a win', () => {
      it('returns the value of the play plus 6', () => {
        expect(calculateRoundScore(['A', 'Y'])).toEqual(8);
      });
    });
  });

  describe('calculateTotalScore', () => {
    it('should calculate the whole score for the whole input', () => {
      const input = `
        A Y
        B X 
        C Z
      `;

      expect(calculateTotalScore(input)).toEqual(15);
    });
  });
});
