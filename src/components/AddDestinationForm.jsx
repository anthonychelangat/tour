"use client";

import { addDestination } from "@/lib/data";
import { useFormState, useFormStatus } from "react-dom";
import SelectCountry from "./SelectCountry";

const initialState = {
  meassage: null,
};

const AddDestinationForm = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(addDestination, initialState);

  return (
    <form className="space-y-4 flex flex-col" action={formAction}>
      <div>
        <p className="font-bold mb-1">Destination Name</p>
        <input
          className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
          type="text"
          placeholder="Destination"
          id="destination"
          name="destination"
        />
      </div>
      <div>
        <p className="font-bold mb-1">Country</p>
        <input
          className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
          type="text"
          placeholder="Country"
          id="country"
          name="country"
        />
      </div>
      <div>
        <p className="font-bold mb-1">Country</p>
        <SelectCountry />
      </div>
      <div>
        <p className="font-bold mb-1">Region</p>
        <input
          className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
          type="text"
          placeholder="Region"
          id="region"
          name="region"
        />
      </div>
      <div>
        <p className="font-bold mb-1">Description</p>
        <input
          className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
          type="text"
          placeholder="Destination Description"
          id="description"
          name="description"
        />
      </div>

      <button
        className="py-2 px-4 bg-blue-700 hover:bg-blue-900 text-gray-50"
        id="submit"
        name="submit"
        value="insert">
        {pending ? "Adding Destination..." : "Add Destination"}
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

export default AddDestinationForm;
