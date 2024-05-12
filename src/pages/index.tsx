import * as React from "react";
import type { PageProps } from "gatsby";

import { Map } from "../feature/Map";
import { Header } from "../ui";
import { routes } from "../assets/routes";
import { initialNodes, initialEdges } from "../content/data/map-data";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header routes={routes} />
      <Map nodes={initialNodes} edges={initialEdges} />
    </main>
  );
};

export default IndexPage;
