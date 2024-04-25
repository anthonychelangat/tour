"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavItem = ({ items }) => {
  const searchParam = useSearchParams();
  const place = searchParam.get("place");

  return (
    <div className="flex items-center gap-4">
      {items.map(item => (
        <Link
          className={`py-2 px-4 relative hover:bg-gray-200 ${
            place === item.place
              ? "text-blue-700 before:content-[''] before:w-full before:h-1 before:bg-blue-700 before:absolute before:bottom-0 before:pt-1"
              : ""
          }`}
          href={`/attractions/?place=${item.place}`}
          key={item.title}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItem;
