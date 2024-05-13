import { erebNiktaEdges, erebNiktaNodes } from "./ereb-nikta";
import { firstGenNodes, firstGenEdge } from "./first-generation";
import { gaiaTartarEdges, gaiaTartarNodes } from "./gaia-tartar";
import { gaiaUranusEdges, gaiaUranusNodes } from "./gaia-uranus";

export const initialNodes = [
  ...firstGenNodes,
  ...gaiaUranusNodes,
  ...erebNiktaNodes,
  ...gaiaTartarNodes,
];

export const initialEdges = [
  ...firstGenEdge,
  ...gaiaUranusEdges,
  ...erebNiktaEdges,
  ...gaiaTartarEdges,
];
