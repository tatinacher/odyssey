import * as React from "react";
import ReactFlow, {
  ConnectionLineType,
  Controls,
  NodeMouseHandler,
  addEdge,
  useEdgesState,
  useNodesState,
  Node,
  Edge,
} from "reactflow";
import dagre from "dagre";

import CustomNode from "./CustomNode";
import BaseNode from "./BaseNode";
import LabelNode from "./LabelNode";

import "reactflow/dist/style.css";

type NodeType = Node<any, string | undefined>[];
type EdgeType = Edge<any>[];

interface MapProps {
  nodes: NodeType;
  edges: EdgeType;
}

const nodeTypes = {
  custom: CustomNode,
  base: BaseNode,
  label: LabelNode,
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 72;
const nodeHeight = 26;

const getLayoutedElements = (
  nodes: NodeType,
  edges: EdgeType,
  direction = "TB"
) => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });
  if (!nodes || !edges) {
    return {};
  }

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "top";
    node.sourcePosition = isHorizontal ? "right" : "bottom";

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

export function Map({ nodes, edges }: MapProps) {
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    nodes,
    edges
  );

  const [nodesState, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edgesState, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const onNodeClick: NodeMouseHandler = (event, node) => {
    const id = node.id.slice(0, -1);
    let isHidden = false;

    const toggledNodes = nodesState.map((node) => {
      const currentNodeId = node.id.slice(0, -1);
      if (node.id.startsWith(id) && currentNodeId !== id) {
        console.log(id, currentNodeId);

        if (currentNodeId.length - id.length <= 1) {
          isHidden = !node.hidden;
        }
        return { ...node, hidden: isHidden };
      }
      return node;
    });
    setNodes(toggledNodes);
  };

  const onConnect = React.useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: true },
          eds
        )
      ),
    []
  );

  return (
    <div className="h-[500px] w-[700px]">
      <ReactFlow
        nodes={nodesState}
        edges={edgesState}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
      >
        <Controls />
        {/* <MiniMap /> */}
      </ReactFlow>
    </div>
  );
}
