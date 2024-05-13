const labelNode = "label";
const baseNode = "base";
const animated = true;
const type = "default";

export const gaiaUranus2Nodes = [
  {
    id: "hguс1",
    data: { label: "Циклопы", description: "одноглазые великаны" },
    type: labelNode,
  },
  {
    id: "hguh1",
    data: { label: "Гекатонхейры", description: "50 голов и 100 рук" },
    type: labelNode,
  },
  {
    id: "hguсb1",
    data: { label: "Бронт", description: "гром" },
    type: baseNode,
  },
  {
    id: "hguсs1",
    data: { label: "Стероп", description: "молния" },
    type: baseNode,
  },
  {
    id: "hguсa1",
    data: { label: "Арг", description: "яркость" },
    type: baseNode,
  },
  {
    id: "hguhk1",
    data: { label: "Котт", description: "яростный" },
    type: baseNode,
  },
  {
    id: "hguhg1",
    data: { label: "Гиес", description: "долгорукий" },
    type: baseNode,
  },
  {
    id: "hguhe1",
    data: { label: "Эгеон/Бриарей", description: "могучий" },
    type: baseNode,
  },
];

export const gaiaUranus2Edges = [
  // гея+уран -> циклопы
  {
    id: "hgu1-hguс1",
    source: "hgu1",
    target: "hguс1",
    type,
    animated,
  },
  {
    id: "hguс1-hguсb1",
    source: "hguс1",
    target: "hguсb1",
    type,
    animated,
  },
  {
    id: "hguс1-hguсs1",
    source: "hguс1",
    target: "hguсs1",
    type,
    animated,
  },
  {
    id: "hguс1-hguсa1",
    source: "hguс1",
    target: "hguсa1",
    type,
    animated,
  },
  // гея+уран -> Гекатонхейры
  {
    id: "hgu1-hguh1",
    source: "hgu1",
    target: "hguh1",
    type,
    animated,
  },
  {
    id: "hguh1-hguhk1",
    source: "hguh1",
    target: "hguhk1",
    type,
    animated,
  },
  {
    id: "hguh1-hguhg1",
    source: "hguh1",
    target: "hguhg1",
    type,
    animated,
  },
  {
    id: "hguh1-hguhe1",
    source: "hguh1",
    target: "hguhe1",
    type,
    animated,
  },
];
