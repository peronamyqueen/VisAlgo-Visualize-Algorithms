import type { Step } from "../types/types";
export const quickSortInit = async (sample: number[]): Promise<Step[]> => {
  const steps: Step[] = [];
  const arr = [...sample];
  const partition = (low: number, high: number) => {
    const pivot = arr[high];
    let i = low - 1;
    steps.push({
      array: [...arr],
      pivot: high,
      rightPointer: low,
    });
    for (let j = low; j < high; j++) {
      steps.push({ array: [...arr], comparing: [j, high], leftPointer: i });
      if (arr[j] < pivot) {
        i++;
        steps.push({
          array: [...arr],
          pivot: high,
          leftPointer: i,
          rightPointer: j,
        });
        if (j !== i) {
          steps.push({ array: [...arr], swapping: [i, j], pivot: high });
          [arr[i], arr[j]] = [arr[j], arr[i]];
          steps.push({
            array: [...arr],
            pivot: high,
            leftPointer: i,
            rightPointer: j,
          });
        }
      }
    }
    if (i + 1 !== high) {
      steps.push({ array: [...arr], pivot: high, leftPointer: i + 1 });
      steps.push({ array: [...arr], swapping: [i + 1, high] });
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      steps.push({ array: [...arr], pivot: high });
    }
    return i + 1;
  };
  const quickSort = (low: number, high: number) => {
    if (low < high) {
      const pi = partition(low, high);
      quickSort(low, pi - 1);
      quickSort(pi + 1, high);
    }
  };
  quickSort(0, arr.length - 1);
  return steps;
};
