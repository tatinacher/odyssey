import { gaiaUranusEdges, gaiaUranusNodes } from "./gaia-uranus";

const animated = true;
const type = "bezier";
const baseNode = "base";

export const initialNodes = [
  { id: "1", data: { label: "Хаос" }, type: baseNode },
  { id: "2", data: { label: "Эреб" }, type: baseNode },
  { id: "3", data: { label: "Никта" }, type: baseNode },
  {
    id: "4",
    data: { label: "Гея", path: "gaia" },
    type: baseNode,
  },
  {
    id: "5",
    data: { label: "Тартар" },
    type: baseNode,
  },

  {
    id: "6",
    data: { label: "Тифон" },
    type: baseNode,
  },

  {
    id: "7",
    data: { label: "Уран" },
    type: baseNode,
  },
  ...gaiaUranusNodes,
];

export const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type, animated },
  { id: "e1-3", source: "1", target: "3", type, animated },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    targetHandle: "a",
    type,
    animated,
  },
  { id: "e1-5", source: "1", target: "5", type, animated },
  { id: "e5-6", source: "5", target: "6", type, animated },
  {
    id: "e4-7",
    source: "4",
    target: "7",
    sourceHandle: "d",
    animated,
    type,
    label: "Партеногенез",
  },
  {
    id: "e4-6",
    source: "4",
    target: "6",
    type,
    sourceHandle: "c",
    animated,
  },

  {
    id: "e4-8",
    source: "4",
    target: "4-7",
    sourceHandle: "e",
    type,
    animated,
  },
  {
    id: "e7-8",
    source: "7",
    target: "4-7",
    sourceHandle: "b",
    type,
    animated,
  },
  ...gaiaUranusEdges,
];
