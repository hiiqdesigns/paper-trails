import Alabama from "./States/Alabama";
import Alaska from "./States/Alaska";
import Arkansas from "./States/Arkansas";
import Arizona from "./States/Arizona";
import California from "./States/California";
import Colorado from "./States/Colorado";
import Delaware from "./States/Delaware";
import Florida from "./States/Florida";
import Georgia from "./States/Georgia";
import Hawaii from "./States/Hawaii";

export const stateList = [
  { id: "AL", name: "Alabama", component: <Alabama key={"state-AL"} /> },
  { id: "AK", name: "Alaska", component: <Alaska key={"state-AK"} /> },
  { id: "AR", name: "Arkansas", component: <Arkansas key={"state-AR"} /> },
  { id: "AZ", name: "Arizona", component: <Arizona key={"state-AZ"} /> },
  {
    id: "CA",
    name: "California",
    component: <California key={"state-CA"} />,
  },
  { id: "CO", name: "Colorado", component: <Colorado key={"state-CO"} /> },
  { id: "DE", name: "Delaware", component: <Delaware key={"state-DE"} /> },
  { id: "FL", name: "Florida", component: <Florida key={"state-FL"} /> },
  { id: "GA", name: "Georgia", component: <Georgia key={"state-GA"} /> },
  { id: "HI", name: "Hawaii", component: <Hawaii key={"state-HI"} /> },
];
