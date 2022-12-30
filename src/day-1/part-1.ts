import input from './inputs/input-1';

type ElfMap = {
  [key: string]: number[];
};

type InputData = string[];

const inputData = input.split('\n');

const getTotalCalories = (arr: number[]): number => {
  return arr.reduce((a, b) => a + b, 0);
};

const calculateElfWithMostCalories = (data: InputData): number => {
  let elf = 0;
  let largestCalories = 0;

  data.reduce((elfMap: ElfMap, item: string) => {
    const previousElf = elfMap[elf - 1];

    if (item === '') {
      if (previousElf?.length > 0) {
        const elfCalories = getTotalCalories(previousElf);

        if (elfCalories > largestCalories) {
          largestCalories = elfCalories;
        }
      }

      elfMap[elf] = [];
      elf++;
    }

    if (item.length > 0) {
      previousElf.push(Number(item));
    }

    return elfMap;
  }, {});

  return largestCalories;
};

console.log(calculateElfWithMostCalories(inputData));
