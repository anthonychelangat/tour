import React from "react";
import NavLink from "./NavLink";
//import { IoBedOutline } from "react-icons/io5";
//import { IoAirplaneOutline } from "react-icons/io5";
//import { IoCarSportOuline } from "react-icons/io5";
//import { TiTree } from "react-icons/ti";
//import { MdOutlineAirportShuttle } from "react-icons/md";

const NavItems = () => {
  return (
    <div className="flex items-center gap-4">
      <NavLink title="Stays" path="/" /* Icon={IoBedOutline}*/ />
      <NavLink title="Flights" path="/flights" /* Icon={IoAirplaneOutline}*/ />
      <NavLink
        title="Car Rentals"
        path="/carRentals" /* Icon={IoCarSportOuline}*/
      />
      <NavLink title="Attractions" path="/attractions" /* Icon={TiTree}*/ />
      <NavLink
        title="Airport Taxis"
        path="/airportTaxis"
        /* Icon={MdOutlineAirportShuttle}*/
      />
      <NavLink
        title="Dashboard"
        path="/dashboard"
        /* Icon={MdOutlineAirportShuttle}*/
      />
    </div>
  );
};

export default NavItems;
