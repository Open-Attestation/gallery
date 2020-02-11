import React from "react";
import styled from "@emotion/styled";
import ClipArt from "../resources/clip-uploading.png";

const HeaderPictureContainer = styled.section`
  border: 1px red solid;
`;

const InnerText = styled.div`
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
  max-width: 100%;
`;

export const HeaderPicture: React.FunctionComponent = () => {
  return (
    <HeaderPictureContainer className="flex flex-wrap items-center mx-12 lg:mx-56">
      <div className="w-2/3">
        <InnerText className="py-12">
          <HeaderTextOne className="font-semibold text-6xl">Gallery</HeaderTextOne>
          <HeaderTextTwo className="font-light text-2xl mt-4">
            Explore OpenAttestation documents
            <br />
            and create yours today
          </HeaderTextTwo>
        </InnerText>
      </div>
      <div className="w-1/3">
        <ImgContainer src={ClipArt} alt="Uploading" />
      </div>
    </HeaderPictureContainer>
  );
};
