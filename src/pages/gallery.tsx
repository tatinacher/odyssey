import * as React from "react";
import type { PageProps } from "gatsby";

import { Map } from "../feature/Map";
import { Header } from "../ui";
import { routes } from "../assets/routes";

const GalleryPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header routes={routes} />
      gallery
    </main>
  );
};

export default GalleryPage;
