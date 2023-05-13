import { NavLink, useLocation } from "@remix-run/react";
import Logo from "./Logo";

export default function Navbar({ links }: Props){
  const location = useLocation();

  return (
    <nav className="absolute top-0 left-0 z-10 w-full flex justify-between items-center px-[24px] py-[24px] sm:px-[64px] md:px-[96px] bg-transparent">
      <div className="flex items-center">
        <NavLink to="/" className="text-white flex gap-4 items-center">
            <Logo />
            <div>
                <p className="font-bold text-xl">
                    Max López
                </p>
                <p className="text-base">
                    UX Engineer
                </p>
            </div>
        </NavLink>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={`text-white hover:text-white transition duration-200 ${
              location.pathname === link.to
                ? "font-bold border-b-2 border-purple-500"
                : ""
            }`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="md:hidden flex items-center">
        <button className="outline-none mobile-menu-button">
          <svg
            className=" w-6 h-6 text-gray-500 hover:text-white"
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg
            className="w-6 h-6 text-gray-500 hover:text-white"
            x-show="showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

type Props ={
    links: { to: string; label: string }[]
}
