import { createContext, useEffect, useReducer, type ReactNode } from "react";
import { Dispatcher, type Action, type State } from "../reducers/Reducer";
import {
  updateCurrentSpeed,
  updateCurrentStepIndex,
  updateIsPausedState,
} from "../functions/playbackPreferences.ts";

type ContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const Context = createContext<ContextProps | undefined>(undefined);
export const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Dispatcher, {
    speed: 2050,
    size: 10,
    sortingType: "bubble",
    pressed: false,
    isPaused: false,
    steps: [{ array: [] }],
    currentStep: { array: [] },
    currentStepIndex: 0,
  });
  useEffect(() => {
    dispatch({ type: "resetSteps" });
  }, [state.size, state.sortingType]);
  useEffect(() => {
    updateCurrentSpeed(state.speed);
  }, [state.speed]);
  useEffect(() => {
    updateIsPausedState(state.isPaused);
  }, [state.isPaused]);
  useEffect(() => {
    updateCurrentStepIndex(state.currentStepIndex);
  }, [state.currentStepIndex]);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
