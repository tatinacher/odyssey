import * as React from "react";
import { Link } from "gatsby";

export const Header = ({ routes }: any) => (
  <header className="top-header flex">
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <ul className="navigation flex flex-row">
        {routes.map(({ link, text }: any) => (
          <Link to={link} className="p-4 block font-semibold text-gray-900">
            {text}
          </Link>
        ))}
      </ul>
    </nav>
  </header>
);
