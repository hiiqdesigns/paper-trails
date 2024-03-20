import { Alabama } from "./States/Alabama";
import { Alaska } from "./States/Alaska";
import { Arkansas } from "./States/Arkansas";
import { Arizona } from "./States/Arizona";

const states = require.context("./States");

export const stateList = [
  { id: "AL", name: "Alabama", component: <Alabama /> },
  { id: "AK", name: "Alaska", component: <Alaska /> },
  { id: "AR", name: "Arkansas", component: <Arkansas /> },
  { id: "AZ", name: "Arizona", component: <Arizona /> },
];
