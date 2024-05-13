import * as React from "react";
import { Link } from "gatsby";

export const Header = ({ routes }: any) => {
  const [isVisible, setVisibility] = React.useReducer((is) => !is, false);

  const mobileMenu = isVisible ? (
    <div className="sm:hidden z-10 w-full pt-16 bg-gray-900">
      <div className="space-y-1 h-lvh px-2 pb-3 pt-2 bg-gray-900 text-white">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        {routes.map(({ link, text }: any) => (
          <Link
            to={link}
            key={link}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  ) : null;

  const iconMenuMobile = isVisible ? (
    <svg
      className=" h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      className="block h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  return (
    <header className="top-header flex relative">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden z-20">
        {/* <!-- Mobile menu button--> */}
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={setVisibility}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          {iconMenuMobile}
        </button>
      </div>
      <nav className="mx-auto  max-w-7xl items-center w-full justify-center p-6 lg:px-8 hidden sm:ml-6 sm:flex">
        <ul className="navigation flex flex-row">
          {routes.map(({ link, text }: any) => (
            <Link
              to={link}
              key={link}
              className="p-4 block font-semibold text-gray-900"
            >
              {text}
            </Link>
          ))}
        </ul>
      </nav>
      {mobileMenu}
    </header>
  );
};
