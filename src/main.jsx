import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Imagens from "./pages/Imagens";
import About from "./pages/About";

import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imagens" element={<Imagens />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);