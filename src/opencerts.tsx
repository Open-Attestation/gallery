import React from "react";
import { Navbar } from "./components/navbar/navbar";
import { HeaderPicture } from "./components/headerPicture";
import { DisplayDocuments } from "./components/displayDocuments/displayDocuments";

export const OpencertsGallery: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <HeaderPicture />
      <DisplayDocuments />
    </div>
  );
};
