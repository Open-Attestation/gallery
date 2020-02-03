import React from "react";
import { Navbar } from "./common/navbar/navbar";
import { HeaderPicture } from "./components/headerPicture";
import { MenuBar } from "./components/menuBar";

export const OpencertsGallery: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <HeaderPicture />
      <MenuBar />
    </div>
  );
};
