import { stateList } from "./stateList.js";

export const USMap = () => {
  return (
    <svg viewBox="0 0 1386 822" id="us-map">
      {stateList.map((state) => {
        return state.component;
      })}
    </svg>
  );
};
