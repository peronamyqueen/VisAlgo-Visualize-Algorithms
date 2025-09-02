import { useContext } from "react";
import { handleSort } from "../../functions/handleSort.ts";
import { Context } from "../../contexts/Context";
const PlayerControls = () => {
  const context = useContext(Context);
  if (!context) return null;
  const { state, dispatch } = context;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-3">
        <button
          className="btn btn-secondary"
          disabled={
            !state.pressed || !state.isPaused || state.currentStepIndex === 0
          }
          onClick={() => dispatch({ type: "stepBackward" })}
        >
          {"<"}
        </button>
        <button
          className={`btn ${state.isPaused ? "bg-blue-700" : "bg-amber-400"}`}
          onClick={() =>
            dispatch({ type: "setIsPaused", payload: !state.isPaused })
          }
          disabled={!state.pressed}
        >
          {state.isPaused ? "Resume" : "Pause"}
        </button>
        <button
          className="btn btn-secondary"
          disabled={
            !state.pressed ||
            !state.isPaused ||
            state.currentStepIndex === state.steps.length - 1
          }
          onClick={() => dispatch({ type: "stepForward" })}
        >
          {">"}
        </button>
      </div>
      <button className="btn" onClick={() => handleSort(state, dispatch)}>
        Sort!
      </button>
    </div>
  );
};

export default PlayerControls;
