import * as React from "react";
import { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(({ data }: any) => {
  return (
    <div className="border rounded-full p-0.5 px-4 bg-gradient text-white text-xs ">
      {data.label}
      <Handle type="target" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
});
