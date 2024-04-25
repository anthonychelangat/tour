import React from "react";
import { IoLogOut, IoSearch } from "react-icons/io5";

const DashBoardHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-between pt-6 py-2 border-2 border-b-blue-900">
        <div className="flex items-center gap-2 px-2">
          <p className="text-3xl font-semibold">Welcome back</p>
          <p className="text-2xl text-blue-700 font-extrabold">
            Chelangat Anthony
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-blue-200 pl-2">
            <IoSearch className="text-xl" />
            <input
              className="outline-none bg-transparent py-2"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="flex rounded-sm items-center gap-2 text-gray-50 py-2 bg-red-700 hover:bg-red-900 px-3">
            <IoLogOut className="text-xl" />
            <p>LogOut</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
