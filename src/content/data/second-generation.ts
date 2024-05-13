import {
  gaiaUranusGirlsEdges,
  gaiaUranusGirlsNodes,
} from "./gaia-uranus-girls";
import { gaiaUranus2Edges, gaiaUranus2Nodes } from "./GU-cyclopes-heka";
import { gaiaUranusBoysEdges, gaiaUranusBoysNodes } from "./gaia-uranus-boys";
import { oceanTefidaEdges, oceanTefidaNodes } from "./ocean-tefida";
import { niktaEdges, niktaNodes } from "./nikta";
import { teyaGiperionEdges, teyaGiperionNodes } from "./teya-giperion";
import { iapetKlimenaEdges, iapetKlimenaNodes } from "./iapet-klimena";
import { gaiaTartarEdges, gaiaTartarNodes } from "./gaia-tartar";

const animated = true;
const type = "default";
const baseNode = "base";
const labelNode = "label";
const emptyNode = "empty";

export const secondGenNodes = [
  {
    id: "hg3",
    data: { label: "Гея", description: "земля", path: "gaia" },
    type: baseNode,
  },
  {
    id: "hgu0",
    data: { label: "Уран", description: "небо" },
    type: baseNode,
  },
  {
    id: "hgu1",
    data: { label: "Гея + Уран" },
    type: labelNode,
  },
  //пустые ноды чтобы спустить вниз ветку
  {
    id: "hgup2",
    data: { label: "" },
    type: emptyNode,
  },
  {
    id: "hgup3",
    data: { label: "" },
    type: emptyNode,
  },
  {
    id: "hgup1",
    data: { label: "II поколение" },
    type: labelNode,
  },
  ...gaiaUranus2Nodes,
  ...gaiaUranusGirlsNodes,
  ...gaiaUranusBoysNodes,
  ...oceanTefidaNodes,
  ...niktaNodes,
  ...teyaGiperionNodes,
  ...iapetKlimenaNodes,
  ...gaiaTartarNodes,
];

export const secondGenEdges = [
  {
    id: "eh1-hg3",
    source: "h1",
    target: "hg3",
    type,
    animated,
  },
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
    id: "hgu1-hgup2",
    source: "hgu1",
    target: "hgup2",
    type,
    animated,
  },
  {
    id: "hgu1-hgup2",
    source: "hgu1",
    target: "hgup2",
    type,
    animated,
  },
  {
    id: "hgup2-hgup3",
    source: "hgup2",
    target: "hgup3",
    type,
    animated,
  },
  {
    id: "hgup3-hgup1",
    source: "hgup3",
    target: "hgup1",
    type,
    animated,
  },
  ...gaiaUranus2Edges,
  ...gaiaUranusGirlsEdges,
  ...gaiaUranusBoysEdges,
  ...oceanTefidaEdges,
  ...niktaEdges,
  ...teyaGiperionEdges,
  ...iapetKlimenaEdges,
  ...gaiaTartarEdges,
];
