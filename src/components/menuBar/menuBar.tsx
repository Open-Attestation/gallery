import React, { useState } from "react";
import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { containerMain } from "../../constants";
import { MenuBarButtons } from "./menuBarButtons";

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

export const MenuBar: React.FunctionComponent = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedButton, setSelectedButton] = useState<string>("All");

  const submitFormHandler = (): void => {
    console.log("Form submitted!");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <MenuBarContainer className={`${containerMain} absolute left-0 right-0`}>
      <MenuBarContent className="rounded-lg bg-white py-2">
        <div className="flex flex-wrap px-5 items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <div className="flex flex-wrap">
              <MenuBarButtons setSelectedButton={setSelectedButton} selectedButton={selectedButton} />
            </div>
          </div>
          <div className="w-full md:w-auto md:ml-auto">
            <SearchBar>
              <div className="flex flex-row items-center rounded">
                <FiSearch className="text-gray-500 m-3" />
                <form className="mr-2" onSubmit={submitFormHandler}>
                  <input type="search" name="search" value={search} onChange={handleSearch} />
                </form>
              </div>
            </SearchBar>
          </div>
        </div>
      </MenuBarContent>
    </MenuBarContainer>
  );
};
