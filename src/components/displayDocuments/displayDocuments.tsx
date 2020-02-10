import React from "react";
import styled from "@emotion/styled";
import { DocumentCard } from "./documentCard";
import { documents } from "./documents";

const SectionContainer = styled.section`
  background-color: #e5e5e5;
`;

export const DisplayDocuments: React.FunctionComponent = () => {
  const displayCards = (): JSX.Element[] => {
    return documents.map(data => (
      <DocumentCard title={data.title} url={data.url} imageName={data.imageName} key={data.url} />
    ));
  };

  return (
    <div className="flex flex-row justify-center">
      <SectionContainer>{displayCards()}</SectionContainer>
    </div>
  );
};
