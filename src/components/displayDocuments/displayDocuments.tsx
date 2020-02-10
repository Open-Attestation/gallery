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

export const DisplayDocuments: React.FunctionComponent = () => {
  const displayCards = (): JSX.Element[] => {
    const dataArr = [
      {
        title: "OpenCerts Demo",
        url:
          "https://action.openattestation.com?q=%7B%22type%22:%22DOCUMENT%22,%22payload%22:%7B%22uri%22:%22https://api.myjson.com/bins/1a9acm%22,%22key%22:%221b8c334a38f9ff96108303a4ba0cc592f1559eb24f5b48b70c9300c60a34d5e9%22,%22permittedActions%22:%5B%22STORE%22%5D,%22redirect%22:%22https://dev.opencerts.io%22%7D%7D",
        imageName: "opencerts-demo"
      },
      {
        title: "Degree Certificate with Transcript",
        url: "",
        imageName: "opencerts-demo"
      },
      {
        title: "Certificate of Non-manipulation",
        url: "",
        imageName: "opencerts-demo"
      },
      {
        title: "Ngee Ann Polytechnic",
        url: "",
        imageName: "opencerts-demo"
      },
      {
        title: "MPA Certificate of Competency",
        url: "",
        imageName: "opencerts-demo"
      },
      {
        title: "ACRA BizFile+",
        url: "",
        imageName: "opencerts-demo"
      }
    ];
    return dataArr.map(data => (
      <DocumentCard title={data.title} url={data.url} imageName={data.imageName} key={data.url} />
    ));
  };

  return (
    <div className="flex flex-row justify-center">
      <SectionContainer>{displayCards()}</SectionContainer>
    </div>
  );
};
