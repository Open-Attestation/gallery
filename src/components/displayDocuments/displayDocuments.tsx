import React, { ReactElement, useState } from "react";
import { cssContainerWrapper } from "../../constants";
import styled from "@emotion/styled";
import { MenuBar } from "./menuBar/menuBar";
import { DocumentCard } from "./documentCard";
import { documents, Tag } from "./documents";

const SectionContainer = styled.section`
  background-color: #e5e5e5;
`;

export const DisplayDocuments: React.FunctionComponent = () => {
  const [selectedButton, setSelectedButton] = useState<Tag | undefined>();

  const displayCards = (): ReactElement[] => {
    let filteredDocuments;
    if (selectedButton) {
      filteredDocuments = documents.filter(document => document.tags.includes(selectedButton));
    } else {
      filteredDocuments = documents;
    }

    return filteredDocuments.map((doc, index) => (
      <DocumentCard
        data-testid="display-card"
        title={doc.title}
        url={doc.url}
        imageName={doc.imageName}
        tags={doc.tags}
        key={index}
      />
    ));
  };

  return (
    <div>
      <MenuBar setSelectedButton={setSelectedButton} selectedButton={selectedButton} />
      <SectionContainer className="py-16">
        <div className={`${cssContainerWrapper} md:px-00`}>
          <div className="flex flex-wrap">{displayCards()}</div>
        </div>
      </SectionContainer>
    </div>
  );
};
