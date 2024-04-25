import AddActivityForm from "@/components/AddActivityForm";
import React from "react";

const addActivity = () => {
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-center font-bold text-3xl mt-4 mb-8">Add Activity</p>
        <AddActivityForm />
      </div>
    </div>
  );
};

export default addActivity;
