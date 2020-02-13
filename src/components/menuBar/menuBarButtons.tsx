import React from "react";
import styled from "@emotion/styled";
import { Tag } from "../displayDocuments/documents";

const ButtonContainer = styled.button`
  line-height: 17px;
  letter-spacing: -0.02em;
  padding: 6px 12px;
  border-radius: 0.5rem;
`;

interface MenuBarButtonsProps {
  setSelectedButton: (name: string | null) => () => void;
  selectedButton: string;
}

export const MenuBarButtons: React.FunctionComponent = (props: MenuBarButtonsProps) => {
  const onSelectFilter = (name: string | null) => () => {
    props.setSelectedButton(name);
  };

  const renderButton = (buttonName: string | null): JSX.Element => {
    if (!buttonName) {
      return !props.selectedButton ? (
        <ButtonContainer className="w-auto mx-1 font-semibold text-primary bg-primary-light focus:outline-none">
          All
        </ButtonContainer>
      ) : (
        <ButtonContainer
          className="w-auto mx-1 font-normal text-gray-700 text-sm transition-colors duration-300 ease-out
              hover:bg-primary-light hover:text-primary"
        >
          All
        </ButtonContainer>
      );
    }

    return props.selectedButton === buttonName ? (
      <ButtonContainer className="w-auto mx-1 font-semibold text-primary bg-primary-light focus:outline-none">
        {buttonName}
      </ButtonContainer>
    ) : (
      <ButtonContainer
        className="w-auto mx-1 font-normal text-gray-700 text-sm transition-colors duration-300 ease-out
        hover:bg-primary-light hover:text-primary"
      >
        {buttonName}
      </ButtonContainer>
    );
  };

  return (
    <div className="flex flex-wrap">
      <div onClick={onSelectFilter(null)}>{renderButton(null)}</div>
      <div onClick={onSelectFilter(Tag.TRADETRUST)}>{renderButton("TradeTrust")}</div>
      <div onClick={onSelectFilter(Tag.OPENCERTS)}>{renderButton("Opencerts")}</div>
      <div onClick={onSelectFilter(Tag.LICENCE)}>{renderButton("Licence")}</div>
    </div>
  );
};
