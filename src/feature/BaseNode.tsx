import * as React from "react";
import { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(({ data }: any) => {
  return (
    <div className="border p-0.5 rounded bg-gradient shadow-cute text-zinc-900 relative">
      <div className="p-1 px-3 opacity-95 bg-white rounded-sm ">
        {data.label}
      </div>
      <Handle type="target" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
});
