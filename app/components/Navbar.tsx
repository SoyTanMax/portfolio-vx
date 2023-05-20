import { NavLink, useLocation } from "@remix-run/react";
import Logo from "./Logo";
import XMarkIcon from "~/icons/XMarkIcon";
import { useState } from "react";
import MenuIcon from "~/icons/MenuIcon";

export default function Navbar({ links }: Props){
  const location = useLocation();

  const [open, setOpen] = useState(false)

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
            target="_blank" 
            rel="noreferrer"
            className={`hover:text-white transition duration-200 ${
              location.pathname === link.to
                ? "text-white font-bold border-b-2 border-purple-500"
                : "text-slate-400"
            }`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div onClick={() => setOpen(prevOpen => !prevOpen)} className="flex md:hidden">
            <MenuIcon width={32} color={"white"} classes={"hover:cursor-pointer"} />
      </div>
      {open && (
        <div className='w-full min-h-screen bg-black/50 absolute top-0 left-0 overflow-hidden'>
          <div className='w-64 h-full bg-white fixed top-0 right-0 flex flex-col rounded-l-lg'>
            <div onClick={() => setOpen(prevOpen => !prevOpen)} className='mt-8 mr-[24px] self-end'>
              <XMarkIcon width={32} />
            </div>
            <div className="flex flex-col items-center gap-8 mt-12">
              {links.map(link => (
                <a key={link.id} href={link.to} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

type Props ={
    links: { id: number, to: string; label: string }[]
}
