import React from "react";
import { HeaderPicture } from "./../components/headerPicture";
import { DisplayDocuments } from "./../components/displayDocuments/displayDocuments";
import { documentsAll } from "./../components/documents";

export const Home: React.FunctionComponent = () => {
  return (
    <main className="flex-1 bg-[#edf2f7]">
      <HeaderPicture title="Gallery" description="Explore OpenAttestation documents and create yours today!" />
      <DisplayDocuments documents={documentsAll} />
    </main>
  );
};
