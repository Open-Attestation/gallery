import React, { useState } from "react";
import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";

const MenuBarContainer = styled.section`
  width: 70%;
  transform: translateY(-50%);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 8px 24px rgba(0, 0, 0, 0.06);
`;

const SelectedButtonContainer = styled.button`
  background: #feeee7;
  color: #f75d20;
  line-height: 17px;
  letter-spacing: -0.02em;
  padding: 6px 12px;
`;

const NormalButtonContainer = styled.button`
  color: #5c6477;
  line-height: 17px;
  letter-spacing: -0.02em;
  padding: 6px 12px;
`;

const SearchBar = styled.div`
  border: 1px solid #e2e7eb;
  box-sizing: border-box;
`;

export const MenuBar: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const submitFormHandler = (): void => {
    console.log("Form submitted!");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <MenuBarContainer className="rounded-lg bg-white h-16 ml-auto mr-auto absolute left-0 right-0 flex flex-row justify-between px-5 items-center">
      <div>
        <SelectedButtonContainer className="rounded-lg font-semibold">All</SelectedButtonContainer>
        <NormalButtonContainer className="font-normal text-sm ml-3">TradeTrust</NormalButtonContainer>
        <NormalButtonContainer className="font-normal text-sm ml-3">Opencerts</NormalButtonContainer>
        <NormalButtonContainer className="font-normal text-sm ml-3">Licence</NormalButtonContainer>
      </div>
      <SearchBar className="flex flex-row items-center rounded">
        <FiSearch className="text-gray-500 m-3" />
        <form className="mr-2" onSubmit={submitFormHandler}>
          <input type="search" name="search" value={search} onChange={handleSearch} />
        </form>
      </SearchBar>
    </MenuBarContainer>
  );
};
