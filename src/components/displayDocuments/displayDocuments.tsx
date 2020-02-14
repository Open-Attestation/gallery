import React, { ReactElement } from "react";
import { cssContainerWrapper } from "../../constants";
import styled from "@emotion/styled";
import { DocumentCard } from "./documentCard";
import { documents } from "./documents";

const SectionContainer = styled.section`
  background-color: #e5e5e5;
`;

export const DisplayDocuments: React.FunctionComponent = () => {
  const displayCards = (): ReactElement[] => {
    return documents.map(data => (
      <DocumentCard title={data.title} url={data.url} imageName={data.imageName} tags={data.tags} key={data.url} />
    ));
  };

  return (
    <SectionContainer className="py-16">
      <div className={`${cssContainerWrapper} md:px-00`}>
        <div className="flex flex-wrap">{displayCards()}</div>
      </div>
    </SectionContainer>
  );
};
