import React from "react";
import styled from "@emotion/styled";
import { MdArrowBack } from "react-icons/md";

const BackButtonContainer = styled.div`
  background: #feeee7;
  border-radius: 12px 0px 4px;
  width: 25px;
  height: 25px;
`;

interface BackButtonProps {
  className?: string;
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const BackButton: React.FunctionComponent<BackButtonProps> = ({ handleClick }) => {
  return (
    <BackButtonContainer onClick={handleClick} className="absolute bottom-0 right-0 flex justify-center">
      <MdArrowBack size={20} className="self-center" />
    </BackButtonContainer>
  );
};
