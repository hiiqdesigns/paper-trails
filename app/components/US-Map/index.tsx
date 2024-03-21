"use client";
import { stateList } from "./stateList.js";

export const USMap = () => {
  return (
    <svg viewBox="0 0 1386 822" id="us-map">
      {stateList.map((state) => {
        return (
          <g
            key={`${state.id}-${state.name}`}
            onClick={() => alert(state.name)}
            className="fill-slate-200 stroke-black stroke-[0.125px] hover:fill-slate-400"
          >
            {state.component()}
          </g>
        );
      })}
    </svg>
  );
};
