import React, { ReactElement, useState } from "react";
import { cssContainerWrapper } from "../../constants";
import styled from "@emotion/styled";
import { MenuBar } from "./menuBar/menuBar";
import { DocumentCard } from "./documentCard";
import { Tag, Document } from "./documents";

const SectionContainer = styled.section`
  background-color: #e5e5e5;
`;

interface DisplayDocumentsProps {
  documents: Document[];
}

export const DisplayDocuments: React.FunctionComponent<DisplayDocumentsProps> = ({
  documents
}: DisplayDocumentsProps) => {
  const [selectedButton, setSelectedButton] = useState<Tag | undefined>();
  const [search, setSearch] = useState<string>("");

  const displayCards = (documents: Document[]): ReactElement[] => {
    let filteredDocumentsByButton;
    let filteredDocumentsBySearch;

    if (selectedButton) {
      filteredDocumentsByButton = documents.filter(document => document.tags.includes(selectedButton));
    } else {
      filteredDocumentsByButton = documents;
    }

    if (search != "") {
      filteredDocumentsBySearch = filteredDocumentsByButton.filter(document =>
        document.title.toLowerCase().startsWith(search)
      );
    } else {
      filteredDocumentsBySearch = filteredDocumentsByButton;
    }

    return filteredDocumentsBySearch.map((doc, index) => (
      <DocumentCard title={doc.title} url={doc.url} imageName={doc.imageName} tags={doc.tags} key={index} />
    ));
  };

  return (
    <>
      <MenuBar
        setSelectedButton={setSelectedButton}
        selectedButton={selectedButton}
        setSearch={setSearch}
        search={search}
      />
      <SectionContainer className="py-16">
        <div className={`${cssContainerWrapper} md:px-00`}>
          <div className="flex flex-wrap">{displayCards(documents)}</div>
        </div>
      </SectionContainer>
    </>
  );
};
