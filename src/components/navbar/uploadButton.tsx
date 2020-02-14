import React, { ReactElement, ButtonHTMLAttributes } from "react";
import { FiUpload } from "react-icons/fi";

export const UploadButton: React.FunctionComponent<ButtonHTMLAttributes<any>> = ({
  onClick,
  children,
  ...rest
}): ReactElement => {
  return (
    <button
      onClick={onClick}
      {...rest}
      className="transition-colors duration-300 ease-out p-1 pr-2 pl-2 font-bold flex flex-row rounded-lg border-1 border-primary hover:border-primary-dark bg-primary hover:bg-primary-dark"
    >
      <FiUpload className="self-center pr-1" />
      {children}
    </button>
  );
};
