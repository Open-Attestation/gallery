import React from "react";
import styled from "@emotion/styled";
import { QrCode } from "./qrCode";

const CardContainer = styled.div`
  background: #ffffff;
  padding: 30px;
  width: 328px;
  height: 328px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.04);
`;

const DocumentContainer = styled.div`
  background: #f9f9f9;
  width: 280px;
  height: 224px;
`;

const DocumentDetails = styled.div`
  color: #2c3549;
  width: 280px;
  line-height: 19px;
`;

interface DocumentCardProps {
  className?: string;
  documentDetails: string;
}

export const DocumentCard: React.FC<DocumentCardProps> = props => {
  return (
    <CardContainer className="flex justify-center rounded">
      <div className="flex-column">
        <div className="relative">
          <DocumentContainer className="rounded" />
          <QrCode />
        </div>

        <DocumentDetails className="mt-5 font-medium text-base">{props.documentDetails}</DocumentDetails>
      </div>
    </CardContainer>
  );
};
