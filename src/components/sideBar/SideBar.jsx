"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaBook,
  FaFlag,
  FaFly,
  FaHome,
  FaLandmark,
  FaRainbow,
  FaSort,
  FaSwimmer,
  FaUser,
} from "react-icons/fa";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-1">
      <Link
        className={`flex items-center gap-5 py-2 relative hover:bg-[#8080ec] ${
          pathname === "/dashboard"
            ? "py-2 bg-gray-400 before:content-[''] before:py-1 before:absolute before:w-2 before:bg-blue-700 before:h-full before:right-0"
            : ""
        }`}
        href="/dasboard">
        <FaBook />
        Dashboard
      </Link>

      <Link
        className={`flex items-center gap-5 py-2 relative hover:bg-[#8080ec] ${
          pathname === "/dashboard/addUser"
            ? "py-2 bg-gray-400 before:content-[''] before:py-1 before:absolute before:w-2 before:bg-blue-700 before:h-full before:right-0"
            : ""
        }`}
        href="/dasboard/addUser">
        <FaUser />
        Add User
      </Link>

      <Link
        className={`flex items-center gap-3 py-2 relative hover:bg-[#8080ec] ${
          pathname === "/dashboard/addAccomodation"
            ? "py-2 bg-gray-400 before:content-[''] before:py-1 before:absolute before:w-2 before:bg-blue-700 before:h-full before:right-0"
            : ""
        }`}
        href="/dasboard/addAccomodation">
        <FaHome />
        Add Accomodation
      </Link>

      <Link
        className={`flex items-center gap-5 py-2 relative hover:bg-[#8080ec] ${
          pathname === "/dashboard/addCategory"
            ? "py-2 bg-gray-400 before:content-[''] before:py-1 before:absolute before:w-2 before:bg-blue-700 before:h-full before:right-0"
            : ""
        }`}
        href="/dasboard/addCategory">
        <FaSort />
        Add Category
      </Link>

      <Link
        className={`flex items-center gap-5 py-2 relative hover:bg-[#8080ec] ${
          pathname === "/dashboard/addDestination"
            ? "py-2 bg-gray-400 before:content-[''] before:py-1 before:absolute before:w-2 before:bg-blue-700 before:h-full before:right-0"
            : ""
        }`}
        href="/dasboard/addDestination">
        <FaLandmark />
        Add Destination
      </Link>

      <Link
        className={`flex items-center gap-5 py-2 relative hover:bg-[#8080ec] ${
          pathname === "/dashboard/addAttraction"
            ? "py-2 bg-gray-400 before:content-[''] before:py-1 before:absolute before:w-2 before:bg-blue-700 before:h-full before:right-0"
            : ""
        }`}
        href="/dasboard/addAttraction">
        <FaRainbow />
        Add Attraction
      </Link>

      <Link
        className={`flex items-center gap-5 py-2 relative hover:bg-[#8080ec] ${
          pathname === "/dashboard/addActivity"
            ? "py-2 bg-gray-400 before:content-[''] before:py-1 before:absolute before:w-2 before:bg-blue-700 before:h-full before:right-0"
            : ""
        }`}
        href="/dasboard/addActivity">
        <FaSwimmer />
        Add Activity
      </Link>

      <Link
        className={`flex items-center gap-5 py-2 relative hover:bg-[#8080ec] ${
          pathname === "/dashboard/addCountry"
            ? "py-2 bg-gray-400 before:content-[''] before:py-1 before:absolute before:w-2 before:bg-blue-700 before:h-full before:right-0"
            : ""
        }`}
        href="/dasboard/addCountry">
        <FaFlag />
        Add Country
      </Link>

      <Link
        className={`flex items-center gap-5 py-2 relative hover:bg-[#8080ec] ${
          pathname === "/dashboard/addRegion"
            ? "py-2 bg-gray-400 before:content-[''] before:py-1 before:absolute before:w-2 before:bg-blue-700 before:h-full before:right-0"
            : ""
        }`}
        href="/dasboard/addRegion">
        <FaFly />
        Add Region
      </Link>
    </div>
  );
};

export default SideBar;
