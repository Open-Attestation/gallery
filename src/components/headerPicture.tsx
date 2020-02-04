import React from "react";
import styled from "@emotion/styled";
import ClipArt from "../resources/clip-uploading.png";

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
`;

export const HeaderPicture: React.FC = () => {
  return (
    <section className="flex flex-row justify-between px-56">
      <div className="mt-12">
        <HeaderTextOne className="font-semibold text-6xl">Gallery</HeaderTextOne>
        <HeaderTextTwo className="font-light text-2xl mt-4">
          Explore OpenAttestation documents
          <br />
          and create yours today
        </HeaderTextTwo>
      </div>
      <div>
        <ImgContainer className="mr-4 -mb-3" src={ClipArt} alt="Uploading" />
      </div>
    </section>
  );
};
