import React, { SetStateAction, Dispatch } from "react";
import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { cssContainerWrapper } from "../../../constants";
import { MenuBarButtons } from "./menuBarButtons";
import { Tag } from "../documents";

const MenuBarContainer = styled.nav`
  transform: translateY(-50%);
`;

const MenuBarContent = styled.div`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 8px 24px rgba(0, 0, 0, 0.06);
`;

const SearchBar = styled.div`
  border: 1px solid #e2e7eb;
  box-sizing: border-box;
`;

interface MenuBarProps {
  selectedButton?: Tag;
  setSelectedButton: Dispatch<SetStateAction<Tag | undefined>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const MenuBar: React.FunctionComponent<MenuBarProps> = ({
  setSelectedButton,
  selectedButton,
  search,
  setSearch
}: MenuBarProps) => {
  const submitFormHandler = (): void => {
    console.log("Form submitted!");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <MenuBarContainer className={`${cssContainerWrapper} absolute left-0 right-0`}>
      <MenuBarContent className="rounded-lg bg-white py-3">
        <div className="flex flex-wrap px-5 items-center">
          <div className="w-full md:w-auto mb-3 md:mb-0">
            <MenuBarButtons setSelectedButton={setSelectedButton} selectedButton={selectedButton} />
          </div>
          <div className="w-full md:w-auto md:ml-auto">
            <SearchBar>
              <div className="flex flex-row items-center rounded">
                <FiSearch className="text-gray-500 m-3" />
                <form className="w-full mr-2" onSubmit={submitFormHandler}>
                  <input className="w-full" type="search" name="search" value={search} onChange={handleSearch} />
                </form>
              </div>
            </SearchBar>
          </div>
        </div>
      </MenuBarContent>
    </MenuBarContainer>
  );
};
