import React from "react";
import { IoHome, IoPeople } from "react-icons/io5";
import { FaAddressBook, FaFlag, FaShip, FaSwimmer } from "react-icons/fa";
import {
  numberOfAccomodations,
  numberOfActivities,
  numberOfCountries,
  numberOfDestinations,
  numberOfGuides,
  numberOfUsers,
} from "@/lib/actions";

const ItemTotals = async () => {
  const users = await numberOfUsers();
  const guides = await numberOfGuides();
  const accomodations = await numberOfAccomodations();
  const destinations = await numberOfDestinations();
  const countries = await numberOfCountries();
  const activities = await numberOfActivities();

  return (
    <div className="my-3 flex justify-center">
      <div className="flex items-center gap-4">
        <div className="hover:border hover:border-slate-900 bg-blue-200 px-2 py-2 flex items-center justify-center flex-col">
          <IoPeople className="text-2xl text-blue-900" />
          <p className="font-bold text-blue-600">Number of Users</p>
          {users.map(user => (
            <p key={user.user} className="text-[black] font-bold">
              {user.users}
            </p>
          ))}
        </div>

        <div className="hover:border hover:border-slate-900 bg-blue-200 px-2 py-2 flex items-center justify-center flex-col">
          <FaAddressBook className="text-xl text-blue-900" />
          <p className="font-bold text-blue-600">Number of Guides</p>
          {guides.map(guide => (
            <p key={guide.guides} className="text-[black] font-bold">
              {guide.guides}
            </p>
          ))}
        </div>

        <div className="hover:border hover:border-slate-900 bg-blue-200 px-2 py-2 flex items-center justify-center flex-col">
          <FaShip className="text-xl text-blue-900" />
          <p className="font-bold text-blue-600">Number of Destinations</p>
          {destinations.map(destination => (
            <p
              key={destination.destinations}
              className="text-[black] font-bold">
              {destination.destinations}
            </p>
          ))}
        </div>

        <div className="hover:border hover:border-slate-900 bg-blue-200 px-2 py-2 flex items-center justify-center flex-col">
          <IoHome className="text-xl text-blue-900" />
          <p className="font-bold text-blue-600">Total Accomodations</p>
          {accomodations.map(accomodation => (
            <p
              key={accomodation.accomodations}
              className="text-[black] font-bold">
              {accomodation.accomodations}
            </p>
          ))}
        </div>

        <div className="hover:border hover:border-slate-900 bg-blue-200 px-2 py-2 flex items-center justify-center flex-col">
          <FaSwimmer className="text-xl text-blue-900" />
          <p className="font-bold text-blue-600">Number of Activities</p>
          {activities.map(activity => (
            <p key={activity.activities} className="text-[black] font-bold">
              {activity.activities}
            </p>
          ))}
        </div>

        <div className="hover:border hover:border-slate-900 bg-blue-200 px-2 py-2 flex items-center justify-center flex-col">
          <FaFlag className="text-xl text-blue-900" />
          <p className="font-bold text-blue-600">Number of Countries</p>
          {countries.map(country => (
            <p key={country.countries} className="text-[black] font-bold">
              {country.countries}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemTotals;
