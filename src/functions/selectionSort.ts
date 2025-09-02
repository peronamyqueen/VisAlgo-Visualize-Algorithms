import type { Step } from "../types/types";

export const selectionSort = async (sample: number[]): Promise<Step[]> => {
    const steps: Step[] = [];
    let arr = [...sample];
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let minIndex = i;
        steps.push({ array: [...arr], leftPointer: i });
        for (let j = i + 1; j < arr.length; j++) {
            steps.push({
                array: [...arr],
                leftPointer: i,
                rightPointer: j,
                pivot: minIndex,
            });
            steps.push({
                array: [...arr],
                leftPointer: i,
                comparing: [minIndex, j],
            });
            if (min > arr[j]) {
                min = arr[j];
                minIndex = j;
            }
        }
        steps.push({ array: [...arr], swapping: [i, minIndex] });
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        steps.push({ array: [...arr] });
    }
    return steps;
};
