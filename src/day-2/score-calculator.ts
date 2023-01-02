import { parseInput } from '../utils/parse-input';
/*
  A: Rock - 1
  B: Paper - 2
  C: Scissor - 3
  X: Rock - 1
  Y: Paper - 2
  Z: Scissor - 3

  Lost: 0
  Draw: 3
  Win: 6

  if (a > b) { lose }
  if (a === b) { draw }
  if (a < b) { win }
*/

const parsePlay = (play: string): number => {
  switch (play) {
    case 'A':
    case 'X':
      return 1;
    case 'B':
    case 'Y':
      return 2;
    case 'C':
    case 'Z':
      return 3;
    default:
      throw new Error('No matching play');
  }
};

const calculateRoundScore = (play: string[]): number => {
  // `b` being second column of input
  const [a, b] = play.map((p) => parsePlay(p));

  if (a > b) {
    return b;
  }

  if (a === b) {
    return 3 + b;
  }

  return b + 6;
};

// returns [ [C, Z], [A, Y], ... ]
const parseData = (input: string) => {
  return parseInput(input).map((item) => item.split(' '));
};

export const calculateTotalScore = (input: string): number => {
  return parseData(input).reduce((totalScore, inputData) => {
    return totalScore + calculateRoundScore(inputData);
  }, 0);
};
