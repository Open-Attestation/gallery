import React from "react";
import styled from "@emotion/styled";
import { cssContainerWrapper } from "./../constants";
import ClipArt from "../resources/clip-uploading.png";

const HeaderTextOne = styled.div`
  line-height: 4.8rem;
  letter-spacing: -0.02em;
  color: #2c3549;
`;

const HeaderTextTwo = styled.div`
  line-height: 1.8rem;
`;

interface HeaderPictureProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const HeaderPicture: React.FunctionComponent<HeaderPictureProps> = ({ title, description, children }) => {
  return (
    <section>
      <div className={`${cssContainerWrapper} py-12`}>
        <div className="flex flex-wrap items-start">
          <div className="w-full sm:w-2/3">
            <HeaderTextOne className="font-semibold text-6xl">{title}</HeaderTextOne>
            <HeaderTextTwo className="font-light text-2xl mt-4 w-full md:w-9/12 lg:w-7/12">{description}</HeaderTextTwo>
            {children}
          </div>
          <div className="w-full sm:w-1/3">
            <img className="w-full mx-auto max-w-xs" src={ClipArt} alt="Uploading" />
          </div>
        </div>
      </div>
    </section>
  );
};
