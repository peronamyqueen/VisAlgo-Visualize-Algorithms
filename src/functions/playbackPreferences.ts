let currentSpeed = { value: 2050 };
let isPaused = { value: false };
let currentStepIndex = { value: 0 };
export const getCurrentSpeed = () => {
    return currentSpeed.value;
};
export const updateCurrentSpeed = (speed: number) => {
    currentSpeed.value = speed;
};
export const getIsPausedState = () => {
    return isPaused.value;
};
export const updateIsPausedState = (pausedState: boolean) => {
    isPaused.value = pausedState;
};
export const getCurrentStepIndex = () => {
    return currentStepIndex.value;
};
export const updateCurrentStepIndex = (index: number) => {
    currentStepIndex.value = index;
};
