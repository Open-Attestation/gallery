import React from "react";
import { containerMain } from "./../constants";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className="py-6 text-white bg-secondary">
      <div className={`${containerMain}`}>
        <div className="flex flex-row">
          <div className="w-full">{/* <a href="./">Open<span className="font-bold">Attestation</span></a> */}</div>
        </div>
      </div>
    </footer>
  );
};
