import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Footer } from "./ui";
import { MainPage, GalleryPage, AncientGreecePage, NotFoundPage } from "./page";
import { routes } from "./assets/routes";

export const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header routes={routes} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/photos" element={<GalleryPage />} />
        <Route path="/ancient-greece" element={<AncientGreecePage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
