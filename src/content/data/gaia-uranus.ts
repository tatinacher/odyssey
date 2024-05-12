const labelNode = "label";
const baseNode = "base";
const animated = true;
const type = "bezier";

export const gaiaUranusNodes = [
  {
    id: "hgu1",
    data: { label: "Гея + Уран" },
    type: labelNode,
  },
  {
    id: "hguo1",
    data: { label: "Океан" },
    type: baseNode,
  },
  {
    id: "hguk1",
    data: { label: "Кой" },
    type: baseNode,
  },
  {
    id: "hguk2",
    data: { label: "Крий" },
    type: baseNode,
  },
  {
    id: "hgug1",
    data: { label: "Гиперион" },
    type: baseNode,
  },
  {
    id: "hgui1",
    data: { label: "Иапет" },
    type: baseNode,
  },
  {
    id: "hguk3",
    data: { label: "Кронос" },
    type: baseNode,
  },
  {
    id: "hgut1",
    data: { label: "Тейя" },
    type: baseNode,
  },
  {
    id: "hguf1",
    data: { label: "Фемида" },
    type: baseNode,
  },
  {
    id: "hgum1",
    data: { label: "Мнемосина" },
    type: baseNode,
  },
  {
    id: "hguf2",
    data: { label: "Феба" },
    type: baseNode,
  },
  {
    id: "hgut2",
    data: { label: "Тефида" },
    type: baseNode,
  },
  {
    id: "hgur1",
    data: { label: "Рея" },
    type: baseNode,
  },
];

export const gaiaUranusEdges = [
  {
    id: "ehg3-hgu1",
    source: "hg3",
    target: "hgu1",
    type,
    animated,
  },
  {
    id: "ehgu0-hgu1",
    source: "hgu0",
    target: "hgu1",
    type,
    animated,
  },
  {
    id: "hgu1-hguo1",
    source: "hgu1",
    target: "hguo1",
    type,
    animated,
  },
  {
    id: "hgu1-hguk1",
    source: "hgu1",
    target: "hguk1",
    type,
    animated,
  },
  {
    id: "hgu1-hguk2",
    source: "hgu1",
    target: "hguk2",
    type,
    animated,
  },
  {
    id: "hgu1-hgug1",
    source: "hgu1",
    target: "hgug1",
    type,
    animated,
  },
  {
    id: "hgu1-hgui1",
    source: "hgu1",
    target: "hgui1",
    type,
    animated,
  },
  {
    id: "hgu1-hguk3",
    source: "hgu1",
    target: "hguk3",
    type,
    animated,
  },
  {
    id: "hgu1-hgut1",
    source: "hgu1",
    target: "hgut1",
    type,
    animated,
  },
  {
    id: "hgu1-hguf1",
    source: "hgu1",
    target: "hguf1",
    type,
    animated,
  },
  {
    id: "hgu1-hgum1",
    source: "hgu1",
    target: "hgum1",
    type,
    animated,
  },
  {
    id: "hgu1-hguf2",
    source: "hgu1",
    target: "hguf2",
    type,
    animated,
  },
  {
    id: "hgu1-hgut2",
    source: "hgu1",
    target: "hgut2",
    type,
    animated,
  },
  {
    id: "hgu1-hgur1",
    source: "hgu1",
    target: "hgur1",
    type,
    animated,
  },
];
