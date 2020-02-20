import React, { SetStateAction, Dispatch, ReactElement } from "react";
import styled from "@emotion/styled";
import { Tag, TagType } from "../documents";

const Button: React.FunctionComponent<{ title: string; selected: boolean }> = ({
  title,
  selected
}: {
  title: string;
  selected: boolean;
}) => {
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
  selectedButton?: Tag;
  setSelectedButton: Dispatch<SetStateAction<Tag | undefined>>;
}

const RenderTagButtons: React.FunctionComponent<{
  onSelectFilter: (name?: Tag) => () => void;
  selectedButton?: Tag;
}> = ({ onSelectFilter, selectedButton }: { onSelectFilter: (name?: Tag) => () => void; selectedButton?: Tag }) => {
  return Object.keys(Tag).map(tag => {
    const currentTag: Tag = Tag[tag as TagType];

    return (
      <div key={currentTag} onClick={onSelectFilter(currentTag)}>
        <Button title={currentTag} selected={selectedButton === currentTag} />
      </div>
    );
  });
};

export const MenuBarButtons: React.FunctionComponent<MenuBarButtonsProps> = ({
  selectedButton,
  setSelectedButton
}: MenuBarButtonsProps) => {
  const onSelectFilter = (name?: Tag) => () => {
    setSelectedButton(name);
  };

  return (
    <div className="flex flex-wrap">
      <div onClick={onSelectFilter(undefined)}>
        <Button title="All" selected={!selectedButton} />
      </div>
      <RenderTagButtons onSelectFilter={onSelectFilter} selectedButton={selectedButton} />
    </div>
  );
};
