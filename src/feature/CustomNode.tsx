import { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(({ data }: any) => {
  return (
    <>
      {data.label}
      <Handle type="target" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Right} id="b" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="c"
        style={{ right: 10 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="d"
        style={{ left: 10 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ left: 30 }}
        id="e"
      />
    </>
  );
});
