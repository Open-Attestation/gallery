import React, { useState } from "react";
import styled from "@emotion/styled";
import QRCode from "qrcode.react";
import { MdDescription } from "react-icons/md";
import { QrCodeButton } from "./qrCodeButton";
import { Document } from "./documents";

const ShowDocumentButton = styled.div`
  width: 48px;
  height: 48px;
  background: #feeee7;
  border-radius: 12px 0px 4px;
  transition: transform 0.3s ease-in;
  transform: translateX(100%) translateY(100%);
`;

const CardContainer = styled.div`
  padding: 24px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.4s 0.1s ease-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
`;

const HoverContainer = styled.div`
  &:hover {
    ${ShowDocumentButton} {
      transition: transform 0.3s ease-out;
      transform: translateX(0) translateY(0);
    }
  }
`;

const DocumentContainer = styled.img`
  background: #f9f9f9;
  width: 280px;
  height: 224px;
`;

const DocumentDetails = styled.div`
  color: #2c3549;
  width: 280px;
  line-height: 19px;
`;

export const DocumentCard: React.FunctionComponent<Document> = ({ imageName, uri, title }) => {
  const [showQrView, setShowQrView] = useState(false);

  return (
    <a data-testid="display-card" className="w-full md:w-1/2 lg:w-1/3 px-0 md:px-2 py-4 md:py-2" href={uri}>
      <CardContainer className="flex justify-center rounded bg-white">
        <HoverContainer data-testid="hover-container" className="flex-column">
          <div className="relative overflow-hidden">
            {!showQrView ? (
              <DocumentContainer
                data-testid="document-container"
                className="rounded object-contain"
                src={require(`../../resources/documentThumbnails/${imageName}.jpg`)}
                alt="document"
              />
            ) : (
              <QRCode data-testid="qr-code" className="mx-auto" value={uri} size={224} level={"H"} />
            )}
            {!showQrView ? (
              <QrCodeButton
                handleClick={event => {
                  event.preventDefault();
                  event.stopPropagation();
                  setShowQrView(!showQrView);
                }}
              />
            ) : (
              <ShowDocumentButton
                data-testid="show-document-button"
                onClick={event => {
                  event.preventDefault();
                  event.stopPropagation();
                  setShowQrView(!showQrView);
                }}
                className="absolute bottom-0 right-0 flex justify-center transition-colors duration-300 ease-out hover:bg-secondary hover:text-white"
              >
                <MdDescription size={20} className="self-center" />
              </ShowDocumentButton>
            )}
          </div>
          <DocumentDetails className="mt-5 font-medium text-base">{title}</DocumentDetails>
        </HoverContainer>
      </CardContainer>
    </a>
  );
};
