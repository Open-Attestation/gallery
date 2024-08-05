import React from "react";
import { AiOutlineQrcode } from "react-icons/ai";

interface QrCodeProps {
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const QrCodeButton: React.FunctionComponent<QrCodeProps> = ({ handleClick }) => {
  return (
    <div
      data-testid="qr-button"
      onClick={handleClick}
      className="bg-orange-200 hover:bg-navy hover:text-white absolute bottom-0 right-0 flex justify-center transition-colors duration-300 ease-out w-12 h-12 rounded-[12px_0px_4px]"
    >
      <AiOutlineQrcode size={20} className="self-center" />
    </div>
  );
};
