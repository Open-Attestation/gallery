import React from "react";
import styled from "@emotion/styled";
import { AiOutlineQrcode } from "react-icons/ai";

const QrCodeButtonContainer = styled.div`
  border-radius: 12px 0px 4px;
  width: 48px;
  height: 48px;
`;

interface QrCodeProps {
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const QrCodeButton: React.FunctionComponent<QrCodeProps> = ({ handleClick }) => {
  return (
    <QrCodeButtonContainer
      data-testid="qr-button"
      onClick={handleClick}
      className="bg-primary-light hover:bg-secondary absolute bottom-0 right-0 flex justify-center transition-colors duration-300 ease-out hover:text-white"
    >
      <AiOutlineQrcode size={20} className="self-center" />
    </QrCodeButtonContainer>
  );
};
