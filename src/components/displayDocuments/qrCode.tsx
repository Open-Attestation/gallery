import React from "react";
import styled from "@emotion/styled";
import { AiOutlineQrcode } from "react-icons/ai";

const QrContainer = styled.div`
  background: #feeee7;
  border-radius: 12px 0px 4px;
  width: 48px;
  height: 48px;
`;

interface QrCodeProps {
  className?: string;
}

export const QrCode: React.FunctionComponent<QrCodeProps> = () => {
  return (
    <QrContainer className="absolute bottom-0 right-0 flex justify-center">
      <AiOutlineQrcode size={20} className="self-center" />
    </QrContainer>
  );
};
