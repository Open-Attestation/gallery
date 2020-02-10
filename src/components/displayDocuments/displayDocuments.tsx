import React from "react";
import styled from "@emotion/styled";
import { DocumentCard } from "./documentCard";

import OpencertsDemoImage from "../../resources/documentThumbnails/opencerts-demo.jpg";

const SectionContainer = styled.section`
  background-color: #e5e5e5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`;

export const DisplayDocuments: React.FunctionComponent = () => {
  return (
    <div className="flex flex-row justify-center">
      <SectionContainer className="py-20 px-56 flex-grow flex-shrink">
        <DocumentCard
          title="OpenCerts Demo"
          url="https://action.openattestation.com?q=%7B%22type%22:%22DOCUMENT%22,%22payload%22:%7B%22uri%22:%22https://api.myjson.com/bins/1a9acm%22,%22key%22:%221b8c334a38f9ff96108303a4ba0cc592f1559eb24f5b48b70c9300c60a34d5e9%22,%22permittedActions%22:%5B%22STORE%22%5D,%22redirect%22:%22https://dev.opencerts.io%22%7D%7D"
          image={OpencertsDemoImage}
        />
        <DocumentCard title="Degree Certificate with Transcript" url="" />
        <DocumentCard title="Certificate of Non-manipulation" url="" />
        <DocumentCard title="Ngee Ann Polytechnic" url="" />
        <DocumentCard title="MPA Certificate of Competency" url="" />
        <DocumentCard title="ACRA BizFile+" url="" />
      </SectionContainer>
    </div>
  );
};
