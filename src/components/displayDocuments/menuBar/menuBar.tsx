import React, { SetStateAction, Dispatch } from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { paramCase } from "change-case";
import { cssContainerWrapper } from "../../../constants";
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
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const MenuBar: React.FunctionComponent<MenuBarProps> = ({ searchValue, setSearchValue }: MenuBarProps) => {
  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <MenuBarContainer className={`${cssContainerWrapper} absolute left-0 right-0`}>
      <MenuBarContent className="rounded-lg bg-white py-3">
        <div className="flex flex-wrap px-5 items-center">
          <NavLink
            activeClassName="font-semibold text-orange bg-orange-200 focus:outline-none"
            className="w-auto px-2 py-1 rounded-md font-normal text-gray-700 text-sm transition-colors duration-300 ease-out hover:bg-orange-200 hover:text-orange mx-1"
            to={`/`}
            exact
          >
            All
          </NavLink>
          {Object.entries(Tag).map(([key, value]) => {
            return (
              <NavLink
                key={key}
                activeClassName="font-semibold text-orange bg-orange-200 focus:outline-none"
                className="w-auto px-2 py-1 rounded-md font-normal text-gray-700 text-sm transition-colors duration-300 ease-out hover:bg-orange-200 hover:text-orange mx-1"
                to={`/tag/${paramCase(value)}`}
              >
                {value}
              </NavLink>
            );
          })}
          <div className="w-full md:w-auto md:ml-auto">
            <SearchBar>
              <div className="flex flex-row items-center rounded">
                <FiSearch className="text-gray-500 m-3" />
                <form className="w-full mr-2 border-red border-solid" onSubmit={submitFormHandler}>
                  <input
                    data-testid="search-bar-input"
                    className="w-full focus:outline-none"
                    type="search"
                    name="search"
                    value={searchValue}
                    onChange={handleSearch}
                  />
                </form>
              </div>
            </SearchBar>
          </div>
        </div>
      </MenuBarContent>
    </MenuBarContainer>
  );
};
