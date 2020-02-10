import React from "react";
import styled from "@emotion/styled";
import { DocumentCard } from "./documentCard";
import { documents } from "./documents";

const SectionContainer = styled.section`
  padding: 71px 204px;
  background-color: #e5e5e5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
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
