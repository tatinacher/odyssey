const labelNode = "label";
const baseNode = "base";
const animated = true;
const type = "default";

export const iapetKlimenaNodes = [
  {
    id: "hguotik1",
    data: { label: "Иапет + Климена" },
    type: labelNode,
  },
  {
    id: "hguotika1",
    data: { label: "Атлант" },
    type: baseNode,
  },
  {
    id: "hguotike1",
    data: { label: "Эпиметей" },
    type: baseNode,
  },
  {
    id: "hguotikp1",
    data: { label: "Прометей" },
    type: baseNode,
  },
];

export const iapetKlimenaEdges = [
  //иапет = и + к
  {
    id: "hgupi1-hguotik1",
    source: "hgupi1",
    target: "hguotik1",
    type,
    animated,
  },
  //клемента = и + к
  {
    id: "hgupotk1-hguotik1",
    source: "hgupotk1",
    target: "hguotik1",
    type,
    animated,
  },
  {
    id: "hguotik1-hguotika1",
    source: "hguotik1",
    target: "hguotika1",
    type,
    animated,
  },
  {
    id: "hguotik1-hguotike1",
    source: "hguotik1",
    target: "hguotike1",
    type,
    animated,
  },
  {
    id: "hguotik1-hguotikp1",
    source: "hguotik1",
    target: "hguotikp1",
    type,
    animated,
  },
];
