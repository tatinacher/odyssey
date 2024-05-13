import { Link } from "gatsby";
import * as React from "react";
import { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(({ data }: any) => {
  return (
    <div className="border p-0.5 rounded bg-gradient shadow-cute text-zinc-900 relative">
      <div className="p-1 px-3 opacity-95 bg-white rounded-sm ">
        {data.path ? (
          <Link
            to={`/myth/${data.path}`}
            className="underline decoration-dashed underline-offset-2 decoration-sky-700"
          >
            {data.label}
          </Link>
        ) : (
          <p>{data.label}</p>
        )}
        <div className="text-neutral-800 text-xs tracking-widest w-20">
          {data.description}
        </div>
      </div>
      <Handle type="target" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
});
