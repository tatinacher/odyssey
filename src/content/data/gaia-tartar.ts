const labelNode = "label";
const baseNode = "base";
const animated = true;
const type = "default";

export const gaiaTartarNodes = [
  {
    id: "hgt1",
    data: { label: "Гея + Тартар" },
    type: labelNode,
  },
  {
    id: "hgtt1",
    data: { label: "Тифон" },
    type: baseNode,
  },
];

export const gaiaTartarEdges = [
  {
    id: "ehg3-hgt1",
    source: "hg3",
    target: "hgt1",
    type,
    animated,
  },
  {
    id: "eht4-hgt1",
    source: "ht4",
    target: "hgt1",
    type,
    animated,
  },
  {
    id: "ehgt1-hgtt1",
    source: "hgt1",
    target: "hgtt1",
    type,
    animated,
  },
];
