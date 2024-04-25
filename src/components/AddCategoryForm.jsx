"use client";

import { addCategory } from "@/lib/data";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  meassage: null,
};

const AddCategoryForm = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(addCategory, initialState);

  return (
    <form className="space-y-4 flex flex-col" action={formAction}>
      <div>
        <p className="font-bold mb-1">Accomodation Category</p>
        <input
          className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
          type="text"
          placeholder="Accomodation Category"
          id="category"
          name="category"
        />
      </div>
      <div>
        <p className="font-bold mb-1">Description</p>
        <input
          className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
          type="text"
          placeholder="Description"
          id="description"
          name="description"
        />
      </div>

      <button
        className="py-2 px-4 bg-blue-700 hover:bg-blue-900 text-gray-50"
        id="submit"
        name="submit"
        value="insert">
        {pending ? "Adding Category..." : "Add Category"}
      </button>
      <div>
        {state?.message ? (
          <h3 className="text-center w-[30rem] bg-gray-500 py-2 px-4">
            {state?.message}
          </h3>
        ) : null}
      </div>
    </form>
  );
};

export default AddCategoryForm;
