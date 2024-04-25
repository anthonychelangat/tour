"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "./Header";
import Nav from "./navBar/Nav";

const FullHeader = () => {
  const links = [
    "/dashboard",
    "/dashboard/addUser",
    "/dashboard/addAccomodation",
    "/dashboard/addCountry",
    "/dashboard/addRegion",
    "/dashboard/addCategory",
    "/dashboard/addDestination",
    "/dashboard/addActivities",
    "/dashboard/addAttraction",
  ];

  const pathname = usePathname();
  const activeLink = links.some(link => pathname === link);
  return (
    <div
      className={`max-w-full bg-blue-700 py-4 ${activeLink ? "hidden" : ""}`}>
      <Header />
      <Nav />
    </div>
  );
};

export default FullHeader;
