import * as React from "react";
import { Link, type PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Link to="/first-generation">Первое поколение богов</Link>
    </main>
  );
};

export default IndexPage;
