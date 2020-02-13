import React from "react";
import styled from "@emotion/styled";

const SelectedButtonContainer = styled.div`
  background: #feeee7;
  color: #f75d20;
  padding: 6px 12px;
`;

const NormalButtonContainer = styled.div`
  color: #5c6477;
  padding: 6px 12px;
`;

const ButtonContainer = styled.button`
  line-height: 17px;
  letter-spacing: -0.02em;
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
      <SelectedButtonContainer className="font-semibold rounded-lg">{buttonName}</SelectedButtonContainer>
    ) : (
      <NormalButtonContainer className="text-sm">{buttonName}</NormalButtonContainer>
    );
  };

  return (
    <div>
      <ButtonContainer onClick={onSelectFilter("All")}>{renderButton("All")}</ButtonContainer>
      <ButtonContainer onClick={onSelectFilter("TradeTrust")}>{renderButton("TradeTrust")}</ButtonContainer>
      <ButtonContainer onClick={onSelectFilter("Opencerts")}>{renderButton("Opencerts")}</ButtonContainer>
      <ButtonContainer onClick={onSelectFilter("Licence")}>{renderButton("Licence")}</ButtonContainer>
    </div>
  );
};
