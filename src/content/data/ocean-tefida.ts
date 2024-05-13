const labelNode = "label";
const baseNode = "base";
const animated = true;
const type = "default";

export const oceanTefidaNodes = [
  {
    id: "hgupot1",
    data: { label: "Океан + Тефида" },
    type: labelNode,
  },
  {
    id: "hgupotn1",
    data: { label: "Нил", description: "река" },
    type: baseNode,
  },
  {
    id: "hgupotk1",
    data: { label: "Климена" },
    type: baseNode,
  },
  {
    id: "hgupotk2",
    data: { label: "Калипсо" },
    type: baseNode,
  },
  {
    id: "hgupotа1",
    data: { label: "Амфитира" },
    type: baseNode,
  },
  {
    id: "hgupots1",
    data: { label: "Стикс" },
    type: baseNode,
  },
  {
    id: "hgupotm1",
    data: { label: "Метида" },
    type: baseNode,
  },
  {
    id: "hgupotd1",
    data: { label: "Дорида" },
    type: baseNode,
  },
];

export const oceanTefidaEdges = [
  {
    id: "hgupo1-hgupot1",
    source: "hgupo1",
    target: "hgupot1",
    type,
    animated,
  },
  {
    id: "hgupt2-hgupot1",
    source: "hgupt2",
    target: "hgupot1",
    type,
    animated,
  },
  // Океан + Тефида => Нил
  {
    id: "hgupot1-hgupotn1",
    source: "hgupot1",
    target: "hgupotn1",
    type,
    animated,
  },
  // Океан + Тефида => Климена
  {
    id: "hgupot1-hgupotk1",
    source: "hgupot1",
    target: "hgupotk1",
    type,
    animated,
  },
  // Океан + Тефида => Калипсо
  {
    id: "hgupot1-hgupotk2",
    source: "hgupot1",
    target: "hgupotk2",
    type,
    animated,
  },
  // Океан + Тефида => Метида
  {
    id: "hgupot1-hgupotm1",
    source: "hgupot1",
    target: "hgupotm1",
    type,
    animated,
  },
  // Океан + Тефида => Амфитира
  {
    id: "hgupot1-hgupota1",
    source: "hgupot1",
    target: "hgupotа1",
    type,
    animated,
  },
  // Океан + Тефида => Стикс
  {
    id: "hgupot1-hgupots1",
    source: "hgupot1",
    target: "hgupots1",
    type,
    animated,
  },
  // Океан + Тефида => Дорида
  {
    id: "hgupot1-hgupotd1",
    source: "hgupot1",
    target: "hgupotd1",
    type,
    animated,
  },
];
