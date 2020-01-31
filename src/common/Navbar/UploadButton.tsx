import React from "react";
import { FiUpload } from "react-icons/fi";

//not sure about this part
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: any; //??
}

const UploadButton: React.FunctionComponent<ButtonProps> = ({ onClick, children, ...shared }) => {
  return (
    <button onClick={onClick} {...shared}>
      <FiUpload className="self-center" color="#ffffff" />
      {children}
    </button>
  );
};

export default UploadButton;
