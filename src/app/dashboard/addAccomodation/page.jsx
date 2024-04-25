import AddAccomodationForm from "@/components/AddAccomodationForm";
import React from "react";

const addAccomodation = () => {
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-center font-bold text-3xl mt-4 mb-8">
          Add Accomodation
        </p>
        <AddAccomodationForm />
      </div>
    </div>
  );
};

export default addAccomodation;
