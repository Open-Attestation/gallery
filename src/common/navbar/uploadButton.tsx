import React, { ButtonHTMLAttributes } from "react";
import { FiUpload } from "react-icons/fi";
import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #f75d20;
  border: 1px solid #f75d20;
  justify-content: space-evenly;
`;

export const UploadButton: React.FC<ButtonHTMLAttributes<any>> = ({ onClick, children, ...rest }) => {
  return (
    <Button onClick={onClick} {...rest} className="p-1 pr-2 pl-2 font-bold flex flex-row rounded-lg	">
      <FiUpload className="self-center pr-1" />
      {children}
    </Button>
  );
};
