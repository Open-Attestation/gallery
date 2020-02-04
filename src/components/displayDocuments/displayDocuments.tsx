import React from "react";
import styled from "@emotion/styled";
import { DocumentCard } from "./documentCard";

const SectionContainer = styled.section`
  padding: 71px 204px;
  background-color: #e5e5e5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`;

export const DisplayDocuments: React.FC = () => {
  return (
    <div className="flex flex-row justify-center">
      <SectionContainer>
        <DocumentCard title="Electronic Bill of Lading" />
        <DocumentCard title="Degree Certificate with Transcript" />
        <DocumentCard title="Certificate of Non-manipulation" />
        <DocumentCard title="Ngee Ann Polytechnic" />
        <DocumentCard title="MPA Certificate of Competency (Seafarer)" />
        <DocumentCard title="ACRA BizFile+" />
      </SectionContainer>
    </div>
  );
};
