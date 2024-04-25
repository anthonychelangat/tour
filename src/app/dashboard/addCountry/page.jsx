import AddCountryForm from "@/components/AddCountryForm";
import React from "react";

const addCountry = () => {
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-center font-bold text-3xl mt-4 mb-8">Add Country</p>
        <AddCountryForm />
      </div>
    </div>
  );
};

export default addCountry;
