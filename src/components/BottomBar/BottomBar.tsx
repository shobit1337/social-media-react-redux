import React from 'react';
import {
  IoHomeOutline,
  IoHome,
  IoNotificationsOutline,
  IoNotifications,
  IoAddCircleOutline,
  IoAddCircle,
  IoBookmarkOutline,
  IoBookmark,
  IoPeopleOutline,
  IoPeople,
} from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const BottomBar = () => {
  return (
    <div className="absolute bottom-0 right-0 left-0 flex items-center  justify-around border-t bg-white p-2 text-2xl text-gray-600 lg:hidden">
      <NavLink to="/">
        {({ isActive }) =>
          isActive ? <IoHome className="text-green-800" /> : <IoHomeOutline />
        }
      </NavLink>
      <NavLink to="/notifications">
        {({ isActive }) =>
          isActive ? (
            <IoNotifications className="text-green-800" />
          ) : (
            <IoNotificationsOutline />
          )
        }
      </NavLink>
      <NavLink to="/new">
        {({ isActive }) =>
          isActive ? <IoAddCircle className="text-green-800" /> : <IoAddCircleOutline />
        }
      </NavLink>
      <NavLink to="/bookmarks">
        {({ isActive }) =>
          isActive ? <IoBookmark className="text-green-800" /> : <IoBookmarkOutline />
        }
      </NavLink>
      <NavLink to="/friends">
        {({ isActive }) =>
          isActive ? <IoPeople className="text-green-800" /> : <IoPeopleOutline />
        }
      </NavLink>
    </div>
  );
};

export default BottomBar;
