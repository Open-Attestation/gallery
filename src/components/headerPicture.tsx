import React from "react";
import styled from "@emotion/styled";
import Clipart from "../resources/clip-uploading.svg";

const HeaderPictureContainer = styled.div`
  height: 19.5rem;
`;

const HeaderTextOne = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 77px;
  letter-spacing: -0.02em;
  color: #2c3549;
`;

const HeaderTextTwo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 30px;
`;

const ImgContainer = styled.img`
  padding-left: 14rem;
  height: 310px;
  object-fit: cover;
`;

export const HeaderPicture: React.FunctionComponent = () => {
  return (
    <HeaderPictureContainer className="flex flex-row justify-between px-56">
      <div className="mt-16">
        <HeaderTextOne>Gallery</HeaderTextOne>
        <HeaderTextTwo>Explore OpenAttestation documents</HeaderTextTwo>
        <HeaderTextTwo>and create yours today</HeaderTextTwo>
      </div>
      <div>
        <ImgContainer src={Clipart} alt="Uploading" />
      </div>
    </HeaderPictureContainer>
  );
};
