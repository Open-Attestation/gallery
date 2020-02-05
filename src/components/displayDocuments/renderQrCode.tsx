import React from "react";
import styled from "@emotion/styled";
import QRCode from "qrcode.react";

const QrContainer = styled.div`
  width: 280px;
  height: 224px;
`;

interface RenderQrCodeProps {
  url: string;
}

export const RenderQrCode: React.FunctionComponent<RenderQrCodeProps> = props => {
  return (
    <QrContainer>
      <QRCode value={props.url} size={224} level={"H"} />
    </QrContainer>
  );
};
