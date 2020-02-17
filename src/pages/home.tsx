import React from "react";
import { Navbar } from "./../components/navbar";
import { HeaderPicture } from "./../components/headerPicture";
import { DisplayDocuments } from "./../components/displayDocuments/displayDocuments";
import { Footer } from "./../components/footer";

export const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <HeaderPicture title="Gallery" description="Explore OpenAttestation documents and create yours today" />
      <DisplayDocuments />
      <Footer />
    </div>
  );
};
