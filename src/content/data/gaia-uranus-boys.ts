const baseNode = "base";
const animated = true;
const type = "bezier";

export const gaiaUranusBoysNodes = [
  {
    id: "hgupo1",
    data: { label: "Океан" },
    type: baseNode,
  },
  {
    id: "hgupk1",
    data: { label: "Кой" },
    type: baseNode,
  },
  {
    id: "hgupk2",
    data: { label: "Крий" },
    type: baseNode,
  },
  {
    id: "hgupg1",
    data: { label: "Гиперион" },
    type: baseNode,
  },
  {
    id: "hgupi1",
    data: { label: "Иапет" },
    type: baseNode,
  },
  {
    id: "hgupk3",
    data: { label: "Кронос" },
    type: baseNode,
  },
];

export const gaiaUranusBoysEdges = [
  {
    id: "hgup1-hgupo1",
    source: "hgup1",
    target: "hgupo1",
    type,
    animated,
  },
  {
    id: "hgup1-hgupk1",
    source: "hgup1",
    target: "hgupk1",
    type,
    animated,
  },
  {
    id: "hgup1-hgupk2",
    source: "hgup1",
    target: "hgupk2",
    type,
    animated,
  },
  {
    id: "hgup1-hgupg1",
    source: "hgup1",
    target: "hgupg1",
    type,
    animated,
  },
  {
    id: "hgup1-hgupi1",
    source: "hgup1",
    target: "hgupi1",
    type,
    animated,
  },
  {
    id: "hgup1-hgupk3",
    source: "hgup1",
    target: "hgupk3",
    type,
    animated,
  },
];
