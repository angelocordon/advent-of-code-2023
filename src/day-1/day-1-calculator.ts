type ElfMap = {
  [key: number]: number;
};

const generateElfMap = (data: string[]): ElfMap => {
  let index = 0;

  return data.reduce((map: ElfMap, item: string) => {
    if (item === '') {
      map[index] = 0;
      index++;
    }

    if (item.length > 0) {
      map[index - 1] = map[index - 1] + Number(item);
    }

    return map;
  }, {});
};

const sortedCaloriesPerElf = (elfMap: ElfMap, endSlice = 1): number[] => {
  return Object.values(elfMap)
    .sort((a, b) => b - a)
    .slice(0, endSlice);
};

export const calculateCaloriesBetweenTopElves = (
  data: string,
  topNumber = 1
): number => {
  const map = generateElfMap(data.split('\n'));

  return sortedCaloriesPerElf(map, topNumber).reduce((a, b) => a + b, 0);
};
