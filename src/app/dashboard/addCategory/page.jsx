import AddCategoryForm from "@/components/AddCategoryForm";
import React from "react";

const addCategory = () => {
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-center font-bold text-3xl mt-4 mb-8">Add Category</p>
        <AddCategoryForm />
      </div>
    </div>
  );
};

export default addCategory;
