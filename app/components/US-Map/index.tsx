"use client";
import classNames from "classnames";
import { useRouter } from "next/navigation.js";
import { stateList } from "./stateList.js";

export const USMap = () => {
  const router = useRouter();

  return (
    <svg viewBox="0 0 1386 822" id="us-map">
      {stateList.map((state) => {
        const hoverColor = classNames({
          "hover:fill-[#D00037]": state.stateControl == "Rep",
          "hover:fill-[#0048A0]": state.stateControl == "Dem",
          "hover:fill-[#68246C]": state.stateControl == "Divided",
          "hover:fill-slate-400": state.stateControl == null,
        });

        return (
          <g
            key={`${state.id}-${state.name}`}
            onClick={() => router.push(`/${state.name}`)}
            className={`hover:cursor-pointer stroke-black stroke-[0.125px] fill-slate-200 ${hoverColor}`}
          >
            {state.component()}
          </g>
        );
      })}
    </svg>
  );
};
