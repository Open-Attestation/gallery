import React, { FunctionComponent } from "react";
import UploadButton from "./UploadButton";
import "../../../app.css";

const Header: FunctionComponent = () => {
  const handleUpload = (): void => {
    console.log("uploaded");
  };
  return (
    <div className="flex flex-row justify-between px-56 p-3 header-main">
      <div className="flex flex-row align-center self-center">
        <p className="text-white">Open</p>
        <p className="text-white font-bold">Attestation</p>
      </div>
      <div className="flex flex-row justify-between items-center header-right-section">
        <button className="text-white">About</button>
        <UploadButton className="text-white font-bold flex flex-row upload-button" onClick={handleUpload}>
          Upload
        </UploadButton>
      </div>
    </div>
  );
};

export default Header;
