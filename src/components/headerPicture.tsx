import React from "react";
import { cssContainerWrapper } from "./../constants";
import ClipArt from "../resources/clip-uploading.png";

interface HeaderPictureProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const HeaderPicture: React.FunctionComponent<HeaderPictureProps> = ({ title, description, children }) => {
  return (
    <section className="bg-white">
      <div className={`${cssContainerWrapper} py-12`}>
        <div className="flex flex-wrap items-center">
          <div className="w-full sm:w-2/3">
            <div className="font-semibold text-6xl leading-[4.8rem] tracking-[-0.02em] text-[#2c3549]">{title}</div>
            <div className="font-light text-2xl mt-4 w-full md:w-9/12 lg:w-8/12 leading-[1.8rem]">{description}</div>
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
