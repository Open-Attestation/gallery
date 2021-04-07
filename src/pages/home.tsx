import React from "react";
import { HeaderPicture } from "./../components/headerPicture";
import { DisplayDocuments } from "./../components/displayDocuments/displayDocuments";
import { documents } from "./../components/displayDocuments/documents";

export const Home: React.FunctionComponent = () => {
  return (
    <main className="flex-1 bg-gray-200">
      <HeaderPicture title="Gallery" description="Explore OpenAttestation documents and create yours today!" />
      <DisplayDocuments documents={documents} />
    </main>
  );
};
