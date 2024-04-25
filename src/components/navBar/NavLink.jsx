"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
//import { IoBedOutline } from "react-icons/io5";

const NavLink = ({ title, path }) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        className={`flex items-center gap-1 hover:bg-gray-700 py-2 px-3 ${
          pathname === path
            ? "border border-solid border-gray-500 bg-gray-600"
            : ""
        }`}
        href={path}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};
export default NavLink;
