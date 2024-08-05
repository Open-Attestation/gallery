import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export const App: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};
