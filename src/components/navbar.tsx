import React from "react";
import { cssContainerWrapper } from "../constants";
import { Link } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="py-3 text-white bg-secondary">
      <div className={`${cssContainerWrapper}`}>
        <div className="flex flex-row flex-grow flex-shrink justify-between">
          <div className="flex self-center">
            <Link to="/">
              <img className="w-8 mr-4 inline-block" src="/static/img/common/oa.svg" alt="OpenAttestation logo" />
              Open<span className="font-bold">Attestation</span>
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <Link to="/about" className="transition-colors duration-300 ease-out hover:text-gray-400 mr-5">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
