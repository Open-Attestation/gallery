import React from "react";
import QRCode from "qrcode.react";

interface RenderQrCodeProps {
  url: string;
}

export const RenderQrCode: React.FunctionComponent<RenderQrCodeProps> = ({ url }) => {
  return (
    <div className="flex justify-center">
      <QRCode value={url} size={224} level={"H"} />
    </div>
  );
};
