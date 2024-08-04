import React, { SetStateAction, Dispatch } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { cssContainerWrapper } from "../../../constants";

interface MenuBarProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const navItems = [
  {
    label: "TradeTrust",
    to: "/tag/trade-trust?version=2"
  },
  {
    label: "OpenCerts",
    to: "/tag/open-certs"
  },
  {
    label: "HealthCerts",
    to: "/tag/health-certs"
  },
  {
    label: "Licence",
    to: "/tag/licence"
  },
  {
    label: "National Youth Council",
    to: "/tag/nyc-certs"
  }
];

export const MenuBar: React.FunctionComponent<MenuBarProps> = ({ searchValue, setSearchValue }: MenuBarProps) => {
  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <nav className={`${cssContainerWrapper} absolute left-0 right-0 transform -translate-y-1/2`}>
      {/* Menu bar content */}
      <div className="rounded-lg bg-white py-3 shadow-[0px_0px_2px_rgba(0,0,0,0.04),0px_2px_6px_rgba(0,0,0,0.04),0px_8px_24px_rgba(0,0,0,0.06)]">
        <div className="flex flex-wrap px-5 items-center">
          <NavLink
            className={({ isActive }) =>
              [
                "w-auto px-2 py-1 rounded-md font-normal text-gray-700 text-sm transition-colors duration-300 ease-out hover:bg-orange-200 hover:text-orange mx-1",
                isActive ? "font-semibold text-orange bg-orange-200 focus:outline-none" : "",
              ].join(" ")
            }
            to={`/`}
            end
          >
            All
          </NavLink>
          {navItems.map((item, index) => {
            return (
              <NavLink
                key={`nav-item-${index}`}
                className={({ isActive }) =>
                  [
                    "w-auto px-2 py-1 rounded-md font-normal text-gray-700 text-sm transition-colors duration-300 ease-out hover:bg-orange-200 hover:text-orange mx-1",
                    isActive ? "font-semibold text-orange bg-orange-200 focus:outline-none" : "",
                  ].join(" ")
                }
                to={`${item.to}`}
              >
                {item.label}
              </NavLink>
            );
          })}
          <div className="w-full md:w-auto md:ml-auto">
            {/* Search bar */}
            <div className="border border-[#e2e7eb] box-border">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
