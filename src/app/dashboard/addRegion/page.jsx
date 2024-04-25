import AddRegionForm from "@/components/AddRegionForm";
import React from "react";

const addRegion = () => {
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-center font-bold text-3xl mt-4 mb-8">Add Region</p>
        <AddRegionForm />
      </div>
    </div>
  );
};

export default addRegion;
