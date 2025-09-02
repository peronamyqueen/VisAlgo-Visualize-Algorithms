import { useContext } from "react";
import { Context } from "../../contexts/Context";

const Range = () => {
  const context = useContext(Context);
  if (!context) return null;
  const { state, dispatch } = context;
  const max = 2050;
  const min = 50;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inverted = max - (Number(e.target.value) - min);
    dispatch({ type: "setSpeed", payload: inverted });
  };
  return (
    <div className="w-full max-w-xs">
      <h2>Speed ({state.speed}ms)</h2>
      <input
        type="range"
        className="range range-xs range-accent"
        value={max - (state.speed - min)}
        min={min}
        max={max}
        step={400}
        onChange={handleChange}
      />
    </div>
  );
};

export default Range;
