const labelNode = "label";
const baseNode = "base";
const animated = true;
const type = "bezier";

export const gaiaUranusGirlsNodes = [
  {
    id: "hgupt1",
    data: { label: "Тейя" },
    type: baseNode,
  },
  {
    id: "hgupf1",
    data: { label: "Фемида" },
    type: baseNode,
  },
  {
    id: "hgupm1",
    data: { label: "Мнемосина" },
    type: baseNode,
  },
  {
    id: "hgupf2",
    data: { label: "Феба" },
    type: baseNode,
  },
  {
    id: "hgupt2",
    data: { label: "Тефида" },
    type: baseNode,
  },
  {
    id: "hgupr1",
    data: { label: "Рея" },
    type: baseNode,
  },
];

export const gaiaUranusGirlsEdges = [
  {
    id: "hgup1-hgupt1",
    source: "hgup1",
    target: "hgupt1",
    type,
    animated,
  },
  {
    id: "hgup1-hgupf1",
    source: "hgup1",
    target: "hgupf1",
    type,
    animated,
  },
  {
    id: "hgup1-hgupm1",
    source: "hgup1",
    target: "hgupm1",
    type,
    animated,
  },
  {
    id: "hgup1-hgupf2",
    source: "hgup1",
    target: "hgupf2",
    type,
    animated,
  },
  {
    id: "hgup1-hgupt2",
    source: "hgup1",
    target: "hgupt2",
    type,
    animated,
  },
  {
    id: "hgup1-hgupr1",
    source: "hgup1",
    target: "hgupr1",
    type,
    animated,
  },
];
