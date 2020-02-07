import React from "react";
import { UploadButton } from "./uploadButton";
import styled from "@emotion/styled";

const NavbarContainer = styled.div`
  background-color: #2c3549;
  min-width: 640px;
`;

const LinksContainer = styled.div`
  min-width: 480px;
`;

export const Navbar: React.FunctionComponent = () => {
  const handleUpload = (): void => {
    console.log("uploaded");
  };

  return (
    <NavbarContainer className="flex flex-row justify-center py-3 text-white">
      <LinksContainer className="flex flex-row flex-grow flex-shrink justify-between mx-56">
        <div className="flex self-center">
          Open
          <span className="font-bold">Attestation</span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <a href="#" className="mr-5">
            About
          </a>
          <UploadButton onClick={handleUpload}>Upload</UploadButton>
        </div>
      </LinksContainer>
    </NavbarContainer>
  );
};
