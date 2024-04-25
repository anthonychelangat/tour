import AddAttractionForm from "@/components/AddAttractionForm";
import React from "react";

const addAttraction = () => {
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-center font-bold text-3xl mt-4 mb-8">Add Attraction</p>
        <AddAttractionForm />
      </div>
    </div>
  );
};

export default addAttraction;
