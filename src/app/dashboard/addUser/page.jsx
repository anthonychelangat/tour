import AddUserForm from "@/components/AddUserForm";
import React from "react";

const addUser = () => {
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-center font-bold text-3xl mt-4 mb-8">Add User</p>
        <AddUserForm />
      </div>
    </div>
  );
};

export default addUser;
