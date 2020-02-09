import React from "react";
import styled from "@emotion/styled";
import ClipArt from "../resources/clip-uploading.png";

const HeaderPictureContainer = styled.section`
  /* min-width: 800px; */
  border: 1px red solid;
`;

const InnerContainer = styled.div`
  /* min-width: 500px; */
  border: 1px blue solid;
`;

const InnerText = styled.div`
  flex: 0 0 370px;
  border: 1px green solid;
`;

const HeaderTextOne = styled.div`
  line-height: 4.8rem;
  letter-spacing: -0.02em;
  color: #2c3549;
`;

const HeaderTextTwo = styled.div`
  line-height: 1.8rem;
`;

const ImgContainer = styled.img`
  width: 400px;
  object-fit: cover;
  min-width: 360px;
`;

export const HeaderPicture: React.FunctionComponent = () => {
  return (
    <HeaderPictureContainer className="flex flex-row justify-between mx-56">
      <InnerText className="py-12">
        <HeaderTextOne className="font-semibold text-6xl">Gallery</HeaderTextOne>
        <HeaderTextTwo className="font-light text-2xl mt-4">
          Explore OpenAttestation documents
          <br />
          and create yours today
        </HeaderTextTwo>
      </InnerText>
      <div>
        <ImgContainer className="-mb-3 flex-grow flex-shrink " src={ClipArt} alt="Uploading" />
      </div>
    </HeaderPictureContainer>
  );
};
