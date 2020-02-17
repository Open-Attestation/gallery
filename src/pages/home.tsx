import React from "react";
import { HeaderPicture } from "./../components/headerPicture";
import { DisplayDocuments } from "./../components/displayDocuments/displayDocuments";

export const Home: React.FunctionComponent = () => {
  return (
    <main className="flex-1">
      <HeaderPicture title="Gallery" description="Explore OpenAttestation documents and create yours today" />
      <DisplayDocuments />
    </main>
  );
};
