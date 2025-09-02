import React, { useContext, useRef } from "react";
import Range from "./ui/Range";
import { Context } from "../contexts/Context";

const SpecsBox = () => {
  const context = useContext(Context);
  if (!context) return null;
  const { state, dispatch } = context;

  const inputRef = useRef<HTMLInputElement>(null);
  const changeSize = (e: React.FormEvent) => {
    e.preventDefault(); // отключаем перезагрузку страницы
    if (!state.pressed) {
      if (inputRef.current) {
        const newSize = Number(inputRef.current.value);
        if (newSize === state.size) {
          dispatch({ type: "resetSteps" });
          return;
        }
        if (newSize >= 2 && newSize <= 500) {
          dispatch({ type: "setSize", payload: newSize });
        } else {
          alert("Enter a value between 2 and 50");
        }
      }
    }
  };

  return (
    <div className="flex flex-col text-center gap-3">
      <h1>{state.sortingType.toUpperCase() + " SORT"}</h1>
      <div className="flex gap-1 items-start justify-center">
        <h2>N = </h2>
        <form onSubmit={changeSize} className="flex flex-row gap-1">
          <div>
            <input
              type="number"
              ref={inputRef} // подключаем ref
              className="input input-xs validator text-center"
              min={2}
              max={500}
            />
            <p className="my-0 validator-hint">Enter a value between 2 to 50</p>
          </div>
          <input
            type="submit"
            className="btn btn-xs btn-primary"
            value="Set Size"
          />
        </form>
      </div>
      <Range />
    </div>
  );
};

export default SpecsBox;
