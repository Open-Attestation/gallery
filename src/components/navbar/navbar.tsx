import React from "react";
import { containerMain } from "../../constants";
import { UploadButton } from "./uploadButton";
import styled from "@emotion/styled";

const NavbarTop = styled.nav`
  background-color: #2c3549;
`;

export const Navbar: React.FunctionComponent = () => {
  const handleUpload = (): void => {
    console.log("uploaded");
  };

  return (
    <NavbarTop className="py-3 text-white">
      <div className={`${containerMain} py-3 text-white`}>
        <div className="flex flex-row flex-grow flex-shrink justify-between">
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
        </div>
      </div>
    </NavbarTop>
  );
};
