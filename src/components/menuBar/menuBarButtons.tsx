import React, { SetStateAction, Dispatch } from "react";
import styled from "@emotion/styled";
import { Tag } from "../displayDocuments/documents";

const Button = (props: { title: string; selected: boolean }): JSX.Element => {
  const { title, selected } = props;
  const ButtonContainer = styled.button`
    line-height: 17px;
    letter-spacing: -0.02em;
    padding: 6px 12px;
    border-radius: 0.5rem;
  `;

  const className = selected
    ? "w-auto mx-1 font-semibold text-primary bg-primary-light focus:outline-none"
    : "w-auto mx-1 font-normal text-gray-700 text-sm transition-colors duration-300 ease-out hover:bg-primary-light hover:text-primary";

  return <ButtonContainer className={className}>{title}</ButtonContainer>;
};

interface MenuBarButtonsProps {
  selectedButton: Tag | null;
  setSelectedButton: Dispatch<SetStateAction<Tag | null>>;
}

export const MenuBarButtons = (props: MenuBarButtonsProps): JSX.Element => {
  const onSelectFilter = (name: Tag | null) => () => {
    props.setSelectedButton(name);
  };

  return (
    <div className="flex flex-wrap">
      <div onClick={onSelectFilter(null)}>
        <Button title="All" selected={props.selectedButton === null} />
      </div>
      <div onClick={onSelectFilter(Tag.TRADETRUST)}>
        <Button title="TradeTrust" selected={props.selectedButton === Tag.TRADETRUST} />
      </div>
      <div onClick={onSelectFilter(Tag.OPENCERTS)}>
        <Button title="Opencerts" selected={props.selectedButton === Tag.OPENCERTS} />
      </div>
      <div onClick={onSelectFilter(Tag.LICENCE)}>
        <Button title="Licence" selected={props.selectedButton === Tag.LICENCE} />
      </div>
    </div>
  );
};
