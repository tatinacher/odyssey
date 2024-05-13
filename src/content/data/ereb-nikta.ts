const labelNode = "label";
const baseNode = "base";
const animated = true;
const type = "default";

export const erebNiktaNodes = [
  {
    id: "hnm1",
    data: { label: "Мор" },
    type: baseNode,
  },
  {
    id: "hna1",
    data: { label: "Апата" },
    type: baseNode,
  },
  {
    id: "hng1",
    data: { label: "Герас" },
    type: baseNode,
  },
  {
    id: "hno1",
    data: { label: "Ойзис" },
    type: baseNode,
  },
];

export const erebNiktaEdges = [
  //Мор
  {
    id: "ehn2-hnm1",
    source: "hn2",
    target: "hnm1",
    type,
    animated,
  },
  //Апата
  {
    id: "ehn2-hna1",
    source: "hn2",
    target: "hna1",
    type,
    animated,
  },
  //Герас
  {
    id: "ehn2-hng1",
    source: "hn2",
    target: "hng1",
    type,
    animated,
  },
  //Ойзис
  {
    id: "ehn2-hno1",
    source: "hn2",
    target: "hno1",
    type,
    animated,
  },
];
