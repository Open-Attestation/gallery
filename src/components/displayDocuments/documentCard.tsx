import React, { useState } from "react";
import styled from "@emotion/styled";
import { QrCodeButton } from "./qrCodeButton";
import { RenderQrCode } from "./renderQrCode";
import { BackButton } from "./backButton";

const CardContainer = styled.div`
  background: #ffffff;
  padding: 30px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.04);
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
  image?: string | undefined;
}

export const DocumentCard: React.FunctionComponent<DocumentCardProps> = ({ image, url, title }) => {
  const [qr, setQr] = useState(false);

  return (
    <a href={url}>
      <CardContainer className="flex justify-center rounded">
        <div className="flex-column">
          <div className="relative">
            {!qr ? <DocumentContainer className="rounded" src={image} alt="document" /> : <RenderQrCode url={url} />}
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
                handleClick={event => {
                  event.preventDefault();
                  event.stopPropagation();
                  setQr(!qr);
                }}
              />
            )}
          </div>
          <DocumentDetails className="mt-5 font-medium text-base">{title}</DocumentDetails>
        </div>
      </CardContainer>
    </a>
  );
};
