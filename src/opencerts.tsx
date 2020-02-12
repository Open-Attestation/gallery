import React from "react";
import { Navbar } from "./components/navbar/navbar";
import { HeaderPicture } from "./components/headerPicture";
import { MenuBar } from "./components/menuBar";
import { DisplayDocuments } from "./components/displayDocuments/displayDocuments";
import { Footer } from "./components/footer";

export const OpencertsGallery: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <HeaderPicture />
      <MenuBar />
      <DisplayDocuments />
      <Footer />
    </div>
  );
};
