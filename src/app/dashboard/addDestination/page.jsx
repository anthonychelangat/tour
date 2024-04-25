import AddDestinationForm from "@/components/AddDestinationForm";
import SelectCountry from "@/components/SelectCountry";
import React from "react";

const addDestination = () => {
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-center font-bold text-3xl mt-4 mb-8">
          Add Destination
        </p>
        <AddDestinationForm />
        <SelectCountry />
      </div>
    </div>
  );
};

export default addDestination;
