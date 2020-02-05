import React from "react";
import { UploadButton } from "./uploadButton";
import styled from "@emotion/styled";

const NavbarContainer = styled.div`
  background-color: #2c3549;
`;

export const Navbar: React.FunctionComponent = () => {
  const handleUpload = (): void => {
    console.log("uploaded");
  };

  return (
    <NavbarContainer className="flex flex-row justify-between px-56 p-3 text-white">
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
    </NavbarContainer>
  );
};
