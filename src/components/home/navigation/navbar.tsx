import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import Container from "../../global/container";
import { config } from "../../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "HOME", path: "/" },
    { name: "HOME 2", path: "/home2" },
    { name: "ABOUT US", path: "/about" },
    { name: "TRADING", path: "/trading" },
    { name: "FOREX", path: "/forex" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="w-full hidden sm:flex items-center bg-slate-900 justify-end">
        <ul className="flex items-center justify-center divide-x-2 divide-slate-700 text-sm py-2">
          <li className="text-center pe-4 hover:text-gray-600 text-gray-500 font-semibold">
            <Link to="#">Offers</Link>
          </li>
          <li className="text-center px-4 hover:text-gray-600 text-gray-500 font-semibold">
            <Link to="#">New York Red Bull</Link>
          </li>
          <li className="text-center px-4 hover:text-gray-600 text-gray-500 font-semibold">
            <Link to="#">Legal</Link>
          </li>
        </ul>
      </div>

      {/* Navbar Header */}
      <header className="px-4 h-14 md:h-20 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-gray-800 z-50">
        <Container reverse>
          <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={config.logo}
                  alt="✨"
                  width={124}
                  height={24}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8 items-center">
              {/* <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className={`${
                    isActive("/") || isActive("/home2")
                      ? "text-hBlue"
                      : "hover:text-foreground/80"
                  } text-sm`}
                >
                  Home
                </div>
                <div tabIndex={0} className="dropdown-content menu">
                  <ul className="translate-y-1 bg-slate-900 rounded z-[1] w-52 p-2 shadow -translate-x-10">
                    <li>
                      <Link
                        to="/"
                        className={`${
                          isActive("/")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        Home 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Home2"
                        className={`${
                          isActive("/Home2")
                            ? "text-hBlue"
                            : "hover:text-foreground/80"
                        }`}
                      >
                        Home 2
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
               <Link
                to="/"
                className={`${
                  isActive("/") ? "text-hBlue" : "hover:text-foreground/80"
                } text-sm`}
              >
               Home
              </Link>
              <Link
                to="/about"
                className={`${
                  isActive("/about") ? "text-hBlue" : "hover:text-foreground/80"
                } text-sm`}
              >
                About Us
              </Link>
              <Link
                to="/trading"
                className={`${
                  isActive("/trading")
                    ? "text-hBlue"
                    : "hover:text-foreground/80"
                } text-sm`}
              >
                Trading
              </Link>
              <Link
                to="/forex"
                className={`${
                  isActive("/forex") ? "text-hBlue" : "hover:text-foreground/80"
                } text-sm`}
              >
                Forex
              </Link>
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
                className={`${
                  isActive("/login") ? "text-hBlue" : "hover:text-foreground/80"
                } text-sm`}
              >
                Login{" "}
              </Link>
              <Link
                to={config.signup_url}
                className={`${
                  isActive("/register")
                    ? "text-hBlue"
                    : "hover:text-foreground/80"
                } text-sm`}
              >
                Start a free trial{" "}
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-full bg-slate-950 sm:max-w-md shadow-lg transform transition-transform duration-500 ${
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

        {/* Drawer Links */}
        <ul className="ps-6 text-gray-600 font-bold text-sm">
          {links.map((link) => (
            <li key={link.name} className="my-2">
              <Link
                to={link.path}
                className={isActive(link.path) ? "text-hBlue" : ""}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
