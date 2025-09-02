import { bubbleSort } from "./bubbleSort.ts";
import { selectionSort } from "./selectionSort.ts";
import { quickSortInit } from "./quickSort.ts";
import type { Step } from "../types/types";
import type { State, Action } from "../reducers/Reducer";
import {
  getCurrentSpeed,
  getIsPausedState,
  getCurrentStepIndex,
} from "./playbackPreferences.ts";

export const handleSort = async (
  state: State,
  dispatch: React.Dispatch<Action>,
) => {
  const sortingType = state.sortingType;
  if (!state.pressed) {
    dispatch({ type: "setPressed", payload: true });
    let sortingSteps;
    switch (sortingType) {
      case "bubble":
        sortingSteps = await bubbleSort(state.steps[0].array);
        dispatch({ type: "setSteps", payload: sortingSteps });
        playSteps(sortingSteps, dispatch);
        break;
      case "quick":
        sortingSteps = await quickSortInit(state.steps[0].array);
        dispatch({ type: "setSteps", payload: sortingSteps });
        playSteps(sortingSteps, dispatch);
        break;
      case "selection":
        sortingSteps = await selectionSort(state.steps[0].array);
        dispatch({ type: "setSteps", payload: sortingSteps });
        playSteps(sortingSteps, dispatch);
        break;
    }
  }
};

const playSteps = async (steps: Step[], dispatch: React.Dispatch<Action>) => {
  let i = 0; //new state for tracking steps
  while (i < steps.length) {
    if (getIsPausedState()) {
      i = getCurrentStepIndex();
      await new Promise((res) => setTimeout(res, 200));
      continue;
    }
    dispatch({ type: "setCurrentStep", payload: steps[i] });
    dispatch({ type: "setCurrentStepIndex", payload: i });
    i++;
    await new Promise((res) => setTimeout(res, getCurrentSpeed()));
  }
  dispatch({ type: "setPressed", payload: false });
};
