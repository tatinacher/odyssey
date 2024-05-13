const animated = true;
const type = "default";
const baseNode = "base";
const labelNode = "label";

export const firstGenNodes = [
  { id: "h1", data: { label: "Хаос" }, type: baseNode },
  { id: "he1", data: { label: "Эреб", description: "тьма" }, type: baseNode },
  { id: "hn2", data: { label: "Никта", description: "ночь" }, type: baseNode },
  {
    id: "hg3",
    data: { label: "Гея", description: "земля", path: "gaia" },
    type: baseNode,
  },
  {
    id: "ht4",
    data: { label: "Тартар", description: "подземные глубины и пещеры" },
    type: baseNode,
  },
  {
    id: "hgu0",
    data: { label: "Уран", description: "небо" },
    type: baseNode,
  },
  {
    id: "hgp0",
    data: { label: "Понт", description: "море" },
    type: baseNode,
  },
  {
    id: "hen1",
    data: { label: "Эреб + Никта" },
    type: labelNode,
  },
  {
    id: "heng1",
    data: { label: "Гемера", description: "день" },
    type: baseNode,
  },
  {
    id: "hene1",
    data: { label: "Эфир", description: "свет" },
    type: baseNode,
  },
  {
    id: "henge1",
    data: { label: "Гемера + Эфир" },
    type: labelNode,
  },
  {
    id: "henhet1",
    data: { label: "Таласса", description: "море" },
    type: baseNode,
  },
];

export const firstGenEdges = [
  { id: "eh1-he1", source: "h1", target: "he1", type, animated },
  { id: "eh1-hn2", source: "h1", target: "hn2", type, animated },
  {
    id: "eh1-hg3",
    source: "h1",
    target: "hg3",
    type,
    animated,
  },
  { id: "eh1-ht4", source: "h1", target: "ht4", type, animated },
  {
    id: "ehg3-hgu0",
    source: "hg3",
    target: "hgu0",
    animated,
    type,
    label: "Партеногенез",
  },
  {
    id: "ehg3-hgp0",
    source: "hg3",
    target: "hgp0",
    animated,
    type,
  },
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
  {
    id: "eheng1-henge1",
    source: "heng1",
    target: "henge1",
    type,
    animated,
  },
  {
    id: "ehene1-henge1",
    source: "hene1",
    target: "henge1",
    type,
    animated,
  },
  {
    id: "ehenge1-henhet1",
    source: "henge1",
    target: "henhet1",
    type,
    animated,
  },
];
