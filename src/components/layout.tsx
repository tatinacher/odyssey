import React from "react";
import { Header } from "../ui";
import { routes } from "../assets/routes";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="container">
        <Header routes={routes} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
