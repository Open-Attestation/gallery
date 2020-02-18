import React from "react";
import { FiUpload } from "react-icons/fi";
import { cssContainerWrapper } from "../constants";
import { Link } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => {
  const handleUpload = (): void => {
    console.log("uploaded");
  };

  return (
    <nav className="py-3 text-white bg-secondary">
      <div className={`${cssContainerWrapper}`}>
        <div className="flex flex-row flex-grow flex-shrink justify-between">
          <div className="flex self-center">
            <Link to="/">
              Open<span className="font-bold">Attestation</span>
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <Link to="/about" className="transition-colors duration-300 ease-out hover:text-gray-400 mr-5">
              About
            </Link>
            <button
              onClick={handleUpload}
              className="transition-colors duration-300 ease-out p-1 pr-2 pl-2 font-bold flex flex-row rounded-lg border-1 border-primary hover:border-primary-dark bg-primary hover:bg-primary-dark"
            >
              <FiUpload className="self-center pr-1" />
              Upload
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
