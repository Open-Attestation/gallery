import React, { useState } from "react";
import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { containerMain } from "./../constants";

const MenuBarContainer = styled.nav`
  transform: translateY(-50%);
`;

const MenuBarContent = styled.div`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 8px 24px rgba(0, 0, 0, 0.06);
`;

const NormalButtonContainer = styled.button`
  line-height: 17px;
  letter-spacing: -0.02em;
  padding: 6px 12px;
  border-radius: 0.5rem;
`;

const SearchBar = styled.div`
  border: 1px solid #e2e7eb;
  box-sizing: border-box;
`;

export const MenuBar: React.FunctionComponent = () => {
  const [search, setSearch] = useState<string>("");
  const submitFormHandler = (): void => {
    console.log("Form submitted!");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <MenuBarContainer className={`${containerMain} absolute left-0 right-0`}>
      <MenuBarContent className="rounded-lg bg-white py-3">
        <div className="flex flex-wrap px-5 items-center">
          <div className="w-full md:w-auto mb-3 md:mb-0">
            <div className="flex flex-wrap">
              <NormalButtonContainer className="w-auto mx-1 font-semibold text-primary bg-primary-light">
                All
              </NormalButtonContainer>
              <NormalButtonContainer className="w-auto mx-1 font-normal text-gray-700 text-sm transition-colors duration-300 ease-out hover:bg-primary-light hover:text-primary">
                TradeTrust
              </NormalButtonContainer>
              <NormalButtonContainer className="w-auto mx-1 font-normal text-gray-700 text-sm transition-colors duration-300 ease-out hover:bg-primary-light hover:text-primary">
                Opencerts
              </NormalButtonContainer>
              <NormalButtonContainer className="w-auto mx-1 font-normal text-gray-700 text-sm transition-colors duration-300 ease-out hover:bg-primary-light hover:text-primary">
                Licence
              </NormalButtonContainer>
            </div>
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
