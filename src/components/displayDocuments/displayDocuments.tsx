import React from "react";
import { containerMain } from "../../constants";
import styled from "@emotion/styled";
import { DocumentCard } from "./documentCard";
import { documents } from "./documents";

const SectionContainer = styled.section`
  background-color: #e5e5e5;
`;

export const DisplayDocuments: React.FunctionComponent = () => {
  const displayCards = (): JSX.Element[] => {
    return documents.map(data => (
      <DocumentCard title={data.title} url={data.url} imageName={data.imageName} tags={data.tags} key={data.url} />
    ));
  };

  return (
    <SectionContainer className="py-16 md:py-10">
      <div className={`${containerMain} md:px-00`}>
        <div className="flex flex-wrap">{displayCards()}</div>
      </div>
    </SectionContainer>
  );
};
