import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import Container from "../../global/container";
import { config } from "../../../constants";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../ui/dropdown";

import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}

      {/* Navbar Header */}
      <header className="px-4 h-14 text-gray-400 font-bold md:h-20 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-gray-800 z-50">
        <Container reverse>
          <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={config.logo}
                  alt="✨"
                  width={164}
                  height={54}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8 items-center">
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className={`group font-bold text-gray-400 flex items-center gap-2 ${
                    isActive("/") || isActive("/home2")
                      ? "text-hBlue"
                      : "hover:text-foreground/80"
                  } text-sm`}
                >
                  HOME{" "}
                  <span className="font-extrabold px-1">
                    <FaChevronDown />
                  </span>
                </div>
                <div tabIndex={1} className="dropdown-content menu">
                  <ul className="translate-y-1 bg-slate-900 rounded z-[1] w-52 p-2 shadow -translate-x-10 border-b border-x border-gray-700">
                    <li>
                      <Link
                        to="/"
                        className={`font-bold rounded border-gray-700 hover:border ${
                          isActive("/")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        HOME 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/LiveTrader"
                        className={`font-bold rounded border-gray-700 hover:border ${
                          isActive("/LiveTrader")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        HOME 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/trading"
                        className={`font-bold rounded border-gray-700 hover:border ${
                          isActive("/trading")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        HOME 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="dropdown font-bold dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className={`flex items-center gap-2 ${
                    isActive("/range-of-markets") ||
                    isActive("/range-of-markets")
                      ? "text-hBlue"
                      : "hover:text-foreground/80"
                  } text-sm`}
                >
                  <Link to="/range-of-markets">MARKETS</Link>
                  <span className="font-extrabold">
                    <FaChevronDown />
                  </span>
                </div>
                <div tabIndex={0} className="dropdown-content menu">
                  <ul className="translate-y-1 bg-slate-900 rounded z-[1] w-52 p-2 shadow -translate-x-10 border-b border-x border-gray-700">
                    <li>
                      <Link
                        to="/forex"
                        className={` font-extrabold rounded border-gray-700 hover:border ${
                          isActive("/forex")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        FOREX
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/stock"
                        className={` font-extrabold rounded border-gray-700 hover:border ${
                          isActive("/stock")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        STOCKS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/indices"
                        className={`font-bold rounded border-gray-700 hover:border ${
                          isActive("/indices")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        INDICES
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/commodities"
                        className={`font-bold rounded border-gray-700 hover:border ${
                          isActive("/commodities")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        COMMODITIES
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/digitalcurrency"
                        className={`font-bold rounded border-gray-700 hover:border ${
                          isActive("/digitalcurrency")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        CRYPTOCURRENCIES
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                to="/trading"
                className={`${
                  isActive("/trading")
                    ? "text-hBlue"
                    : "hover:text-foreground/80"
                } text-sm`}
              >
                ACCOUNT
              </Link>
              <div className="dropdown font-bold dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className={`flex items-center gap-2 ${
                    isActive("") || isActive("/home2")
                      ? "text-hBlue"
                      : "hover:text-foreground/80"
                  } text-sm`}
                >
                  MORE{" "}
                  <span className="font-extrabold">
                    <FaChevronDown />
                  </span>
                </div>
                <div tabIndex={0} className="dropdown-content menu">
                  <ul className="translate-y-1 bg-slate-900 rounded z-[1] w-56 p-2 shadow -translate-x-10 border-b border-x border-gray-700">
                    <li>
                      <Link
                        to="/funding"
                        className={`font-bold rounded border-gray-700 hover:border ${
                          isActive("/funding")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        FUNDING
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/withdrawal"
                        className={`font-bold rounded border-gray-700 hover:border ${
                          isActive("/withdrawal")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        WITHDRAWAL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/trading"
                        className={`font-bold rounded border-gray-700 hover:border ${
                          isActive("/trading")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        TRADING
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/citationinvest"
                        className={`font-bold rounded border-gray-700 hover:border ${
                          isActive("/citationinvest")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        CITATION INVEST
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/equitymarketspro"
                        className={`whitespace-nowrap font-bold rounded border-gray-700 hover:border ${
                          isActive("/equitymarketspro")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        EQUITY MARKETSPRO
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            {/* Open Drawer Button */}
            {!isOpen && (
              <button
                onClick={() => setIsOpen(true)}
                className="flex md:hidden text-white bg-blue-500 p-2 rounded shadow-lg hover:bg-blue-600"
              >
                <GiHamburgerMenu className="text-xl" />
              </button>
            )}

            {/* Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to={config.login_url}
                onClick={(e) => {
                  e.preventDefault(); // Prevent internal navigation
                  window.open(
                    config.login_url,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className={`${
                  isActive("/login") ? "text-hBlue" : "hover:text-foreground/80"
                } text-sm`}
              >
                Login{" "}
              </Link>
              <Link
                to={config.signup_url}
                onClick={(e) => {
                  e.preventDefault(); // Prevent internal navigation
                  window.open(
                    config.signup_url,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className={`${
                  isActive("/register")
                    ? "text-hBlue"
                    : "hover:text-foreground/80"
                } text-sm`}
              >
                Client Area
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/***************************************** 
                          mobile 
      *****************************************/}

      <div
        className={`fixed top-0 left-0 z-50 h-full w-full text-sm bg-slate-950 sm:max-w-md shadow-lg transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end px-4 py-2 bg-slate-900">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl focus:outline-none flex  bg-blue-500 p-1 rounded shadow-lg hover:bg-blue-600"
          >
            <FaXmark />
          </button>
        </div>

        <div className="ps-6 font-bold text-gray-500 pt-4">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="flex items-center gap-2">
                  HOME <FaChevronDown />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-900 border-gray-800 ms-6">
                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500">
                  <Link to="/">Home 1</Link>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500 my-1">
                  <Link to="/LiveTrader">Home 2</Link>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500">
                  <Link to="/trading">Home 3</Link>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="my-4">
            <DropdownMenu>
              <DropdownMenuTrigger>
                {" "}
                <span className="flex items-center gap-2">
                  MARKETS <FaChevronDown />
                </span>{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-900 border-gray-800 ms-6">
                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500">
                  <Link
                    to="/forex"
                    className={` font-extrabold rounded ${
                      isActive("/forex")
                        ? "text-hBlue"
                        : "hover:text-foreground/80"
                    }`}
                  >
                    FOREX
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500 my-1">
                  <Link
                    to="/stock"
                    className={` font-extrabold rounded  ${
                      isActive("/stock")
                        ? "text-hBlue"
                        : "hover:text-foreground/80"
                    }`}
                  >
                    STOCKS
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500">
                  {" "}
                  <Link
                    to="/indices"
                    className={`font-bold rounded border-gray-700 hover:border ${
                      isActive("/indices")
                        ? "text-hBlue"
                        : "hover:text-foreground/80"
                    }`}
                  >
                    INDICES
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500">
                  {" "}
                  <Link
                    to="/commodities"
                    className={`font-bold rounded border-gray-700 hover:border ${
                      isActive("/commodities")
                        ? "text-hBlue"
                        : "hover:text-foreground/80"
                    }`}
                  >
                    COMMODITIES
                  </Link>
                </DropdownMenuLabel>

                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500">
                  <Link
                    to="/digitalcurrency"
                    className={`font-bold rounded ${
                      isActive("/digitalcurrency")
                        ? "text-hBlue"
                        : "hover:text-foreground/80"
                    }`}
                  >
                    CRYPTOCURRENCIES
                  </Link>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="my-4">
            <Link
              to="/trading"
              className={`my-2 ${
                isActive("/trading") ? "text-hBlue" : "hover:text-foreground/80"
              } text-sm`}
            >
              ACCOUNT
            </Link>
          </div>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                {" "}
                <span className="flex items-center gap-2">
                  MORE <FaChevronDown />
                </span>{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-900 border-gray-800 ms-6">
                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500">
                  <Link
                    to="/funding"
                    className={`font-bold rounded ${
                      isActive("/funding")
                        ? "text-hBlue"
                        : "hover:text-foreground/80"
                    }`}
                  >
                    FUNDING
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500">
                  {" "}
                  <Link
                    to="/withdrawal"
                    className={`font-bold rounded ${
                      isActive("/withdrawal")
                        ? "text-hBlue"
                        : "hover:text-foreground/80"
                    }`}
                  >
                    WITHDRAWAL
                  </Link>{" "}
                </DropdownMenuLabel>
                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500">
                  <Link
                    to="/trading"
                    className={`font-bold rounded ${
                      isActive("/trading")
                        ? "text-hBlue"
                        : "hover:text-foreground/80"
                    }`}
                  >
                    TRADING
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500">
                  <Link
                    to="/citationinvest"
                    className={`font-bold rounded ${
                      isActive("/citationinvest")
                        ? "text-hBlue"
                        : "hover:text-foreground/80"
                    }`}
                  >
                    CITATION INVEST
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="hover:bg-gray-800 hover:border hover:border-gray-500">
                  <Link
                    to="/equitymarketspro"
                    className={`font-bold rounded ${
                      isActive("/equitymarketspro")
                        ? "text-hBlue"
                        : "hover:text-foreground/80"
                    }`}
                  >
                    EQUITY MARKETSPRO
                  </Link>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
