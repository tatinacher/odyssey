const labelNode = "label";
const baseNode = "base";
const animated = true;
const type = "default";

export const teyaGiperionNodes = [
  {
    id: "hgupg1",
    data: { label: "Гиперион" },
    type: baseNode,
  },
  {
    id: "hgupt1",
    data: { label: "Тейя" },
    type: baseNode,
  },
  {
    id: "hgupgt1",
    data: { label: "Гиперион + Тейя" },
    type: labelNode,
  },
  {
    id: "hgupgtg1",
    data: { label: "Гелиос", description: "солнце" },
    type: baseNode,
  },
  {
    id: "hgupgts1",
    data: { label: "Селена", description: "луна" },
    type: baseNode,
  },
  {
    id: "hgupgte1",
    data: { label: "Эос", description: "рассветная заря" },
    type: baseNode,
  },
];

export const teyaGiperionEdges = [
  {
    id: "hgupg1-hgupgt1",
    source: "hgupg1",
    target: "hgupgt1",
    type,
    animated,
  },
  {
    id: "hgupt1-hgupgt1",
    source: "hgupt1",
    target: "hgupgt1",
    type,
    animated,
  },
  // Гиперион + Тейя => Гелиос
  {
    id: "hgupgt1-hgupgtg1",
    source: "hgupgt1",
    target: "hgupgtg1",
    type,
    animated,
  },
  // Гиперион + Тейя => Селена
  {
    id: "hgupgt1-hgupgts1",
    source: "hgupgt1",
    target: "hgupgts1",
    type,
    animated,
  },
  // Гиперион + Тейя => Эос
  {
    id: "hgupgt1-hgupgte1",
    source: "hgupgt1",
    target: "hgupgte1",
    type,
    animated,
  },
];
