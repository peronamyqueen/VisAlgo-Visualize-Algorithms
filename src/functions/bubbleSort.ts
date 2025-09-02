import type { Step } from "../types/types";
export const bubbleSort = async (sample: number[]): Promise<Step[]> => {
    const steps: Step[] = [];
    let arr = [...sample];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            steps.push({ array: [...arr], comparing: [j - 1, j] });
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                steps.push({ array: [...arr], swapping: [j - 1, j] });
            }
        }
    }
    return steps;
};
