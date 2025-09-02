import type { State } from "../reducers/Reducer";

export const getBarStyle = (state: State, id: number) => {
    const steps = state.steps;
    const currentStep = state.currentStep;
    const array = currentStep.array;

    const maxValue = Math.max(...steps[0].array, 1);
    const swapping = currentStep.swapping;
    const comparing = currentStep.comparing;
    const pivot = currentStep.pivot;
    const leftPointer = currentStep.leftPointer;
    const rigthPointer = currentStep.rightPointer;

    const heightPercent = (array[id] / maxValue) * 99;
    const isComparing =
        comparing !== undefined && (id === comparing[0] || id === comparing[1]);
    const isSwapping =
        swapping !== undefined && (id === swapping[0] || id === swapping[1]);
    const isPivot = id === pivot;
    const isLeftPointer = id === leftPointer;
    const isRightPointer = id === rigthPointer;
    const isCollided = isRightPointer && isLeftPointer;

    let backgroundColor = "#2D03FF";
    if (isPivot) {
        backgroundColor = "#FFDD00";
    } else if (isComparing) {
        backgroundColor = "#E3170A";
    } else if (isSwapping) {
        backgroundColor = "#13CC4A";
    } else if (isLeftPointer) {
        backgroundColor = "#FF9500";
    } else if (isRightPointer) {
        backgroundColor = "#7F4A00";
    }
    const style: React.CSSProperties = {
        height: `${heightPercent}%`,
        backgroundColor,
        border: isCollided ? "2px solid #7F4A00" : "none",
        boxShadow: isSwapping ? "0 0 5px #13CC4A" : "none",
        position: "relative" as const,
    };
    return style;
};
