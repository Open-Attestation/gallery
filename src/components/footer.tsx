import React from "react";
import { cssContainerWrapper } from "./../constants";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className="py-6 text-white bg-navy">
      <div className={`${cssContainerWrapper}`}>
        <div className="flex flex-row">
          <div className="w-full">Copyright © 2020 Government Technology Agency (Singapore)</div>
        </div>
      </div>
    </footer>
  );
};
