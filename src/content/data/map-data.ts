import { firstGenNodes, firstGenEdges } from "./first-generation";
import { secondGenNodes, secondGenEdges } from "./second-generation";

export const initialNodes = [...firstGenNodes, ...secondGenNodes];

export const initialEdges = [...firstGenEdges, ...secondGenEdges];
