import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Addcar from "./Component/AddCar/Addcar";
import Footer from "./Component/Footer/Footer";

import { DarkModeProvider } from "./assets/DarkModeContext";

export default function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="webBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addcar" element={<Addcar />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </DarkModeProvider>
  );
}
