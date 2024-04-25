"use client";
import React from "react";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const FullFooter = () => {
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
    <div className={`m-0  ${activeLink ? "hidden" : ""}`}>
      <Footer />
    </div>
  );
};

export default FullFooter;
