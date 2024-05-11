import ReactFlow, { Controls, NodeMouseHandler } from "reactflow";
import { useNavigate } from "react-router-dom";
import CustomNode from "./CustomNode";

import "reactflow/dist/style.css";

const animated = true;
const type = "step";
const style = { border: "1px solid #777", padding: 10, width: 100 };

const initialNodes = [
  { id: "1", position: { x: 300, y: 0 }, data: { label: "Хаос" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "Эреб" } },
  { id: "3", position: { x: 200, y: 100 }, data: { label: "Никта" } },
  {
    id: "4",
    position: { x: 400, y: 100 },
    data: { label: "Гея", path: "gaia" },
    type: "custom",
    style,
  },
  {
    id: "5",
    position: { x: 600, y: 100 },
    data: { label: "Тартар" },
  },
  {
    id: "6",
    position: { x: 500, y: 200 },
    data: { label: "Тифон" },
  },
  {
    id: "7",
    position: { x: 300, y: 200 },
    data: { label: "Уран" },
    type: "custom",
    style,
  },
  {
    id: "8",
    position: { x: 350, y: 300 },
    data: { label: "Океан" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type, animated },
  { id: "e1-3", source: "1", target: "3", type, animated },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    targetHandle: "a",
    type,
    animated,
  },
  { id: "e1-5", source: "1", target: "5", type, animated },
  { id: "e5-6", source: "5", target: "6", type, animated },
  {
    id: "e4-7",
    source: "4",
    target: "7",
    sourceHandle: "d",
    animated,
    type,
  },
  {
    id: "e4-6",
    source: "4",
    target: "6",
    type,
    sourceHandle: "c",
    animated,
  },

  {
    id: "e4-8",
    source: "4",
    target: "8",
    sourceHandle: "e",
    type,
    animated,
  },
  {
    id: "e7-8",
    source: "7",
    target: "8",
    sourceHandle: "b",
    type,
    animated,
  },
];

const nodeTypes = {
  custom: CustomNode,
};

export function Map() {
  const navigate = useNavigate();

  const onNodeClick: NodeMouseHandler = (event, node) => {
    console.log(node);
    navigate("/" + node.data.path);
  };

  return (
    <div style={{ width: "100vw", height: "90vh" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
      >
        <Controls />
        {/* <MiniMap /> */}
      </ReactFlow>
    </div>
  );
}
