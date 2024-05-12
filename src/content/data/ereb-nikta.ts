const labelNode = "label";
const baseNode = "base";
const animated = true;
const type = "bezier";

export const erebNiktaNodes = [
  {
    id: "2-3",
    data: { label: "Эреб + Никта" },
    type: labelNode,
  },
  {
    id: "20",
    data: { label: "Гемера" },
    type: baseNode,
  },
  {
    id: "21",
    data: { label: "Эфир" },
    type: baseNode,
  },
];

export const erebNiktaEdges = [
  {
    id: "e23-20",
    source: "2-3",
    target: "20",
    sourceHandle: "b",
    type,
    animated,
  },
  {
    id: "e23-21",
    source: "2-3",
    target: "21",
    sourceHandle: "b",
    type,
    animated,
  },
];
