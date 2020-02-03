import React from "react";
import styled from "@emotion/styled";
import { DocumentCard } from "./documentCard";

const SectionContainer = styled.section`
  padding: 74px 204px;
  background-color: #e5e5e5;
`;

export const DisplayDocuments: React.FunctionComponent = () => {
  return (
    <SectionContainer>
      <div className="flex mt-10">
        <div className="w-1/3">
          <DocumentCard documentDetails="Electronic Bill of Lading" />
        </div>
        <div className="w-1/3 ml-6">
          <DocumentCard documentDetails="Degree Certificate with Transcript" />
        </div>
        <div className="w-1/3 ml-6">
          <DocumentCard documentDetails="Certificate of Non-manipulation" />
        </div>
      </div>
      <div className="flex mt-6">
        <div className="w-1/3">
          <DocumentCard documentDetails="Ngee Ann Polytechnic" />
        </div>
        <div className="w-1/3 ml-6">
          <DocumentCard documentDetails="MPA Certificate of Competency (Seafarer)" />
        </div>
        <div className="w-1/3 ml-6">
          <DocumentCard documentDetails="ACRA BizFile+" />
        </div>
      </div>
    </SectionContainer>
  );
};
