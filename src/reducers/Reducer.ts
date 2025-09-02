import { generateRandomValues } from "../functions/generateRandomValues.ts";
import type { Step } from "../types/types";
export type State = {
  speed: number;
  size: number;
  sortingType: string;
  pressed: boolean;
  isPaused: boolean;
  steps: Step[];
  currentStep: Step;
  currentStepIndex: number;
};
export type Action =
  | { type: "setSpeed"; payload: number }
  | { type: "setSize"; payload: number }
  | { type: "setSortingType"; payload: string }
  | { type: "setPressed"; payload: boolean }
  | { type: "setIsPaused"; payload: boolean }
  | { type: "setSteps"; payload: Step[] }
  | { type: "resetSteps" }
  | { type: "setCurrentStep"; payload: Step }
  | { type: "setCurrentStepIndex"; payload: number }
  | { type: "stepForward" }
  | { type: "stepBackward" };

export function Dispatcher(state: State, action: Action): State {
  switch (action.type) {
    case "setSpeed":
      return { ...state, speed: action.payload };
    case "setSize":
      return { ...state, size: action.payload };
    case "setSortingType":
      return { ...state, sortingType: action.payload };
    case "setPressed":
      return { ...state, pressed: action.payload };
    case "setIsPaused":
      return { ...state, isPaused: action.payload };
    case "setSteps":
      return { ...state, steps: action.payload };
    case "resetSteps":
      const newSteps = [{ array: generateRandomValues(state.size) }];
      return {
        ...state,
        steps: newSteps,
        currentStep: newSteps[0],
        currentStepIndex: 0,
      };
    case "setCurrentStep":
      return { ...state, currentStep: action.payload };
    case "setCurrentStepIndex":
      return { ...state, currentStepIndex: action.payload };
    case "stepForward":
      if (state.currentStepIndex + 1 <= state.steps.length - 1) {
        const nextIndex = state.currentStepIndex + 1;
        return {
          ...state,
          currentStep: state.steps[nextIndex],
          currentStepIndex: nextIndex,
        };
      }
      return state;
    case "stepBackward":
      if (state.currentStepIndex - 1 >= 0) {
        const prevIndex = state.currentStepIndex - 1;
        return {
          ...state,
          currentStep: state.steps[prevIndex],
          currentStepIndex: prevIndex,
        };
      }
      return state;
    default:
      return state;
  }
}
