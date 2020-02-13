import React from "react";
import { cssContainerWrapper } from "../../constants";
import { UploadButton } from "./uploadButton";

export const Navbar: React.FunctionComponent = () => {
  const handleUpload = (): void => {
    console.log("uploaded");
  };

  return (
    <nav className="py-3 text-white bg-secondary">
      <div className={`${cssContainerWrapper}`}>
        <div className="flex flex-row flex-grow flex-shrink justify-between">
          <div className="flex self-center">
            <a href="./">
              Open<span className="font-bold">Attestation</span>
            </a>
          </div>
          <div className="flex flex-row justify-between items-center">
            <a href="#" className="transition-colors duration-300 ease-out hover:text-gray-400 mr-5">
              About
            </a>
            <UploadButton onClick={handleUpload}>Upload</UploadButton>
          </div>
        </div>
      </div>
    </nav>
  );
};
