import React from "react";
import FetchUsers from "@/components/FetchUsers";
import FetchDestinations from "@/components/FetchDestinations";
import FetchCountries from "@/components/FetchCountries";
import FetchAttractions from "@/components/FetchAttractions";
import UploadFile from "@/components/UploadFile";
import ItemTotals from "@/components/ItemTotals";

const dashboard = () => {
  return (
    <div className="p-2 ">
      <ItemTotals />
      <UploadFile />
      <div className="">
        <div>
          <FetchUsers />
        </div>
        <div>
          <FetchDestinations />
        </div>
        <div>
          <FetchCountries />
        </div>
        <div>
          <FetchAttractions />
        </div>
      </div>
    </div>
  );
};

export default dashboard;
