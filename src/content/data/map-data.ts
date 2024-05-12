import { erebNiktaEdges, erebNiktaNodes } from "./ereb-nikta";
import { gaiaTartarEdges, gaiaTartarNodes } from "./gaia-tartar";
import { gaiaUranusEdges, gaiaUranusNodes } from "./gaia-uranus";

const animated = true;
const type = "default";
const baseNode = "base";

export const initialNodes = [
  { id: "h1", data: { label: "Хаос" }, type: baseNode },
  { id: "he1", data: { label: "Эреб" }, type: baseNode },
  { id: "hn2", data: { label: "Никта" }, type: baseNode },
  {
    id: "hg3",
    data: { label: "Гея", path: "gaia" },
    type: baseNode,
  },
  {
    id: "ht4",
    data: { label: "Тартар" },
    type: baseNode,
  },
  {
    id: "hgu0",
    data: { label: "Уран" },
    type: baseNode,
  },
  ...gaiaUranusNodes,
  ...erebNiktaNodes,
  ...gaiaTartarNodes,
];

export const initialEdges = [
  { id: "eh1-he1", source: "h1", target: "he1", type, animated },
  { id: "eh1-hn2", source: "h1", target: "hn2", type, animated },
  {
    id: "eh1-hg3",
    source: "h1",
    target: "hg3",
    type,
    animated,
  },
  { id: "eh1-ht4", source: "h1", target: "ht4", type, animated },
  {
    id: "ehg3-hgu0",
    source: "hg3",
    target: "hgu0",
    animated,
    type,
    label: "Партеногенез",
  },
  ...gaiaUranusEdges,
  ...erebNiktaEdges,
  ...gaiaTartarEdges,
];
