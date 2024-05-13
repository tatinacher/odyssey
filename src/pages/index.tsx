import * as React from "react";
import { Link, type PageProps } from "gatsby";
import { initialNodes, initialEdges } from "../content/data/map-data";

import { Map } from "../feature/Map";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <ul>
        <li>
          <Link to="/first-generation">Первое поколение богов</Link>
        </li>
        <li>
          <Link to="/second-generation">Второе поколение богов</Link>
        </li>
      </ul>
      <Map
        nodes={initialNodes}
        edges={initialEdges}
        width="w-full"
        height="h-lvh"
      />
    </main>
  );
};

export default IndexPage;
