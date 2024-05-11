import { Link } from "react-router-dom";

import "../assets/styles/HeaderView.scss";

export const Header = ({ routes }: any) => (
  <header className="top-header">
    <nav>
      <ul className="navigation">
        {routes.map(({ link, text }: any) => (
          <li key={link}>
            <Link to={link}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
