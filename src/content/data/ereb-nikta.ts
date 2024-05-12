const labelNode = "label";
const baseNode = "base";
const animated = true;
const type = "default";

export const erebNiktaNodes = [
  {
    id: "hen1",
    data: { label: "Эреб + Никта" },
    type: labelNode,
  },
  {
    id: "heng1",
    data: { label: "Гемера" },
    type: baseNode,
  },
  {
    id: "hene1",
    data: { label: "Эфир" },
    type: baseNode,
  },
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
  {
    id: "ehe1-hen1",
    source: "he1",
    target: "hen1",
    type,
    animated,
  },
  {
    id: "ehn2-hen1",
    source: "hn2",
    target: "hen1",
    type,
    animated,
  },
  {
    id: "ehen1-heng1",
    source: "hen1",
    target: "heng1",
    type,
    animated,
  },
  {
    id: "ehen1-hene1",
    source: "hen1",
    target: "hene1",
    type,
    animated,
  },
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
