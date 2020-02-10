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
  max-width: 100%;
`;

export const HeaderPicture: React.FunctionComponent = () => {
  return (
    <section>
      <div className="container mx-auto px-2 py-8">
        <div className="flex flex-wrap items-center">
          <div className="w-2/3">
            <div className="py-12">
              <HeaderTextOne className="font-semibold text-6xl">Gallery</HeaderTextOne>
              <HeaderTextTwo className="font-light text-2xl mt-4">
                Explore OpenAttestation documents
                <br />
                and create yours today
              </HeaderTextTwo>
            </div>
          </div>
          <div className="w-1/3">
            <ImgContainer src={ClipArt} alt="Uploading" />
          </div>
        </div>
      </div>
    </section>
  );
};
