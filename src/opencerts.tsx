import React from "react";
import { Navbar } from "./components/navbar";
import { HeaderPicture } from "./components/headerPicture";
import { DisplayDocuments } from "./components/displayDocuments/displayDocuments";
import { Footer } from "./components/footer";
import { documents } from "./components/displayDocuments/documents";

export const OpencertsGallery: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <HeaderPicture />
      <DisplayDocuments documents={documents} />
      <Footer />
    </div>
  );
};
