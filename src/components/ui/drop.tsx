import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location

  // Links array for easier management
  const links = [
    { name: "FOREX", path: "/forex" },
    { name: "FUNDING", path: "/funding" },
    { name: "WITHDRAWAL", path: "/withdrawal" },
    { name: "DIGITAL CURRENCY", path: "/digitalcurrency" },
    { name: "RANGE OF MARKET", path: "/range-of-markets" },
  ];

  return (
    <div className="relative inline-block text-left w-full text-sm text-gray-500 font-bold md:hidden">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 text-gray-500 font-bold px-4  rounded-md shadow-md transition duration-500 w-full"
      >
        OPTIONS
        <span
          className={`transform transition-transform duration-700 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <FaXmark /> : <GiHamburgerMenu />}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 bg-black w-full shadow-lg rounded-md overflow-hidden transform transition-all duration-700 ease-in-out origin-top ps-3 ${
          isOpen
            ? "max-h-96 scale-y-100 opacity-100"
            : "max-h-0 scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="ps-3 h-full">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`my-4 block ${
                  location.pathname === link.path
                    ? "text-hBlue"
                    : "text-gray-500"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
