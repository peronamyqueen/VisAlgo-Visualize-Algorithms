import { useContext } from "react";
import { Context } from "../contexts/Context";
import { getBarStyle } from "../functions/BarsStyling";
const AlgoBars = () => {
  const context = useContext(Context);
  if (!context) return null;
  const { state } = context;
  const currentStep = state.currentStep;
  const array = currentStep.array;
  return (
    <div className="flex flex-row w-[100vh] h-[40vh] items-end gap-2 overflow-x-auto">
      {array.map((el, id) => {
        return (
          <div
            key={id}
            className={` w-8 rounded-t-md flex flex-1 items-end justify-center transition-all duration-200 `}
            style={getBarStyle(state, id)}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default AlgoBars;
