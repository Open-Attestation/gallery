import React from "react";
import styled from "@emotion/styled";

const ButtonContainer = styled.button`
  line-height: 17px;
  letter-spacing: -0.02em;
  padding: 6px 12px;
  border-radius: 0.5rem;
`;

interface MenuBarButtonsProps {
  setSelectedButton: (name: string) => () => void;
  selectedButton: string;
}

export const MenuBarButtons: React.FunctionComponent = (props: MenuBarButtonsProps) => {
  const onSelectFilter = (name: string) => () => {
    props.setSelectedButton(name);
  };

  const renderButton = (buttonName: string): JSX.Element => {
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
      <div onClick={onSelectFilter("All")}>{renderButton("All")}</div>
      <div onClick={onSelectFilter("TradeTrust")}>{renderButton("TradeTrust")}</div>
      <div onClick={onSelectFilter("Opencerts")}>{renderButton("Opencerts")}</div>
      <div onClick={onSelectFilter("Licence")}>{renderButton("Licence")}</div>
    </div>
  );
};
