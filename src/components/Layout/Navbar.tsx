import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav id="navbar" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <NavLogo />
            </div>
            <div className="sm:block sm:ml-6">
              <div className="flex">
                <NavItem link="profile" label="Profile" />
                <NavItem link="anime" label="Anime" />
                <DropdownMenu>
                  <DropdownItem link="ecchi" label="Ecchi" />
                  <DropdownItem link="Harem" label="Harem" />
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface navitemProps {
    stylecss ?: string;
    link : string;
    label : string;
    children ?: React.ReactNode;
}

const NavLogo = () => {
    return (
      <div className='h-8 w-auto text-white'>
        <Link to="#">Logo</Link>
      </div>
    );
  };

const NavItem = (props: navitemProps) => {
  return (
    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
      <Link to={props.link}>{props.label}</Link>
      {props.children}
    </div>
  );
};

const DropdownItem = (props: navitemProps) => {
  return (
    <div className='block px-4 py-2 text-sm text-gray-700'>
      <Link to={props.link}>{props.label}</Link>
    </div>
  );
};


const DropdownMenu = (props : {children : React.ReactNode}) => {
  return <div className='group inline-block relative'>
      <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Manga</button>
      <div className='hidden ring-1 ring-black ring-opacity-5 absolute group-hover:block bg-white'>{props.children}</div>
      </div>;
};

export default Navbar;
