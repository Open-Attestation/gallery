import React, { useState } from "react";
import styled from "@emotion/styled";
import QRCode from "qrcode.react";
import { MdDescription } from "react-icons/md";
import { QrCodeButton } from "./qrCodeButton";

const BackButton = styled.div`
  width: 48px;
  height: 48px;
  background: #feeee7;
  border-radius: 12px 0px 4px;
  transition: transform 0.3s ease-in;
  transform: translateX(100%) translateY(100%);
`;

const CardContainer = styled.div`
  padding: 30px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.4s ease-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
`;

const HoverContainer = styled.div`
  &:hover {
    ${BackButton} {
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

interface DocumentCardProps {
  className?: string;
  title: string;
  url: string;
  imageName?: string;
}

export const DocumentCard: React.FunctionComponent<DocumentCardProps> = ({ imageName, url, title }) => {
  const [qr, setQr] = useState(false);

  return (
    <a href={url}>
      <CardContainer className="flex justify-center rounded bg-white">
        <HoverContainer className="flex-column">
          <div className="relative overflow-hidden">
            {!qr ? (
              <DocumentContainer
                className="rounded object-contain"
                src={require(`../../resources/documentThumbnails/${imageName}.jpg`)}
                alt="document"
              />
            ) : (
              <QRCode className="ml-auto mr-auto" value={url} size={224} level={"H"} />
            )}
            {!qr ? (
              <QrCodeButton
                handleClick={event => {
                  event.preventDefault();
                  event.stopPropagation();
                  setQr(!qr);
                }}
              />
            ) : (
              <BackButton
                onClick={event => {
                  event.preventDefault();
                  event.stopPropagation();
                  setQr(!qr);
                }}
                className="absolute bottom-0 right-0 flex justify-center"
              >
                <MdDescription size={20} className="self-center" />
              </BackButton>
            )}
          </div>
          <DocumentDetails className="mt-5 font-medium text-base">{title}</DocumentDetails>
        </HoverContainer>
      </CardContainer>
    </a>
  );
};
