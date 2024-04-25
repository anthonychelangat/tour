"use client";

import { addUser } from "@/lib/data";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  meassage: null,
};

const AddUserForm = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(addUser, initialState);

  return (
    <form className="space-y-4 flex flex-col" action={formAction}>
      <div>
        <p className="font-bold mb-1">User Name</p>
        <input
          className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
          type="text"
          placeholder="User Name"
          id="username"
          name="username"
        />
      </div>
      <div>
        <p className="font-bold mb-1">Email</p>
        <input
          className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />
      </div>
      <input
        className=""
        type="hidden"
        placeholder="Role"
        id="role"
        name="role"
      />
      <div>
        <p className="font-bold mb-1">Password</p>
        <input
          className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
          type="Password"
          placeholder="Password"
          id="password"
          name="password"
        />
      </div>
      <button
        className="py-2 px-4 bg-blue-700 hover:bg-blue-900 text-gray-50"
        id="submit"
        name="submit"
        value="insert">
        {pending ? "Adding User..." : "Add User"}
      </button>
      <div>
        {state?.message ? (
          <h3 className="text-center w-[30rem] bg-gray-500 py-2 px-4">
            {" "}
            {state?.message}
          </h3>
        ) : null}
      </div>
    </form>
  );
};

export default AddUserForm;
