import * as React from "react";
import { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(({ data }: any) => {
  return (
    <div
      className="border border-white rounded-full bg-gradient text-white text-xs 
    "
    >
      {data.label}
      <div className="text-white text-xs tracking-widest w-20">
        {data.description}
      </div>
      <Handle type="target" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
});
