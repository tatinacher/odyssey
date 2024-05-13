import LabelNode from "../../feature/LabelNode";

const baseNode = "base";
const labelNode = "label";
const animated = true;
const type = "default";

export const niktaNodes = [
  { id: "hn2", data: { label: "Никта", description: "ночь" }, type: baseNode },
  {
    id: "hnm1",
    data: { label: "Мор", description: "погибель" },
    type: baseNode,
  },
  {
    id: "hna1",
    data: { label: "Апата", description: "ложь" },
    type: baseNode,
  },
  {
    id: "hng1",
    data: { label: "Герас", description: "старость" },
    type: baseNode,
  },
  {
    id: "hno1",
    data: { label: "Ойзис", description: "несчастья" },
    type: baseNode,
  },
  {
    id: "hnm2",
    data: { label: "Мом", description: "насмешка" },
    type: baseNode,
  },
  {
    id: "hne1",
    data: { label: "Эрис", description: "раздор" },
    type: baseNode,
  },
  {
    id: "hnn1",
    data: { label: "Неземида", description: "воздаяние" },
    type: baseNode,
  },
  {
    id: "hnh1",
    data: { label: "Харон" },
    type: baseNode,
  },
  {
    id: "hnh2",
    data: { label: "Гипнос", description: "сон" },
    type: baseNode,
  },
  {
    id: "hnt1",
    data: { label: "Танатос", description: "смерть" },
    type: baseNode,
  },
  {
    id: "hno1",
    data: { label: "Ониры", description: "грезы" },
    type: labelNode,
  },
  {
    id: "hnof1",
    data: { label: "Фобетор", description: "кошмары" },
    type: baseNode,
  },
  {
    id: "hnof2",
    data: { label: "Фантаз" },
    type: baseNode,
  },
  {
    id: "hnhm2",
    data: { label: "Морфей" },
    type: baseNode,
  },
];

export const niktaEdges = [
  //Мор
  {
    id: "hn2-hnm1",
    source: "hn2",
    target: "hnm1",
    type,
    animated,
  },
  //Апата
  {
    id: "hn2-hna1",
    source: "hn2",
    target: "hna1",
    type,
    animated,
  },
  //Герас
  {
    id: "hn2-hng1",
    source: "hn2",
    target: "hng1",
    type,
    animated,
  },
  //Ойзис
  {
    id: "hn2-hno1",
    source: "hn2",
    target: "hno1",
    type,
    animated,
  },
  //Мом
  {
    id: "hn2-hnm2",
    source: "hn2",
    target: "hnm2",
    type,
    animated,
  },
  //Эрис
  {
    id: "hn2-hne1",
    source: "hn2",
    target: "hne1",
    type,
    animated,
  },
  //Неземида
  {
    id: "hn2-hnn1",
    source: "hn2",
    target: "hnn1",
    type,
    animated,
  },
  //Харон
  {
    id: "hn2-hnh1",
    source: "hn2",
    target: "hnh1",
    type,
    animated,
  },
  //Гипнос
  {
    id: "hn2-hnh2",
    source: "hn2",
    target: "hnh2",
    type,
    animated,
  },
  //Гипнос
  {
    id: "hn2-hnt1",
    source: "hn2",
    target: "hnt1",
    type,
    animated,
  },
  //Ониры
  {
    id: "hn2-hno1",
    source: "hn2",
    target: "hno1",
    type,
    animated,
  },
  //Фобертон
  {
    id: "hno1-hnof1",
    source: "hno1",
    target: "hnof1",
    type,
    animated,
  },
  //Фантаз
  {
    id: "hno1-hnof2",
    source: "hno1",
    target: "hnof2",
    type,
    animated,
  },
  //Морфей
  {
    id: "hnh2-hnhm2",
    source: "hnh2",
    target: "hnhm2",
    type,
    animated,
  },
];
