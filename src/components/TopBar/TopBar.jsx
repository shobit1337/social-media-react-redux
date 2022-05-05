import React from 'react';
import {
  IoChatbubbleEllipsesOutline,
  IoExitOutline,
  IoHome,
  IoHomeOutline,
  IoPeople,
  IoPeopleOutline,
} from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
  return (
    <>
      {/* LG Navbar */}
      <nav className="sticky top-0 right-0 left-0 hidden items-center justify-between border-b bg-white p-2 text-2xl text-gray-600 lg:flex">
        <span className="font-medium text-green-700">Social Media</span>

        <span className="flex items-center gap-5">
          <NavLink to="/">
            {({ isActive }) =>
              isActive ? <IoHome className="text-green-800" /> : <IoHomeOutline />
            }
          </NavLink>
          <NavLink to="/friends">
            {({ isActive }) =>
              isActive ? <IoPeople className="text-green-800" /> : <IoPeopleOutline />
            }
          </NavLink>
          <NavLink to="/chat">
            <IoChatbubbleEllipsesOutline />
          </NavLink>
        </span>
        <span className="flex items-center gap-5">
          <span className="flex h-6 w-6 items-center justify-around  rounded-full border lg:h-10 lg:w-10">
            SD
          </span>
          <NavLink to="/logout">
            <IoExitOutline />
          </NavLink>
        </span>
      </nav>

      {/* Movile Nav Bar */}
      <div className="sticky top-0 right-0 left-0 flex items-center justify-around border-b bg-white p-2 text-2xl text-gray-600">
        {/* <NavLink to="/chat"> */}
        <span className="flex h-6 w-6 items-center justify-around rounded-full border lg:h-10 lg:w-10">
          SD
        </span>
        {/* </NavLink> */}
        <span className="font-medium text-green-700">Social Media</span>
        <NavLink to="/chat">
          <IoChatbubbleEllipsesOutline />
        </NavLink>
      </div>
    </>
  );
};

export default TopBar;
